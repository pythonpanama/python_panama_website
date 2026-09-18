# Supabase: registros privados e inscripciones cerradas

Las rutas `/formulario-voluntario` y `/formulario-python-route` redirigen a páginas informativas. Los roles de navegador `anon` y `authenticated` no deben leer, insertar, actualizar ni borrar registros de `volunteers` o `python_route_registrations`.

La autenticación por sí sola no autoriza a consultar datos personales. El acceso administrativo se realiza desde el panel de Supabase o desde un servidor autorizado con una credencial administrativa; nunca desde el cliente web. Las variables `VITE_*` son públicas en el bundle.

## Instalación nueva

Ejecutar `supabase-setup.sql` con una cuenta administradora en una base vacía. Crea las tablas, activa RLS, revoca privilegios del navegador e instala una política restrictiva de denegación. No usar este archivo para actualizar tablas existentes.

## Base existente

1. Confirmar el proyecto y revisar sus políticas, grants, permisos por columna, vistas y funciones/RPC que acceden a ambas tablas. Las vistas o funciones `SECURITY DEFINER` pueden ofrecer vías de acceso distintas a la API directa; la migración no cambia objetos ajenos sin inventariarlos.
2. Conservar un respaldo según el procedimiento del proyecto.
3. Aplicar `supabase/migrations/202609170001_close_registration_access.sql` mediante una conexión administrativa o el SQL Editor. Es transaccional y reejecutable; no elimina filas, no convierte columnas y no modifica tablas ajenas. Las tablas ausentes se omiten con un aviso, sin crearlas; si falta una columna requerida en una tabla existente o se excede el tiempo de bloqueo, falla y revierte: revisar el esquema antes de reintentar.
4. Verificar RLS, política `closed_registration_forms`, revocación de permisos de tablas/columnas/secuencias y denegación de SELECT/INSERT/UPDATE/DELETE para `anon` y `authenticated`. Confirmar que el acceso administrativo sigue funcionando. Usar datos sintéticos en un entorno aislado para probar escrituras.
5. Las restricciones `*_safe_input` usan `NOT VALID`: protegen todas las escrituras nuevas sin borrar ni rechazar filas históricas durante la migración. Revisar datos históricos de forma privada antes de ejecutar `VALIDATE CONSTRAINT`. No se presupone que los registros existentes ya cumplan los límites.

La migración no convierte `volunteers.interests`: versiones anteriores del SQL lo declaraban `TEXT` aunque el componente enviaba una lista. Una instalación nueva lo declara `TEXT[]`. Antes de reactivar el formulario, comprobar el tipo real y migrarlo explícitamente con revisión de los datos existentes.

## Comprobación sin datos personales

```sh
node --env-file=.env diagnose-supabase.js
```

`test-supabase.js` ejecuta la misma comprobación de solo lectura. Ambos solicitan únicamente HEAD con límite cero; no insertan, borran, cuentan ni muestran registros. Un HTTP 200 advierte que sigue existiendo permiso público de lectura. Un rechazo no prueba por sí solo que la migración esté aplicada: también puede deberse a credenciales inválidas o a indisponibilidad. La verificación administrativa es indispensable.

## Pruebas locales

```sh
npm ci
npm run build
npm run lint
npm test
npm run test:db
npx playwright install chromium
npm run test:browser
```

`test:db` requiere PostgreSQL local (`initdb`, `pg_ctl`, `psql`, `createdb`) y crea dos bases temporales sin escuchar TCP. Se puede indicar `PG_BIN=/ruta/a/postgresql/bin`. Prueba instalación nueva, migración sobre esquema anterior, conservación de datos, reejecución, privilegios y restricciones. No lee `.env` ni usa una conexión remota.

Si Chrome ya está instalado, se puede ejecutar `PLAYWRIGHT_CHANNEL=chrome npm run test:browser` sin descargar Chromium. La prueba sirve exclusivamente `dist/` en loopback con las cabeceras generadas, comprueba rutas/redirecciones y verifica que CSP bloquee scripts en línea no autorizados y conexiones externas. No sustituye la comprobación de cabeceras tras publicar en Netlify.

## Condiciones para reabrir inscripciones

Preparar un endpoint servidor con validación, control de frecuencia y protección contra automatización verificada en servidor. Mantener revocado el acceso directo desde el navegador; no restaurar `WITH CHECK (true)` ni permisos de lectura para cualquier usuario autenticado. Revisar consentimiento, límites y tipos de datos antes de habilitar rutas. La CSP actual bloquea conexiones externas y envíos nativos porque no hay formularios activos.

## Cabeceras del sitio

`npm run build` genera `dist/_headers`, con CSP, protección contra enmarcado, `nosniff`, política de referrer, permisos restringidos y HSTS. Los hashes CSP se calculan a partir del HTML final para permitir el JSON-LD existente. No se permiten scripts en línea arbitrarios ni `eval`; los estilos en línea se conservan por compatibilidad con React y Bootstrap. Netlify tiene desactivado el posprocesamiento para conservar esos hashes. Publicar siempre el build completo y comprobar las cabeceras de la portada y de rutas internas.

## Referencias

- [Supabase: RLS y grants](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [PostgreSQL: políticas restrictivas](https://www.postgresql.org/docs/current/sql-createpolicy.html)
- [Netlify: cabeceras personalizadas](https://docs.netlify.com/manage/routing/headers/)
- [Vite: variables de entorno públicas](https://vite.dev/guide/env-and-mode)
