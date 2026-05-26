-- Script simplificado para crear tabla de voluntarios en Supabase
-- Ejecutar este script completo en el SQL Editor de Supabase

-- 1. Crear la tabla
CREATE TABLE volunteers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    city TEXT,
    experience TEXT,
    interests TEXT,
    availability TEXT,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Crear índices para mejor rendimiento
CREATE INDEX idx_volunteers_email ON volunteers(email);
CREATE INDEX idx_volunteers_city ON volunteers(city);

-- 3. Habilitar Row Level Security
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

-- 4. Crear política para permitir inserciones desde el formulario web
CREATE POLICY "Enable insert for all users" ON volunteers
    FOR INSERT
    WITH CHECK (true);

-- 5. Crear política para permitir lecturas solo para usuarios autenticados (opcional)
CREATE POLICY "Enable read for authenticated users only" ON volunteers
    FOR SELECT
    USING (auth.role() = 'authenticated');

-- ============================================
-- TABLA: python_route_registrations
-- ============================================

-- 1. Crear tabla para registros de Python Route
CREATE TABLE python_route_registrations (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    phone TEXT,
    age INT,
    province TEXT NOT NULL,
    exact_location TEXT,
    group_type TEXT NOT NULL,
    workshop_interest TEXT NOT NULL,
    programming_experience TEXT NOT NULL,
    newsletter_consent BOOLEAN DEFAULT false,
    data_protection_accepted BOOLEAN DEFAULT false,
    additional_comments TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Crear índices para mejor rendimiento
CREATE INDEX idx_python_route_email ON python_route_registrations(email);
CREATE INDEX idx_python_route_province ON python_route_registrations(province);
CREATE INDEX idx_python_route_created_at ON python_route_registrations(created_at);

-- 3. Habilitar Row Level Security
ALTER TABLE python_route_registrations ENABLE ROW LEVEL SECURITY;

-- 4. Crear política para permitir inserciones desde el formulario web
CREATE POLICY "Enable insert for all users" ON python_route_registrations
    FOR INSERT
    WITH CHECK (true);

-- 5. Crear política para permitir lecturas solo para usuarios autenticados (opcional)
CREATE POLICY "Enable read for authenticated users only" ON python_route_registrations
    FOR SELECT
    USING (auth.role() = 'authenticated');