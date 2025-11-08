-- =====================================================
-- SCHEMA DE BASE DE DATOS PARA SPRINT MANAGEMENT MVP
-- =====================================================
-- Ejecutar este script en el SQL Editor de Supabase
-- =====================================================

-- TABLA 1: tasks
-- Almacena todas las tareas del proyecto (backlog y sprint)
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    sprint_number INTEGER DEFAULT 1,
    assigned_to TEXT,
    status TEXT DEFAULT 'backlog', -- 'backlog', 'sprint', 'done'
    created_at TIMESTAMP DEFAULT NOW()
);

-- TABLA 2: daily_status
-- Almacena el estado diario de cada tarea en el sprint (sistema de semáforo)
CREATE TABLE daily_status (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    day_number INTEGER NOT NULL, -- 1, 2, 3, 4, 5, 6
    color TEXT DEFAULT 'gray', -- 'green', 'yellow', 'red', 'gray'
    notes TEXT,
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(task_id, day_number) -- Una sola entrada por tarea por día
);

-- TABLA 3: sprints
-- Almacena información de los sprints (fechas, número, estado activo)
CREATE TABLE sprints (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sprint_number INTEGER UNIQUE NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT true
);

-- =====================================================
-- DATOS DE EJEMPLO
-- =====================================================

-- Insertar Sprint 05 como sprint activo
INSERT INTO sprints (sprint_number, start_date, end_date, is_active)
VALUES (5, '2025-11-08', '2025-11-15', true);

-- Insertar 3 tareas en el backlog
INSERT INTO tasks (title, sprint_number, assigned_to, status) VALUES
('Implementar autenticación de usuarios', 5, 'Juan Pérez', 'backlog'),
('Diseñar dashboard de métricas', 5, 'María González', 'backlog'),
('Crear API de reportes', 5, 'Carlos Ruiz', 'backlog');

-- Insertar 3 tareas en el sprint actual
INSERT INTO tasks (title, sprint_number, assigned_to, status) VALUES
('Configurar pipeline de CI/CD', 5, 'Juan Pérez', 'sprint'),
('Optimizar queries de base de datos', 5, 'María González', 'sprint'),
('Implementar sistema de notificaciones', 5, 'Carlos Ruiz', 'sprint');

-- Insertar algunos estados de ejemplo para las tareas del sprint
-- Tarea 1 del sprint: Días 1-3 completados
INSERT INTO daily_status (task_id, day_number, color)
SELECT id, 1, 'green' FROM tasks WHERE title = 'Configurar pipeline de CI/CD';

INSERT INTO daily_status (task_id, day_number, color)
SELECT id, 2, 'green' FROM tasks WHERE title = 'Configurar pipeline de CI/CD';

INSERT INTO daily_status (task_id, day_number, color)
SELECT id, 3, 'yellow' FROM tasks WHERE title = 'Configurar pipeline de CI/CD';

-- Tarea 2 del sprint: Días 1-2 completados
INSERT INTO daily_status (task_id, day_number, color)
SELECT id, 1, 'green' FROM tasks WHERE title = 'Optimizar queries de base de datos';

INSERT INTO daily_status (task_id, day_number, color)
SELECT id, 2, 'red' FROM tasks WHERE title = 'Optimizar queries de base de datos';

-- =====================================================
-- POLÍTICAS DE SEGURIDAD RLS (Row Level Security)
-- =====================================================
-- IMPORTANTE: Estas políticas son PÚBLICAS para el MVP
-- En producción, debes implementar autenticación real
-- =====================================================

-- Habilitar RLS en todas las tablas
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_status ENABLE ROW LEVEL SECURITY;
ALTER TABLE sprints ENABLE ROW LEVEL SECURITY;

-- Política para tabla tasks: Permitir todas las operaciones públicamente (SOLO PARA MVP)
CREATE POLICY "Permitir acceso público a tasks" ON tasks
    FOR ALL USING (true) WITH CHECK (true);

-- Política para tabla daily_status: Permitir todas las operaciones públicamente (SOLO PARA MVP)
CREATE POLICY "Permitir acceso público a daily_status" ON daily_status
    FOR ALL USING (true) WITH CHECK (true);

-- Política para tabla sprints: Permitir todas las operaciones públicamente (SOLO PARA MVP)
CREATE POLICY "Permitir acceso público a sprints" ON sprints
    FOR ALL USING (true) WITH CHECK (true);

-- =====================================================
-- VERIFICACIÓN DE INSTALACIÓN
-- =====================================================
-- Ejecuta estas queries para verificar que todo se creó correctamente:
--
-- SELECT COUNT(*) FROM tasks;          -- Debe retornar 6
-- SELECT COUNT(*) FROM daily_status;   -- Debe retornar 5
-- SELECT COUNT(*) FROM sprints;        -- Debe retornar 1
-- =====================================================
