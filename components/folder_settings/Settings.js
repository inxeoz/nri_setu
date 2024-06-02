import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function Settings() {

  const [rerenderKey, setRerenderKey] = useState(0); // State for forcing re-renders

  const handleBrightThemePress = () => {
    global.theme = 'light'; // Update global.theme
    setRerenderKey((prevKey) => prevKey + 1); // Increment rerenderKey to force update
  };

  const handleDimThemePress = () => {
    global.theme = 'dark'; // Update global.theme
    setRerenderKey((prevKey) => prevKey + 1); // Increment rerenderKey to force update
  };

  return (
    <View style={styles.container}>
      <View style={styles.themeManagement}>
        <View style={styles.darkTheme}>
          <MaterialIcons name="dark-mode" size={70} color="black" />
        </View>
        <View style={styles.lightTheme}>
          <Entypo name="light-up" size={70} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#77B0AA',
  },
  themeManagement: {
    marginHorizontal: 20,
    marginVertical: 40,
    width: 'auto',
    height: 150,
    backgroundColor: '#FFEBB2',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
  },
  darkTheme: {
    backgroundColor: '#E59BE9',
    height: '100%',
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightTheme: {
    backgroundColor: '#6AD4DD',
    height: '100%',
    width: '50%',
    borderRadius: 10,
     alignItems: 'center',
    justifyContent: 'center',
  },
});
