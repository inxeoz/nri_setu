import { NavigationContainer } from '@react-navigation/native';

import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ContactUs, Settings, NIIST, Home } from './index';
import ERP_LOGIN from '../ErpLogin/App1';

const Drawer = createDrawerNavigator();

export default function MyDrawer({ navigation }) {

  useEffect(() => {
    console.log("main")
  }, [])
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={Home} />
        <Drawer.Screen name="ERP_LOGIN" component={ERP_LOGIN} />
        <Drawer.Screen
          name="NIIST"
          component={NIIST}

          
          initialParams={{
            url1: 'https://www.nrigroupindia.com/category/latest-posts/',
            url2: 'https://www.nrigroupindia.com/category/blog/',
          }}
        />
        <Drawer.Screen
          name="Contact us"
          component={ContactUs}
          options={
            {
              // drawerItemStyle: { display: 'none' },
            }
          }
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerItemStyle: { display: 'none' },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
