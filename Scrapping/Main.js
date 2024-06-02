import React, { useEffect , useState, useLayoutEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  FontAwesome6,
} from '@expo/vector-icons';
import ArticlesHome from './components/ArticleHome';

import { state, update } from './index';

const Tab = createBottomTabNavigator();

function Main({ url1, url2}) {
  

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen
          name="Posts"
          component={() => (
            <ArticlesHome
              url={url1}
            />
          )}
          options={{
            tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
              <FontAwesome6 name="fire" size={24} color="black" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Blogs"
          component={() => (
            <ArticlesHome
              url={ url2}
            />
          )}
          options={{
            tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
              <MaterialIcons name="article" size={24} color="black" />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Main;
