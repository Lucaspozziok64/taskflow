import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

type Props = {
  name: string;
  role: string;
  image: string;
  isActive: boolean;
}

export function ProfileCards({ name, role, image, isActive = false }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>

        <View style={[styles.badge, isActive ? styles.active : styles.inactive]}>
          <Text style={styles.badgeText}>{isActive ? "Activo" : "Inactivo"}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.border,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  role: {
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 2,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  active: {
    backgroundColor: COLORS.success,
  },
  inactive: {
    backgroundColor: COLORS.danger,
  },
})