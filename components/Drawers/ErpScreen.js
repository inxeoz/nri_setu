import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { state } from '../index';
import { ERP_LOGIN } from '../index';

export default function ERPScreen({ navigation, Global }) {
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
    <View style={{width: '100%', height: '100%'}}>
      <ERP_LOGIN></ERP_LOGIN>
    </View >
  );
}
