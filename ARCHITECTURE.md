# Project Architecture

## 📁 Folder Structure

```
src/
├── components/               # Presentational and reusable components
│   ├── Login/                # UI-specific logic for login
│   ├── UsersDashboard/       # User data visualization and filtering
│   └── shadcn/               # Base components from shadcn/ui
│   ├── ...other components/  # Generic presentational components
├── contexts/                 # Global providers (e.g., AuthContext)
├── hooks/                    # Custom React hooks
├── pages/                    # Route-mapped containers
├── routes/                   # React Router v7 configuration and loaders
├── services/                 # API calls using axios
├── types/                    # Reusable TypeScript types
├── consts/                   # Static values and constants
└── index.css/                # Tailwind and custom CSS
```

## 🪯 Patterns & Guidelines

### Container/Presentational Pattern

- `pages/` contains _containers_ with business logic and data fetching.
- `components/Login` and `components/UsersDashboard` contain reusable _presentational components_.

### Shadcn Components

- All base UI components (`Button`, `Card`, `Input`, etc.) are located in `src/components/shadcn` and follow a consistent, accessible style.

### Authentication Context (AuthContext)

- A centralized `AuthContext` is used to handle authentication.
- User data and tokens are persisted in `localStorage` and hydrated into the initial state.
- Enables a scalable architecture for public/private sections.

### Routing with React Router v7

- `createBrowserRouter` is used for declarative route definitions.
- `publicRoutes` use `PublicLayout` and `privateRoutes` use `PrivateLayout`.
- `protectedLoader` ensures private routes are only accessible with a valid token.
- `ErrorPage` is implemented for error handling with adaptive content.

## 🔄 Progressive Enhancement

- The architecture supports easy modular growth (e.g., profile module, password change).
- `PublicLayout` and `PrivateLayout` decouple authentication views from authenticated ones.

## 🔍 Repository Reference

[https://github.com/jdaniel96/tenpo-frontend-challenge](https://github.com/jdaniel96/tenpo-frontend-challenge)

---

# 🌐 Versión en Español / Spanish Version

# Arquitectura del proyecto

## 📁 Estructura de Carpetas

```
src/
├── components/               # Componentes presentacionales y reutilizables
│   ├── Login/                # Lógica específica de UI para inicio de sesión
│   ├── UsersDashboard/       # Visualización y filtrado de datos de usuarios
│   └── shadcn/               # Componentes base de shadcn/ui
│   ├── ...otros componentes/  # Componentes presentacionales genéricos
├── contexts/                 # Proveedores globales (ej. AuthContext)
├── hooks/                    # Hooks personalizados de React
├── pages/                    # Contenedores mapeados a rutas
├── routes/                   # Configuración de React Router v7 y loaders
├── services/                 # Llamadas a API usando axios
├── types/                    # Tipos reutilizables de TypeScript
├── consts/                   # Valores estáticos y constantes
└── index.css/                # Tailwind, CSS personalizado
```

## 🪯 Patrones y Directrices

### Patrón Contenedor/Componente Presentacional

- `pages/` contiene los _contenedores_ con lógica de negocio y obtención de datos.
- `components/Login` y `components/UsersDashboard` contienen los _componentes presentacionales_ reutilizables.

### Componentes Shadcn

- Todos los componentes base de UI (`Button`, `Card`, `Input`, etc.) se encuentran en `src/components/shadcn` y siguen un estilo consistente y accesible.

### Contexto de Autenticación (AuthContext)

- Se utiliza un `AuthContext` centralizado para manejar la autenticación.
- Los datos del usuario y el token se persisten en `localStorage` y se hidratan en el estado inicial.
- Permite una arquitectura escalable para secciones privadas/públicas.

### Enrutamiento con React Router v7

- Se utiliza `createBrowserRouter` para definir rutas declarativas.
- `publicRoutes` utilizan `PublicLayout` y `privateRoutes` utilizan `PrivateLayout`.
- `protectedLoader` asegura que las rutas privadas solo sean accesibles si hay un token válido.
- Se implementa `ErrorPage` para el manejo de errores con contenido adaptado.

## 🔄 Mejora Progresiva

- La arquitectura soporta fácil crecimiento modular (por ejemplo: módulo de perfil, cambio de contraseña).
- Con `PublicLayout` y `PrivateLayout` se desacoplan las vistas de acceso y autenticadas.

## 🔍 Referencia del Repositorio

[https://github.com/jdaniel96/tenpo-frontend-challenge](https://github.com/jdaniel96/tenpo-frontend-challenge)
