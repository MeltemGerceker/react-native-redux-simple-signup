
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const { user } = useSelector(state => state.userReducer);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>
          {user?.name} {user?.lastname}
        </Text>
        <View style={styles.infoContainer}>
          <Icon name='call-outline' size={20} color="#000" style={styles.icon} />
          <Text style={styles.info}>{user?.phone}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name='mail-outline' size={20} color="#000" style={styles.icon} />
          <Text style={styles.info}>{user?.email}</Text>
        </View>
      </View>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
});