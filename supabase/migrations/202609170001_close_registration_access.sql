-- Aplicar con una cuenta administradora, después de inventariar grants, vistas y RPC.
-- Reejecutable. Un fallo revierte toda la transacción. No requiere borrar datos.
BEGIN;
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '30s';

-- Los formularios están desactivados: los roles del navegador no necesitan acceso.
-- No se borra ni se transforma ningún registro existente.
DO $security$
DECLARE
    target text;
    column_names text;
    sequence_name text;
BEGIN
    FOREACH target IN ARRAY ARRAY['volunteers', 'python_route_registrations'] LOOP
        IF to_regclass(format('public.%I', target)) IS NULL THEN
            RAISE NOTICE 'Table public.% absent; no changes required for it', target;
            CONTINUE;
        END IF;
        EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', target);
        EXECUTE format('REVOKE ALL PRIVILEGES ON TABLE public.%I FROM PUBLIC, anon, authenticated', target);
        -- Los permisos por columna sobreviven a REVOKE a nivel de tabla.
        SELECT string_agg(quote_ident(attname), ', ' ORDER BY attnum)
          INTO column_names FROM pg_attribute
          WHERE attrelid = format('public.%I', target)::regclass
            AND attnum > 0 AND NOT attisdropped;
        EXECUTE format('REVOKE ALL PRIVILEGES (%s) ON TABLE public.%I FROM PUBLIC, anon, authenticated', column_names, target);
        sequence_name := pg_get_serial_sequence(format('public.%I', target), 'id');
        IF sequence_name IS NOT NULL THEN
            EXECUTE format('REVOKE ALL PRIVILEGES ON SEQUENCE %s FROM PUBLIC, anon, authenticated', sequence_name);
        END IF;
        EXECUTE format('DROP POLICY IF EXISTS "Enable insert for all users" ON public.%I', target);
        EXECUTE format('DROP POLICY IF EXISTS "Enable read for authenticated users only" ON public.%I', target);
        EXECUTE format('DROP POLICY IF EXISTS closed_registration_forms ON public.%I', target);
        -- Restrictiva: otras políticas permisivas no vuelven a abrir estas tablas.
        EXECUTE format('CREATE POLICY closed_registration_forms ON public.%I AS RESTRICTIVE FOR ALL TO anon, authenticated USING (false) WITH CHECK (false)', target);
    END LOOP;
END
$security$;

-- NOT VALID preserva datos históricos; sí se aplica a nuevas inserciones y actualizaciones.
DO $constraint$
BEGIN
    IF to_regclass('public.volunteers') IS NOT NULL
       AND NOT EXISTS (SELECT 1 FROM pg_constraint
        WHERE conrelid = to_regclass('public.volunteers')
          AND conname = 'volunteers_safe_input') THEN
        ALTER TABLE public.volunteers
            ADD CONSTRAINT volunteers_safe_input CHECK (
    name IS NOT NULL AND char_length(btrim(name)) BETWEEN 1 AND 150
    AND email IS NOT NULL AND char_length(email) <= 254
    AND email ~ '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
    AND city IS NOT NULL AND char_length(btrim(city)) BETWEEN 1 AND 100
    AND (phone IS NULL OR char_length(phone) <= 40)
    AND (experience IS NULL OR char_length(experience) <= 100)
    AND (interests IS NULL OR char_length(interests::text) <= 1000)
    AND (availability IS NULL OR char_length(availability) <= 100)
    AND (message IS NULL OR char_length(message) <= 2000)
            ) NOT VALID;
    END IF;
END
$constraint$;
DO $constraint$
BEGIN
    IF to_regclass('public.python_route_registrations') IS NOT NULL
       AND NOT EXISTS (SELECT 1 FROM pg_constraint
        WHERE conrelid = to_regclass('public.python_route_registrations')
          AND conname = 'python_route_registrations_safe_input') THEN
        ALTER TABLE public.python_route_registrations
            ADD CONSTRAINT python_route_registrations_safe_input CHECK (
    name IS NOT NULL AND char_length(btrim(name)) BETWEEN 1 AND 150
    AND email IS NOT NULL AND char_length(email) <= 254
    AND email ~ '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
    AND age IS NOT NULL AND age BETWEEN 5 AND 120
    AND province IS NOT NULL AND char_length(btrim(province)) BETWEEN 1 AND 100
    AND group_type IS NOT NULL AND char_length(btrim(group_type)) BETWEEN 1 AND 150
    AND workshop_interest IS NOT NULL AND char_length(btrim(workshop_interest)) BETWEEN 1 AND 150
    AND programming_experience IS NOT NULL AND char_length(btrim(programming_experience)) BETWEEN 1 AND 150
    AND data_protection_accepted IS TRUE
    AND newsletter_consent IS NOT NULL
    AND (phone IS NULL OR char_length(phone) <= 40)
    AND (exact_location IS NULL OR char_length(exact_location) <= 300)
    AND (additional_comments IS NULL OR char_length(additional_comments) <= 2000)
            ) NOT VALID;
    END IF;
END
$constraint$;

COMMIT;
