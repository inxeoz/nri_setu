import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginCompo from './Main/Login';

import LoggedInCompo from './Main/Logged';
const Stack = createStackNavigator();

const App = () => {
 
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginCompo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoggedIn"
          component={LoggedInCompo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
