import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View, } from 'react-native';
import EmptyState from '../components/EmptyState';
import TaskDetail from '../components/TaskDetail';
import { Task } from '../constants/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { TasksStackParamList } from '../navigation/TasksStack';

type HomeNavProp = NativeStackNavigationProp<TasksStackParamList, "TaskList">

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>()
  const [tasks] = useState<Task[]>([
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

  const handleTaskpress = (task: Task) => {
    navigation.navigate("TaskDetail", {
      id: task.id,
      title: task.title,
      description: task.description,
      category: task.category,
      createdAt: task.createdAt.toISOString(),
    })
  }

  const handleAddPress = () => {
    navigation.navigate("TaskForm");
  }


  /*onst [selectedTask, setSelectedTask] = useState<Task | null>(null);
  if (selectedTask) {
    return (
      <TaskDetail task={selectedTask} onBack={() => setSelectedTask(null)} />
    );
  }*/
 
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
            <TouchableOpacity style={styles.card} onPress={() => handleTaskpress(item)}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={{ color: 'white' }}>{item.category}</Text>
            </TouchableOpacity>
          )}
        />
      )}
      <TouchableOpacity onPress={handleAddPress}>
        <Text style={styles.fabText}>Agregar tarea</Text>
      </TouchableOpacity>
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
  fabText: {
    padding: 15,
    backgroundColor: 'purple',
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});