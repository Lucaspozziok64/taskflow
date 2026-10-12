import { Text, StyleSheet, View } from "react-native";

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No tenes tareas pendientes!</Text>
      <Text style={styles.text}>Empieza por crear una arriba</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 18,
    fontWeight: "bold",
  }
})