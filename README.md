# Tenpo Frontend Challenge

This is a technical solution for the Tenpo frontend challenge. It consists of a SPA with authentication and user dashboard, implemented with React 19, React Router 7, pagination, global state, and responsive design.

🔗 **Deployed App:** [https://tenpo-frontend-challenge.vercel.app](https://tenpo-frontend-challenge.vercel.app)\
📦 **Repository:** [https://github.com/jdaniel96/tenpo-frontend-challenge](https://github.com/jdaniel96/tenpo-frontend-challenge)

---

## 🚀 Clone and run the project

```bash
git clone https://github.com/jdaniel96/tenpo-frontend-challenge.git
```

```bash
cd tenpo-frontend-challenge
```

```bash
pnpm install
```

```bash
pnpm dev
```

> ⚠️ Only `pnpm` is allowed as the package manager (validated by `preinstall`).

---

## 🧩 Main Libraries

- **React 19 + React Router 7** – SPA project base.
- **Zod + React Hook Form** – Form validation.
- **Shadcn/ui + Lucide React** – Modern and accessible UI components.
- **Sonner** – Notifications/toasts.
- **Axios** – API calls.
- **next-themes** – `light`/`dark` theme management.

---

## 📜 Scripts

| Script            | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `pnpm dev`        | Starts the project in development mode.               |
| `pnpm build`      | Compiles TypeScript and builds the project with Vite. |
| `pnpm preview`    | Previews the built version.                           |
| `pnpm lint`       | Runs linter with cache.                               |
| `pnpm lint:fix`   | Automatically fixes lint errors.                      |
| `pnpm type-check` | Verifies types with TypeScript.                       |
| `pnpm pretty`     | Applies Prettier to the code.                         |
| `pnpm check-code` | Runs lint, type-check and prettier.                   |
| `pnpm prepare`    | Sets up Husky for git hooks.                          |

---

## 🏗️ Project Architecture

For a detailed explanation of the project's architecture, patterns, and design decisions, please refer to the [ARCHITECTURE.md](ARCHITECTURE.md) file.

---

## 📌 User List Justification

While all 2000 users are initially loaded from the API, frontend pagination is implemented for performance and user experience. This technique prevents DOM overload from too many simultaneously rendered elements, improves scrolling, and maintains a smooth experience.

---

## 🧐 Suggested Production Improvements

- **Backend**:
  - Implement real pagination with `?page=1&limit=20`.
  - Enable server-side search and filtering.
  - Add support for HTTP cache (`etag`, `last-modified`) and `x-total-count` headers.

- **Frontend**:
  - Use [TanStack Query](https://tanstack.com/query/latest) for handling queries and mutations:
    - Automatic cache management.
    - Optimized refetching.
    - Support for pagination/infinite scroll with `keepPreviousData`.
    - Better UX and robust error handling.

---

# 🌐 Versión en Español / Spanish Version

Este proyecto es una solución técnica al desafío frontend de Tenpo. Consiste en una SPA con autenticación y dashboard de usuarios, implementada con React 19, React Router 7, paginación, estado global y diseño responsive.

🔗 **App desplegada:** [https://tenpo-frontend-challenge.vercel.app](https://tenpo-frontend-challenge.vercel.app)\
📦 **Repositorio:** [https://github.com/jdaniel96/tenpo-frontend-challenge](https://github.com/jdaniel96/tenpo-frontend-challenge)

---

## 🚀 Clonar y ejecutar el proyecto

```bash
git clone https://github.com/jdaniel96/tenpo-frontend-challenge.git
```

```bash
cd tenpo-frontend-challenge
```

```bash
pnpm install
```

```bash
pnpm dev
```

> ⚠️ Solo se permite usar `pnpm` como manejador de paquetes (`preinstall` lo valida).

---

## 🧩 Librerías principales

- **React 19 + React Router 7** – Base del proyecto SPA.
- **Zod + React Hook Form** – Validación de formularios.
- **Shadcn/ui + Lucide React** – UI moderna y componentes accesibles.
- **Sonner** – Notificaciones/toasts.
- **Axios** – Llamadas a servicios.
- **next-themes** – Manejo de temas `light` / `dark`.

---

## 📜 Scripts

| Script            | Descripción                                          |
| ----------------- | ---------------------------------------------------- |
| `pnpm dev`        | Inicia el proyecto en modo desarrollo.               |
| `pnpm build`      | Compila TypeScript y construye el proyecto con Vite. |
| `pnpm preview`    | Visualiza la versión construida.                     |
| `pnpm lint`       | Linter con cache.                                    |
| `pnpm lint:fix`   | Corrige errores de lint automáticamente.             |
| `pnpm type-check` | Verifica los tipos con TypeScript.                   |
| `pnpm pretty`     | Aplica Prettier al código.                           |
| `pnpm check-code` | Corre lint, type-check y prettier.                   |
| `pnpm prepare`    | Configura Husky para git hooks.                      |

---

## 🏗️ Arquitectura del Proyecto

Para una explicación detallada de la arquitectura del proyecto, patrones y decisiones de diseño, consulta el archivo [ARCHITECTURE.md](ARCHITECTURE.md).

---

## 📌 Justificación del listado de usuarios

Aunque los 2000 usuarios son cargados inicialmente desde la API, se implementó paginación en el frontend por rendimiento y experiencia de usuario. Esta técnica evita que el DOM se sature con demasiados elementos renderizados al mismo tiempo, mejora el scroll, y mantiene una experiencia fluida.

---

## 🧐 Mejora sugerida en producción

- **Backend**:
  - Implementar paginación real con `?page=1&limit=20`.
  - Permitir búsquedas y filtros directamente desde el servidor.
  - Agregar soporte para cache HTTP (`last-modified`) y headers `x-total-count`.

- **Frontend**:
  - Usar [TanStack Query](https://tanstack.com/query/latest) para manejar queries y mutaciones:
    - Manejo automático de caché.
    - Refetch optimizado.
    - Soporte para paginación/infinite scroll con `keepPreviousData`.
    - Mejor UX y manejo robusto de errores.
