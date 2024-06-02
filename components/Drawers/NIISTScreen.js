// HomeScreen.js
import * as React from 'react';
import { View } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { state , NIIST } from '../index';

export default function HomeScreen({ navigation }) {
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
      <NIIST />
    </View>
  );
}
