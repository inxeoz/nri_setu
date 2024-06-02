// Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SvgUri from 'react-native-svg-uri';


const Header = () => {
  const size = 30;
  return (
    <View style={styles.headerContainer}>
      <SvgUri height={size} width={size} source={require('../loginIcon.svg')} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {

    padding: 10,
    width: 'auto',
    height: 'auto',
  },
});

export default Header;
