# Scolaris Landing

Landing en React + TypeScript + Vite. Incluye integración con el widget de chat corporativo de Scolaris distribuido como paquete `.tgz`.

## Scripts

- `npm run dev`: entorno de desarrollo.
- `npm run build`: build de producción (Vite). Requiere Node 18+.
- `npm run preview`: sirve el build.
- `npm run lint`: ESLint/TS.

## Integración del chat Scolaris

- Dependencia: `@scolaris/chat-widget` apuntando al archivo local `scolaris-chat-widget-0.2.0.tgz` (declarado en `dependencies` con `file:`).
- Estilos globales: importados una sola vez en `src/main.tsx` vía `import "@scolaris/chat-widget/dist/style.css";`.
- Wrapper del widget: `src/components/ChatWidget.tsx` instancia `ScolarisChatBubble` con idioma `es`, rol `ventas` y posición inferior derecha. Se monta una única vez en `src/App.tsx`.
- Base URL del backend del agente: `import.meta.env.VITE_AGENT_API_BASE`. Si no está definida, el widget no se renderiza y se emite un `console.warn`, evitando romper el build.

## Variables de entorno

- `VITE_AGENT_API_BASE`: URL base del backend del agente (incluye esquema). Ejemplos:
  - Desarrollo local: `http://localhost:8000`
  - Producción/VPS: `https://<dominio>/agent` (ajusta según despliegue del FastAPI del agente)
- Otros valores de pagos ya existen en `.env`.

## Actualizar el paquete del widget

1) Reemplaza el archivo `scolaris-chat-widget-0.2.0.tgz` en la raíz por la nueva versión generada desde el monorepo del agente.  
2) Asegúrate de que `package.json` siga apuntando al nombre correcto (`@scolaris/chat-widget`) con `file:scolaris-chat-widget-0.2.0.tgz` (ajusta el nombre si cambia la versión/archivo).  
3) Ejecuta `npm install` para refrescar `package-lock.json`.  
4) Verifica con `npm run dev` o `npm run build`.

## Despliegue en la VPS

1) `git pull`  
2) `npm install` (el `file:` usa el `.tgz` local en la raíz del repo)  
3) Configura `VITE_AGENT_API_BASE` en el entorno del servidor antes de `npm run build` / `npm run preview`.  
4) Ejecuta `npm run build`.
