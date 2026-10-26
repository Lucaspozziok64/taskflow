# 📱 TaskFlow

Aplicación de gestión de tareas desarrollada con React Native y Expo utilizando React Navigation y Redux Toolkit.

## 🎥 Demo

- En el video no se llega apreciar bien los colores por el navegador pero se muestra eficazmente las funcionalidaes

[Ver demo de la aplicación]
<video controls src="https://res.cloudinary.com/dduqetzqk/video/upload/v1793026789/Grabaci%C3%B3n_de_pantalla_2026-10-26_115610_dcbasn.mp4" title="URL_DE_TU_VIDEO_EN_CLOUDINARY"></video>

---

## 🚀 Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- Redux Toolkit
- React Redux

---

## 📂 Estructura del Proyecto

```text
src
├── assets
│
├── components
│   ├── EmptyState.tsx
│   ├── ProfileCards.tsx
│   ├── TaskDetail.tsx
│   └── TaskForm.tsx
│
├── constants
│   ├── theme.ts
│   └── types.ts
│
├── navigation
│   ├── AppNavigator.tsx
│   └── TasksStack.tsx
│
├── screens
│   ├── HomeScreen.tsx
│   ├── ProfileScreen.tsx
│   └── TaskDetailScreen.tsx
│
├── store
│   ├── hooks.ts
│   ├── store.ts
│   └── slices
│       └── tasksSlice.ts
```

---

# 🧭 Arquitectura de Navegación

La aplicación combina Bottom Tabs y Stack Navigation para organizar la experiencia del usuario.

```text
App
│
└── Bottom Tabs
    │
    ├── Home
    │   │
    │   └── Tasks Stack
    │       │
    │       ├── TaskList
    │       ├── TaskForm
    │       └── TaskDetail
    │
    └── Profile
        │
        └── ProfileScreen
```

---

# 🗃 Gestión de Estado con Redux Toolkit

La aplicación utiliza Redux Toolkit para centralizar el estado de las tareas.

## Store

Archivo:

```text
src/store/store.ts
```

Configura el store principal de Redux y registra los reducers de la aplicación.

## Slice de tareas

Archivo:

```text
src/store/slices/tasksSlice.ts
```

Contiene:

- Estado global de tareas.
- Acciones para agregar tareas.
- Acciones para completar tareas.
- Manejo centralizado del listado de tareas.

## Hooks tipados

Archivo:

```text
src/store/hooks.ts
```

Define hooks personalizados para mejorar el tipado de Redux.

```ts
useAppDispatch()
useAppSelector()
```

---

# 🔄 Integración con Provider

El store es inyectado en toda la aplicación mediante el Provider de React Redux.

```tsx
<Provider store={store}>
  <AppNavigator />
</Provider>
```

Esto permite acceder al estado global desde cualquier pantalla o componente.

---

# ✅ Funcionalidades Implementadas

### Crear tareas

Los usuarios pueden registrar nuevas tareas desde:

```text
Home
↓
TaskForm
```

Las tareas se almacenan en el estado global gestionado por Redux.

---

### Visualizar tareas

Desde Home se muestran todas las tareas registradas.

```text
Home
↓
Lista de tareas
```

---

### Ver detalle de una tarea

Al seleccionar una tarea:

```text
TaskList
↓
TaskDetail
```

Se muestra toda la información relacionada con la tarea seleccionada.

---

### Marcar tarea como completada

Desde la pantalla de detalle es posible actualizar el estado de una tarea.

```text
TaskDetail
↓
Completar tarea
```

Redux actualiza automáticamente la interfaz.

---

### Filtros de tareas

La pantalla principal permite filtrar las tareas según su estado:

#### Todas

```text
Muestra todas las tareas registradas
```

#### Pendientes

```text
Muestra únicamente tareas sin completar
```

#### Completadas

```text
Muestra únicamente tareas finalizadas
```

---

# 🎯 Flujo de Usuario

```text
Home
│
├── Crear tarea
│       │
│       ▼
│    TaskForm
│
├── Ver tarea
│       │
│       ▼
│   TaskDetail
│       │
│       ▼
│ Completar tarea
│
└── Filtrar tareas
        │
        ├── Todas
        ├── Pendientes
        └── Completadas

Profile
│
└── ProfileScreen
```

---

# 📦 Instalación

Clonar repositorio:

```bash
git clone <url-del-repositorio>
```

Instalar dependencias:

```bash
npm install
```

Ejecutar proyecto:

```bash
npm start
```

---

# 📚 Dependencias principales

```bash
npm install @reduxjs/toolkit
npm install react-redux

npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
```

Para Expo:

```bash
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-gesture-handler
npx expo install react-native-reanimated
```

---

# 🎯 Características

- ✅ Navegación con Bottom Tabs.
- ✅ Navegación Stack para flujo de tareas.
- ✅ Gestión global de estado con Redux Toolkit.
- ✅ Hooks tipados para Redux.
- ✅ Creación de tareas.
- ✅ Listado dinámico de tareas.
- ✅ Detalle de tarea.
- ✅ Marcar tareas como completadas.
- ✅ Filtrado por estado.
- ✅ Arquitectura escalable basada en componentes.
