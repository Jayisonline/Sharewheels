import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AcceptedReqScreen from '../Screens/AcceptedReqScreen';
import RideReqScreen from '../Screens/RideReqScreen';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator className="mt-7">
      <Tab.Screen name="RideReq" component={RideReqScreen} />
      <Tab.Screen name="AcceptedReq" component={AcceptedReqScreen} />
    </Tab.Navigator>
  );
}