import { useState } from "react";
import { Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Trabajo");

  const [touchedTitle, setTouchedTitle] = useState(false);
  const [touchedDescription, setTouchedDescription] = useState(false);
   const [touchedCategory, setTouchedCategory] = useState(false);

  const handleAddTask = () => {
    setTouchedTitle(true);
    setTouchedDescription(true);
    if (title.trim().length < 5 || description.trim().length < 10) {
      return;
    }

    const task = {
      title: title.trim(),
      description: description.trim(),
      category,
      createdAt: new Date()
    }
    console.log("Tarea creada:", task);
    Alert.alert("Exito", "Tarea capturada localmente..")
    setTitle("");
    setDescription("");
    setCategory("Trabajo");
    setTouchedDescription(false);
    setTouchedTitle(false);
  }
  const titleError = touchedTitle && title.trim().length < 5
  const descriptionError = touchedDescription && description.trim().length < 10
  const categoryError = touchedCategory && !category;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Nueva Tarea</Text>
      <Text style={styles.label}>Titulo</Text>
      <TextInput
        placeholder="Ingresa el titulo de la tarea"
        value={title}
        onChangeText={setTitle}
        onBlur={() => setTouchedTitle(true)}
        autoCapitalize="sentences"
        returnKeyType="next"
        style={[styles.input, titleError && styles.errorInput]}
      />
      {titleError && (
        <Text style={styles.error}>El titulo debe tener al menos 5 caracteres</Text>
      )}

      {/* DESCRIPCION */}
      <Text style={styles.label}>Descripcion</Text>
      <TextInput
        style={[styles.input, styles.description, descriptionError && styles.errorInput]}
        placeholder="Ingresa la descripcion de la tarea"
        value={description}
        onChangeText={setDescription}
        onBlur={() => setTouchedDescription(true)}
        autoCapitalize="sentences"
        multiline
      />

      {descriptionError && (
        <Text style={styles.error}>La descripcion debe tener al menos 10 caracteres</Text>
      )}

      {/* CATEGORIA */}
      <Text style={styles.label}>Categoria</Text>
      <View style={styles.categories}>
        {
          ["Trabajo", "Estudio", "Personal"].map((item) => (
            <TouchableOpacity
              key={item}
              style={[styles.category, category === item && styles.selectedCategory]}
              onPress={() => setCategory(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      {categoryError && <Text style={styles.error}>Debes seleccionar una categoría</Text>}

      {/* BOTON GUARDAR */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTask}
      >
        <Text>Guardar</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
    backgroundColor: 'gray',
    color: 'white',
    paddingHorizontal: 4,
    alignSelf: 'flex-start'
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    fontSize: 16
  },
  description: {
    height: 70,
  },
  errorInput: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 4
  },
  categories: {
    flexDirection: 'row',
    gap: 8,
  },
  category: {
    padding: 12,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  selectedCategory: {
    backgroundColor: 'lightblue',
  },
  button: {
    marginTop: 25,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})