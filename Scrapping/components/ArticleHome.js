import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useState, useEffect } from 'react';

import Articles from './Articles';
import ShowData from './ShowData';
const Stack = createNativeStackNavigator();

import { state, update } from '../index';

export default function ArticlesHome({ navigation, url }) {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Articles"
          component={Articles}
          initialParams={{ url }}
          options={{ headerShown: false}}
        />
        <Stack.Screen name="ShowData" component={ShowData} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//https://www.nrigroupindia.com/category/latest-posts/'}
//https://www.nrigroupindia.com/category/blog/
