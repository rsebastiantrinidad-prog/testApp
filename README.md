# 📊 Sprint Management MVP

Aplicación web para gestión de sprints con seguimiento diario mediante sistema de semáforo (verde/amarillo/rojo).

## 🎯 Descripción

Esta aplicación MVP permite gestionar tareas de un equipo mediante:
- **Backlog**: Lista de tareas pendientes que se pueden mover al sprint activo
- **Sprint Actual**: Tabla tipo Excel con seguimiento diario (6 días) usando emojis de colores
- **Sistema de semáforo**: Click para ciclar entre estados (sin actualizar → OK → con dificultad → bloqueado)

## 🛠️ Stack Tecnológico

- **Backend/BD**: Supabase (PostgreSQL + API REST automática)
- **Frontend**: HTML + TailwindCSS + Vanilla JavaScript
- **Deploy**: Archivo HTML único (sin build process)

## 📋 Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Cuenta gratuita en Supabase (https://supabase.com)
- Editor de texto para editar configuración (VS Code, Sublime, Notepad++)

## 🚀 Instalación Paso a Paso

### 1. Crear Cuenta en Supabase

1. Ve a https://supabase.com
2. Haz click en "Start your project"
3. Regístrate con tu email o cuenta de GitHub
4. Verifica tu email si es necesario

### 2. Crear Nuevo Proyecto

1. Una vez en el dashboard, haz click en "New Project"
2. Completa los datos:
   - **Name**: `sprint-management` (o el nombre que prefieras)
   - **Database Password**: Crea una contraseña segura (guárdala, la necesitarás para acceso directo a BD)
   - **Region**: Selecciona la región más cercana (ej: South America)
   - **Pricing Plan**: Selecciona "Free" (suficiente para el MVP)
3. Haz click en "Create new project"
4. Espera 2-3 minutos mientras Supabase crea tu base de datos

### 3. Ejecutar el Schema SQL

1. En el menú lateral izquierdo, haz click en "SQL Editor"
2. Haz click en "New query" (o el botón "+")
3. Abre el archivo `schema.sql` de este proyecto
4. **Copia TODO el contenido** del archivo `schema.sql`
5. **Pégalo** en el editor SQL de Supabase
6. Haz click en "Run" (botón verde en la esquina inferior derecha)
7. Deberías ver un mensaje de éxito: "Success. No rows returned"

### 4. Verificar que las Tablas se Crearon Correctamente

1. En el menú lateral, haz click en "Table Editor"
2. Deberías ver 3 tablas:
   - `tasks` (6 tareas)
   - `daily_status` (5 registros)
   - `sprints` (1 sprint)
3. Haz click en cada tabla para verificar que contienen los datos de ejemplo

### 5. Obtener las Credenciales de Supabase

1. En el menú lateral, haz click en **"Settings"** (ícono de engranaje)
2. Haz click en **"API"**
3. Busca la sección **"Project URL"**:
   - Copia la URL (ejemplo: `https://abcdefghijklmno.supabase.co`)
   - Esta es tu `SUPABASE_URL`
4. Busca la sección **"Project API keys"**:
   - Copia la key que dice `anon` `public` (la primera)
   - Esta es tu `SUPABASE_ANON_KEY`
   - ⚠️ **NO copies** la `service_role` key (es para uso de servidor únicamente)

### 6. Configurar las Credenciales en index.html

1. Abre el archivo `index.html` en tu editor de texto
2. Busca las líneas 169-170 (dentro de la sección `CONFIGURACIÓN DE SUPABASE`):
   ```javascript
   const SUPABASE_URL = 'TU_SUPABASE_URL_AQUI';
   const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY_AQUI';
   ```
3. Reemplaza `TU_SUPABASE_URL_AQUI` con tu URL de Supabase (entre comillas)
4. Reemplaza `TU_SUPABASE_ANON_KEY_AQUI` con tu anon key (entre comillas)
5. Ejemplo:
   ```javascript
   const SUPABASE_URL = 'https://abcdefghijklmno.supabase.co';
   const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ubyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjg5MDAwMDAwLCJleHAiOjIwMDQ1NzYwMDB9.ejemplo-de-token-muy-largo';
   ```
6. Guarda el archivo

### 7. Probar la Aplicación Localmente

1. Abre el archivo `index.html` con tu navegador:
   - **Opción 1**: Haz doble click en el archivo
   - **Opción 2**: Arrastra el archivo al navegador
   - **Opción 3**: Click derecho → "Abrir con" → Tu navegador favorito
2. Deberías ver la aplicación cargada
3. Por defecto, verás la pestaña **"Backlog"** con 3 tareas

### 8. Probar las Funcionalidades

#### Probar el Backlog:
1. Haz click en "➕ Agregar Tarea"
2. Ingresa un título (ej: "Prueba de nueva tarea")
3. Ingresa un nombre de persona (opcional)
4. Ingresa un número de sprint (opcional, presiona Enter para usar el default)
5. Deberías ver la nueva tarea en el backlog
6. Haz click en "→ Sprint" en cualquier tarea para moverla al sprint

#### Probar el Sprint:
1. Haz click en la pestaña "🚀 Sprint Actual"
2. Deberías ver una tabla con 3 tareas y 6 columnas de días
3. Haz click en cualquier emoji (⚪, 🟢, 🟡, 🔴) para cambiar el estado
4. El estado debe cambiar en el siguiente orden:
   - ⚪ (Sin actualizar) → 🟢 (OK) → 🟡 (Con dificultad) → 🔴 (Bloqueado) → ⚪ (ciclo)

## 🔍 Troubleshooting (Solución de Problemas)

### Problema: "Error al cargar backlog" o "Error al cargar sprint"

**Causa**: Las credenciales de Supabase no están configuradas correctamente.

**Solución**:
1. Verifica que copiaste las credenciales correctas (URL y anon key)
2. Asegúrate de que las comillas estén correctamente colocadas
3. No debe haber espacios extras al inicio o final
4. Recarga la página (F5 o Ctrl+R)

### Problema: La página muestra una alerta al cargar

**Causa**: Las credenciales no fueron reemplazadas.

**Solución**:
1. Abre `index.html` en tu editor de texto
2. Busca las líneas con `TU_SUPABASE_URL_AQUI` y `TU_SUPABASE_ANON_KEY_AQUI`
3. Reemplázalas con tus credenciales reales de Supabase
4. Guarda el archivo y recarga

### Problema: "Error al agregar tarea" o "Error al actualizar estado"

**Causa**: Las políticas RLS (Row Level Security) no están configuradas correctamente.

**Solución**:
1. Ve a Supabase → SQL Editor
2. Ejecuta el archivo `schema.sql` nuevamente
3. Verifica que se ejecutó sin errores
4. Recarga la aplicación

### Problema: No veo datos en las tablas

**Causa**: El script SQL no se ejecutó completo o hubo un error.

**Solución**:
1. Ve a Supabase → Table Editor
2. Verifica que las 3 tablas existan (tasks, daily_status, sprints)
3. Si no existen o están vacías:
   - Ve a SQL Editor
   - Ejecuta `schema.sql` nuevamente
4. Verifica los datos de ejemplo:
   ```sql
   SELECT COUNT(*) FROM tasks;          -- Debe retornar 6
   SELECT COUNT(*) FROM daily_status;   -- Debe retornar 5
   SELECT COUNT(*) FROM sprints;        -- Debe retornar 1
   ```

### Problema: Los cambios de estado no se guardan

**Causa**: Error de conexión o permisos.

**Solución**:
1. Abre la consola del navegador (F12)
2. Mira si hay errores en rojo
3. Verifica tu conexión a internet
4. Verifica que las credenciales sean correctas
5. Verifica que las políticas RLS estén habilitadas (ejecuta `schema.sql` nuevamente)

## 📱 Uso en Producción

### Desplegar la Aplicación

Esta aplicación es un archivo HTML único, puedes desplegarlo de varias formas:

#### Opción 1: Netlify Drop (Más fácil)
1. Ve a https://app.netlify.com/drop
2. Arrastra el archivo `index.html`
3. Netlify te dará una URL pública

#### Opción 2: Vercel
1. Ve a https://vercel.com
2. Crea un nuevo proyecto
3. Sube el archivo `index.html`
4. Despliega

#### Opción 3: GitHub Pages
1. Sube el archivo a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama y carpeta
4. GitHub te dará una URL

### ⚠️ Seguridad en Producción

**IMPORTANTE**: Las políticas RLS actuales son **PÚBLICAS** (cualquiera puede leer/escribir).

Para producción, debes:
1. Implementar autenticación de usuarios
2. Modificar las políticas RLS para que solo usuarios autenticados puedan acceder
3. Agregar validaciones de permisos por usuario

Consulta la documentación de Supabase Auth: https://supabase.com/docs/guides/auth

## 📚 Recursos Adicionales

- **Documentación Supabase**: https://supabase.com/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Supabase JavaScript Client**: https://supabase.com/docs/reference/javascript

## 🤝 Soporte

Si tienes problemas:
1. Revisa la sección de Troubleshooting arriba
2. Verifica la consola del navegador (F12) para ver errores
3. Verifica que todas las tablas estén creadas correctamente en Supabase

## 📄 Licencia

Este proyecto es un MVP de código abierto. Úsalo libremente para tus proyectos.

---

**¡Listo!** 🎉 Ahora tienes una aplicación funcional de gestión de sprints.
