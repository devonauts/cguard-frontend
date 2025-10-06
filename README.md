# cguard-frontend

Este proyecto es el frontend de CGuard, desarrollado con React, TypeScript y Vite. Utiliza TailwindCSS para estilos y está estructurado para soportar múltiples módulos y temas.

## Requisitos previos

- Node.js >= 18.x
- npm >= 9.x

## Instalación

1. Clona el repositorio:
   ```pwsh
   git clone https://github.com/devonauts/cguard-frontend.git
   cd cguard-frontend
   ```
2. Instala las dependencias:
   ```pwsh
   npm install
   ```

## Ejecución en desarrollo

```pwsh
npm run dev
```
Esto iniciará el servidor de desarrollo en `http://localhost:5173` (puede variar según configuración de Vite).

## Compilación para producción

```pwsh
npm run build
```
Los archivos generados estarán en la carpeta `dist/`.

## Previsualización de producción

```pwsh
npm run preview
```
Esto sirve la aplicación compilada localmente.

## Estructura principal

- `src/` - Código fuente principal
- `public/` - Archivos públicos y estáticos
- `theme/` - Temas SCSS
- `components/` - Componentes reutilizables
- `modules/` - Módulos funcionales
- `view/` - Vistas y rutas

## Configuración

- `vite.config.ts` - Configuración de Vite
- `tailwind.config.js` - Configuración de TailwindCSS
- `tsconfig.json` - Configuración de TypeScript

## Tecnologías principales

- React
- TypeScript
- Vite
- TailwindCSS

## Scripts útiles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Compila para producción
- `npm run preview` - Previsualiza la build de producción

## Notas adicionales

- Para cambiar el entorno, edita los archivos en `src/config/`.
- Los idiomas soportados están en `src/i18n/`.
- Los temas pueden modificarse en `public/theme/src/`.

## Contacto y soporte

Para dudas o soporte, contacta al equipo de Devonauts.

---

> Última actualización: 6 de octubre de 2025
