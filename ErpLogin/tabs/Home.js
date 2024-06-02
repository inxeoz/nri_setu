

// HomeScreen.js
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import ErpFees from './Fees'


export default function HomeScreen({ navigation }) {

  
  const print = () => {
    console.log('pressed');
  }

  return (
    <View>
     <ErpFees/>
    </View>
  );
}