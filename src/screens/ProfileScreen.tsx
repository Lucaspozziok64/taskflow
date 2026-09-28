import { View, Text, StyleSheet } from "react-native"
import { ProfileCards } from "../components/ProfileCards"
import { COLORS } from "../constants/theme"

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Perfiles
      </Text>
      <ProfileCards
        name="Lucas Figueroa"
        role="Desarrollador"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Us-Cdijder2BLgwhtgFxaw2tlT29hQQJyOFpjzBb-g&s"
        isActive={true}
      />
      <ProfileCards
        name="Carlos Ruiz"
        role="Diseñador"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Us-Cdijder2BLgwhtgFxaw2tlT29hQQJyOFpjzBb-g&s"
        isActive={false}
      />
      <ProfileCards
        name="Lucia Fernandez"
        role="Product Manager"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Us-Cdijder2BLgwhtgFxaw2tlT29hQQJyOFpjzBb-g&s"
        isActive={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 20,
    marginTop: 20,
    alignSelf:"center"
  },
})