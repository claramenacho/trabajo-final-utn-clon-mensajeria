# Clon de Mensajería  - Trabajo Final UTN

## Descripción del Proyecto
Este proyecto es una aplicación web de mensajería funcional que permite la interacción entre usuarios simulados. Incluye un sistema de autenticación, persistencia de datos local y una interfaz moderna con estética Dark Modern y Glassmorphism.

## Tecnologías Utilizadas
* **React 18** (Vite)
* **React Router Dom** (Navegación y Rutas Protegidas)
* **Context API** (Gestión de estado global)
* **LocalStorage** (Persistencia de sesión y mensajes)
* **CSS3** (Flexbox, Variables y Animaciones)

## Estructura del Proyecto
* `/src/components`: Componentes reutilizables (Chat, Aside, About).
* `/src/context`: Lógica del ChatContext para el manejo de datos.
* `/src/views`: Páginas principales (Login, Register, Home).
* `/src/styles`: Archivos CSS independientes.

## Instrucciones para ejecutar localmente
1. Clonar el repositorio:
   `git clone https://github.com/claramenacho/trabajo-final-utn-clon-mensajeria.git`
2. Instalar dependencias:
   `npm install`
3. Iniciar el servidor de desarrollo:
   `npm run dev`

## Instrucciones para el Deploy
Para generar la versión de producción:
1. Ejecutar `npm run build`.
2. Los archivos resultantes en la carpeta `/dist` pueden ser desplegados en plataformas como Vercel o Netlify.