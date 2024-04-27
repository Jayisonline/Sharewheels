import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DriverScreen from '../Screens/DriverScreen';

import PassengerScreen from '../Screens/PassengerScreen'

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PassangerScreen" component={PassengerScreen} />
      <Tab.Screen name="DriverScreen" component={DriverScreen} />
    </Tab.Navigator>
  );
}