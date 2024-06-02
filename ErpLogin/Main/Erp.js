import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import {
  update,
} from '../index';

const YourComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [session, setSession] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = () => {
    update('username', username);
    update('password', password);
    update('session', session);
  };

  const toggleShowButton = () => {
    setShow(!show);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.desc}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.userInput}
          placeholder="User ID"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.input}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!show}
        />
        <TouchableOpacity onPress={toggleShowButton} style={styles.eyeButton}>
          <Entypo
            name={show ? 'eye-with-line' : 'eye'}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.input}>
        <TextInput
          style={styles.sessionInput}
          placeholder="Session"
          value={session}
          onChangeText={setSession}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#E1F7F5',
  },
  desc: {
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userInput: {
    width: '100%',
    backgroundColor: '#8DECB4',
  },
  passwordInput: {
    width: '90%',
    backgroundColor: '#8DECB4',
  },
  sessionInput: {
    width: '100%',
    backgroundColor: '#8DECB4',
  },
  input: {
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    top: 7,
    backgroundColor: '#5BBCFF',
  },

  button: {
    marginTop: 30,
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default YourComponent;
