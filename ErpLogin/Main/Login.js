import React, { useState , useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import SvgUri from 'react-native-svg-uri';
import { CommonActions } from '@react-navigation/native';

import {
  verifyCredentials,
  state,
  update,
} from '../index';

import { Ionicons } from '@expo/vector-icons';

const LoginComponent = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('18307');
  const [password, setPassword] = useState('54321');
  const [utype, setUserType] = useState('Student');
  const [session, setSessionType] = useState('2021-22');
  const [info, setInfo] = useState('enter credentials');
  const [leafColor, setLeafColor] = useState('black');
  const handleLogin = async () => {
    setInfo('Verifying');
    setLeafColor('#7ABA78');

    await verifyCredentials({
      utype: utype,
      session: session,
      username: username,
      password: password,
    });
    if (state.verified) {
      update('username', username);
      update('password', password);
      update('session', session);
      update('utype', utype);

      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'LoggedIn' }],
        })
      );
    } else {
      setInfo('incorrect credentials');
      setLeafColor('#FF5F00');
    }
  };

  const toggleShowButton = () => {
    setShow(!show);
  };
 useEffect(() => {
    console.log('erp login');
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <SvgUri height={100} width={100} source={require('./loginIcon.svg')} />
      </View>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Password</Text>
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
      <Text style={styles.label}>User Type</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={utype}
          onValueChange={(itemValue) => setUserType(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Student" value="student" />
        </Picker>
      </View>
      <Text style={styles.label}>Session</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={session}
          onValueChange={(itemValue) => setSessionType(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Select session type" value="" />
          <Picker.Item label="2020-21" value="2020-21" />
          <Picker.Item label="2021-22" value="2021-22" />
          <Picker.Item label="2022-23" value="2022-23" />
          <Picker.Item label="2023-24" value="2023-24" />
        </Picker>
      </View>
      <Button title="Login" onPress={handleLogin} />

      <View style={styles.info}>
        <TouchableOpacity onPress={() => console.log('pressed')}>
          <MaterialCommunityIcons
            name="leaf-circle"
            size={24}
            color={leafColor}
          />
        </TouchableOpacity>
        <Text style={{ padding: 10 }}>{info}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  icon: {
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInput: {
    width: '90%',
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    top: 7,
  },

  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default LoginComponent;
