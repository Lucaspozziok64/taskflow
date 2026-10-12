import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View, } from 'react-native';
import EmptyState from '../components/EmptyState';
import TaskDetail from '../components/TaskDetail';
import { Task } from '../constants/types';

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Titulo del componente FlatList',
      description: 'Esta descripcion pasa como prop para detalle',
      category: 'Estudio',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Creando 2da lista FlatList',
      description: 'Esta descripcion pasa como prop para detalle',
      category: 'Trabajo',
      createdAt: new Date(),
    },
  ]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  if (selectedTask) {
    return (
      <TaskDetail task={selectedTask} onBack={() => setSelectedTask(null)} />
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tareas</Text>
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => setSelectedTask(item)}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text>{item.category}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 30,
  },

  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
  },

  card: {
    padding: 15,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});