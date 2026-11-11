# ¡¡Seguimos Aprehendiendo!! — Frontend

Aplicación web en Angular para trabajar ejercicios de lectoescritura (dislexia y disgrafia) con estudiantes de Transición a 5°. Proyecto final del bootcamp Desarrollo Web Full Stack (Instituto BIT y Universidad Iberoamericana).

Este repositorio contiene el frontend. El backend (Node.js, Express y MongoDB) está en el repositorio [aprehender-backend](https://github.com/lorlyfuentes/aprehender-backend).

## Funcionalidades

- Registro con rol `docente` o `familia`.
- Inicio de sesión con JWT. El token se guarda en `localStorage` y se envía como `Authorization: Bearer <token>`.
- Lista de ejercicios en cards y detalle de cada ejercicio.
- La familia sin pago solo ve los ejercicios de muestra (el filtro lo aplica el backend).
- CRUD de ejercicios para el docente: crear, editar y eliminar. Los errores de validación del backend se muestran en pantalla.
- Diseño adaptable: las cards pasan de varias columnas a una sola en celular.

## Tecnologías

Angular 22 (componentes standalone, signals, `FormsModule` con `ngModel`, `Router` y `HttpClient`), TypeScript y CSS (Flexbox y Grid).

## Cómo ejecutarlo

Requisitos: Node.js, Angular CLI y el backend corriendo en `http://localhost:3000`.

1. Instalar las dependencias: `npm install`
2. Iniciar la aplicación: `ng serve`
3. Abrir `http://localhost:4200`

## Estructura

- `src/app/services/auth.ts`: registro, login y manejo del token.
- `src/app/services/ejercicios.ts`: CRUD de ejercicios contra `/api/ejercicios`.
- `src/app/pages/`: pantallas `login`, `registro`, `ejercicios`, `detalle-ejercicio` y `formulario-ejercicio`.
- `src/app/app.routes.ts`: rutas de la aplicación.
- `src/styles.css`: estilos generales.

## Rutas

| Ruta | Pantalla |
|---|---|
| `/login` | Inicio de sesión |
| `/registro` | Registro |
| `/ejercicios` | Lista de ejercicios |
| `/ejercicios/nuevo` | Crear ejercicio (docente) |
| `/ejercicios/:id` | Detalle de un ejercicio |
| `/ejercicios/:id/editar` | Editar ejercicio (docente) |