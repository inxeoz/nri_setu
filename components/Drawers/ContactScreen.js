import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { state } from '../index';
import {ContactUs } from '../folder_contact_us/ContactUs'
export default function ContactUsScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Octicons
            name="three-bars"
            size={state.size}
            color="black"
            style={{ marginLeft: state.margin['left'] }}
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ContactUs />
    </SafeAreaView>
  );
}
