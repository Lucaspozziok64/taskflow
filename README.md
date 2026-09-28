# Taskflow

## 🧾 Descripción del Proyecto

Aplicación móvil creada con React Native (Expo) como parte de mi aprendizaje y práctica en desarrollo multiplataforma.
Este proyecto busca organizar tareas de manera simple y escalable.

---

## 📌 Características actuales

- Configuración inicial con Expo y TypeScript.

- Pantalla de perfil (ProfileScreen) con componentes reutilizables.

- Componente ProfileCards que muestra:

- Imagen de perfil (Image de React Native).

- Nombre y rol.

- Estado activo/inactivo con badge dinámico.

- Uso de constantes de estilo centralizadas en theme.tsx.

---

## 🛠️ Tecnologías utilizadas

### 🛍️ Usuario final
- React Native (Expo): framework principal.

- TypeScript: tipado estático para mayor robustez.

- StyleSheet: estilos nativos y modulares.

- Expo CLI: para correr y compilar la app.

---

## 🚀 Cómo ejecutar el proyecto

### 1️⃣ Clonar el repositorio
1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/Lucaspozziok64/taskflow.git
   ```

2. **Instala las dependencias**  
   ```bash
   npm install
   ```

3. **Ejecutando con Expo**  
   ```bash
   npx expo start
   ``` 

4. Escanear el QR con la app Expo Go en tu dispositivo.

---
## **📂 Estructura básica**  
```
taskflow/
├── assets/                # Recursos estáticos (imágenes, íconos, fuentes)
├── src/
│   ├── assets/            # Assets específicos de la app
│   ├── components/        # Componentes reutilizables (ej: ProfileCards.tsx)
│   ├── constants/         # Constantes globales (ej: theme.tsx)
│   └── screens/           # Pantallas principales (ej: ProfileScreen.tsx)
├── App.tsx                # Punto de entrada principal
├── index.ts               # Registro inicial
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Documentación del proyecto

```
