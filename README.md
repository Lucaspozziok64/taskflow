# 🚀 TaskFlow

Aplicación desarrollada con React Native y Expo utilizando React Navigation para gestionar la navegación mediante Bottom Tabs y Stack Navigator.

####

## 🎥 Video Demo

[Ver demostración completa]
https://res.cloudinary.com/dduqetzqk/video/upload/v1792438656/Grabaci%C3%B3n_de_pantalla_2026-10-19_163136_vuk0iu.mp4

El video muestra:

- Navegación mediante Bottom Tabs.
- Creación de tareas desde TaskForm.
- Visualización de detalles de tareas.
- Navegación hacia ProfileScreen.4

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
```

---

# 🧭 Arquitectura de Navegación

La aplicación combina:

- Bottom Tab Navigator
- Native Stack Navigator

para separar la navegación principal del flujo de tareas.

---

# 📱 Navegación General

```text
App
│
└── Bottom Tabs
    │
    ├── Home
    │   │
    │   └── Tasks Stack
    │       │
    │       ├── TaskList (HomeScreen)
    │       ├── TaskForm
    │       └── TaskDetail
    │
    └── Profile
        │
        └── ProfileScreen
```

---

# 🏠 Flujo de Tareas

La pestaña Home carga el Stack de tareas.

```text
Home Tab
│
└── TaskList
    │
    ├── Botón "Agregar tarea"
    │       │
    │       ▼
    │    TaskForm
    │
    └── Seleccionar tarea
            │
            ▼
       TaskDetail
```

### Flujo de navegación

#### Crear una tarea

```tsx
navigation.navigate("TaskForm");
```

```text
TaskList
↓
TaskForm
```

#### Ver detalle de una tarea

```tsx
navigation.navigate("TaskDetail", {
  taskId: item.id,
});
```

```text
TaskList
↓
TaskDetail
```

---

# 👤 Flujo de Perfil

La pestaña Perfil redirige a la pantalla de perfil.

```text
Bottom Tab
↓
Profile
↓
ProfileScreen
```

Configuración:

```tsx
<Tab.Screen
  name="Profile"
  component={ProfileScreen}
/>
```

---

# 📦 Configuración de Navegadores

## AppNavigator

Gestiona las pestañas principales.

```text
Bottom Tabs
│
├── Home
└── Profile
```

Ejemplo:

```tsx
<Tab.Navigator>
  <Tab.Screen
    name="Home"
    component={TasksStack}
  />

  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
  />
</Tab.Navigator>
```

---

## TasksStack

Gestiona todo el flujo de tareas.

```text
Tasks Stack
│
├── TaskList
├── TaskForm
└── TaskDetail
```

Ejemplo:

```tsx
<Stack.Navigator>
  <Stack.Screen
    name="TaskList"
    component={HomeScreen}
  />

  <Stack.Screen
    name="TaskForm"
    component={TaskForm}
  />

  <Stack.Screen
    name="TaskDetail"
    component={TaskDetailScreen}
  />
</Stack.Navigator>
```

---

# 🔄 Flujo Completo del Usuario

```text
                App
                 │
      ┌──────────┴──────────┐
      │                     │
   Home Tab            Profile Tab
      │                     │
      ▼                     ▼
  TaskList             ProfileScreen
      │
      ├────────► TaskForm
      │
      └────────► TaskDetail
```

---

# 📚 Dependencias

```bash
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

# 🎯 Resumen

La aplicación utiliza un **Bottom Tab Navigator** para las secciones principales (**Home** y **Profile**) y un **Stack Navigator** dentro de Home para gestionar el flujo de tareas. Desde **TaskList** el usuario puede crear una nueva tarea mediante **TaskForm** o visualizar una tarea específica mediante **TaskDetail**. La pestaña **Profile** dirige directamente a **ProfileScreen**.