"""Exercise security migrations on disposable local PostgreSQL, never production."""
import os
from pathlib import Path
import shutil
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
PG_BIN = Path(os.environ.get('PG_BIN', Path(shutil.which('psql') or '/missing/psql').resolve().parent))
for tool in ('initdb', 'pg_ctl', 'psql', 'createdb'):
    if not (PG_BIN / tool).is_file():
        raise SystemExit('Set PG_BIN to a PostgreSQL bin directory (initdb, pg_ctl, psql, createdb).')


def run(*args, **kwargs):
    result = subprocess.run([str(x) for x in args], text=True, capture_output=True, **kwargs)
    if result.returncode:
        raise RuntimeError(result.stderr)
    return result.stdout


with tempfile.TemporaryDirectory(prefix='python-pa-db-', dir='/tmp') as temporary:
    temp = Path(temporary)
    data = temp / 'data'
    run(PG_BIN / 'initdb', '-D', data, '-U', 'postgres', '--auth-local=trust', '--auth-host=reject', '--encoding=UTF8', '--no-locale')
    run(PG_BIN / 'pg_ctl', '-D', data, '-l', temp / 'postgres.log', '-o', f"-k {temp} -c listen_addresses=''", '-w', 'start')
    try:
        def sql(statement, database='postgres', expected_error=None):
            result = subprocess.run([str(PG_BIN / 'psql'), '-X', '-h', str(temp), '-U', 'postgres', '-d', database,
                                     '-v', 'ON_ERROR_STOP=1', '-v', 'VERBOSITY=sqlstate', '-At'],
                                    input=statement, capture_output=True, text=True)
            if expected_error:
                assert result.returncode != 0 and expected_error in result.stderr, (statement, result.stdout, result.stderr)
            else:
                assert result.returncode == 0, (statement, result.stderr)
            return result.stdout.strip()

        sql('CREATE ROLE anon; CREATE ROLE authenticated; CREATE ROLE service_role BYPASSRLS;')
        setup = (ROOT / 'supabase-setup.sql').read_text()
        migration = (ROOT / 'supabase/migrations/202609170001_close_registration_access.sql').read_text()
        # Fixed historical fixture; this script never connects to production.
        legacy = (ROOT / 'tests/fixtures/legacy-registration-schema.sql').read_text()
        volunteer = "INSERT INTO public.volunteers (name,email,city) VALUES ('Synthetic','synthetic@example.invalid','Panamá')"
        route = "INSERT INTO public.python_route_registrations (name,email,age,province,group_type,workshop_interest,programming_experience,data_protection_accepted) VALUES ('Synthetic','synthetic@example.invalid',18,'Panamá','Estudiante','Python','Básica',true)"
        checks = 0
        for database in ('fresh', 'legacy'):
            sql(f'CREATE DATABASE {database}')
            sql('''GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
                ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;
                ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
                CREATE SCHEMA auth;
                CREATE FUNCTION auth.role() RETURNS text LANGUAGE sql AS $$ SELECT current_user::text $$;
                GRANT USAGE ON SCHEMA auth TO anon, authenticated;
            ''', database)
            sql(legacy if database == 'legacy' else setup, database)
            if database == 'legacy':
                # Preserve historical invalid data and test pre-existing per-column grants/policies.
                sql("INSERT INTO volunteers (name,email) VALUES ('Legacy','invalid');", database)
                sql("INSERT INTO python_route_registrations (name,email,province,group_type,workshop_interest,programming_experience) VALUES ('Legacy','invalid','','','','');", database)
                sql('GRANT SELECT(email), UPDATE(name) ON volunteers TO PUBLIC, anon, authenticated;', database)
                sql('CREATE POLICY unrelated_permissive_policy ON volunteers FOR ALL USING (true) WITH CHECK (true);', database)
            sql('CREATE TABLE unrelated (id int); GRANT SELECT ON unrelated TO anon;', database)
            before = {table: sql(f'SELECT coalesce(jsonb_agg(to_jsonb(t))::text,\'[]\') FROM {table} t', database)
                      for table in ('volunteers', 'python_route_registrations')}
            sql(migration, database)
            sql(migration, database)  # Idempotent, including constraints and policy.
            assert sql("SELECT has_table_privilege('anon','unrelated','SELECT')", database) == 't'
            for table in before:
                assert before[table] == sql(f'SELECT coalesce(jsonb_agg(to_jsonb(t))::text,\'[]\') FROM {table} t', database)
                for role in ('anon', 'authenticated'):
                    for statement in [f'SELECT email FROM {table}', f"UPDATE {table} SET name='Changed'", f'DELETE FROM {table}',
                                      volunteer if table == 'volunteers' else route,
                                      f"SELECT nextval('{table}_id_seq')", f'TRUNCATE {table}']:
                        sql(f'SET ROLE {role}; {statement};', database, '42501')
                        checks += 1
            sql('SET ROLE service_role; ' + volunteer + '; ' + route + '; SELECT email FROM volunteers;', database)
            for statement in [volunteer.replace("'Synthetic'", "' '"), volunteer.replace("'Panamá'", "repeat('x',101)"),
                              route.replace(',18,', ',121,'), route.replace(',18,', ',NULL,'), route.replace(',true)', ',false)'),
                              route.replace("'synthetic@example.invalid'", "'invalid'")]:
                sql('SET ROLE service_role; ' + statement, database, '23514')
                checks += 1
            # Even if a future grant and permissive policy reopen CRUD, restrictive RLS blocks it.
            sql('GRANT SELECT,INSERT,UPDATE,DELETE ON volunteers TO anon,authenticated; GRANT USAGE ON SEQUENCE volunteers_id_seq TO anon,authenticated;', database)
            sql('CREATE POLICY accidental_reopen ON volunteers FOR ALL USING (true) WITH CHECK (true);', database)
            for role in ('anon', 'authenticated'):
                assert sql(f'SET ROLE {role}; SELECT count(*) FROM volunteers;', database).splitlines()[-1] == '0'
                sql(f'SET ROLE {role}; {volunteer}', database, '42501')
                checks += 2
            print(f'{database}: data preserved; client access denied; service access and constraints verified; migration repeatable.')
        sql('CREATE DATABASE partial')
        sql('CREATE SCHEMA auth; CREATE FUNCTION auth.role() RETURNS text LANGUAGE sql AS $$ SELECT current_user::text $$;', 'partial')
        sql(legacy, 'partial')
        sql('DROP TABLE python_route_registrations', 'partial')
        sql(migration, 'partial')
        assert sql("SELECT to_regclass('public.python_route_registrations') IS NULL", 'partial') == 't'
        assert sql("SELECT has_table_privilege('anon','volunteers','SELECT')", 'partial') == 'f'
        print('partial: absent table safely skipped; existing table secured.')
        print(f'{checks} access/validation checks passed in temporary PostgreSQL.')
    finally:
        run(PG_BIN / 'pg_ctl', '-D', data, '-m', 'immediate', '-w', 'stop')
