import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notice = ({ notice }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{notice.date}</Text>
      <Text style={styles.description}>{notice.notice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default Notice;
