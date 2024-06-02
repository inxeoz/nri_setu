import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ErpNotice from '../tabs/Notice';

import ErpDues from '../tabs/Dues';
import ErpAttend from '../tabs/Attend';
import ErpTrans from '../tabs/Trans';
import ErpFees from '../tabs/Fees';

import {
  Ionicons,
  Entypo,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  useEffect(() => {
    console.log('erp logged');
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Notice"
        component={ErpNotice}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <Entypo name="notification" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dues"
        component={ErpDues}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <FontAwesome name="institution" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Attendence"
        component={ErpAttend}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={ErpTrans}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <MaterialIcons name="featured-play-list" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Fees"
        component={ErpFees}
        options={{
          tabBarIcon: ({ focused = true, color = 'black', size = 24 }) => (
            <MaterialIcons name="payments" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function LoggedInComponent() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}

export default LoggedInComponent;
