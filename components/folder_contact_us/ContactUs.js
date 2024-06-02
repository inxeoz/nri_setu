// ContactUs.js
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { state, doodleImage } from '../index';
import SvgUri from 'react-native-svg-uri';
export default function ContactUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{state.utype}</Text>
      <SvgUri height={128} width={128} source={doodleImage.image1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    height: '100%',
    width: '100%',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
