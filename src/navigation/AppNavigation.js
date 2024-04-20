// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';
// import DestinationScreen from '../screens/DestinationScreen';


// const Stack = createNativeStackNavigator();

// function AppNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         <Stack.Screen name="Destination" component={DestinationScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigation;




import {View, Text} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen';
import ShareRideScreen from '../Screens/ShareRideScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import useAuth from '../../hooks/useAuth';
// import LoggedInNavigation from './LoggedInNavigation';
import SearchRideScreen from '../Screens/SearchRideScreen';
import BookRideScreen from '../Screens/BookRideScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation(){

	const {user} = useAuth();
	if (user){
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home' 
			screenOptions={{headerShown: false}}
			>

				
				<Stack.Screen name="Home" component = {HomeScreen} />
				<Stack.Screen name="ShareRide" component = {ShareRideScreen} />
				<Stack.Screen name="SearchRide" component = {SearchRideScreen} />
				<Stack.Screen name="BookRide" component = {BookRideScreen} />
				

			</Stack.Navigator>
		</NavigationContainer>
	)

	}else  {

		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Welcome' 
				screenOptions={{headerShown: false}}
				>
					<Stack.Screen name="Home" component = {HomeScreen} />
					<Stack.Screen name="Welcome"  component = {WelcomeScreen} />
					<Stack.Screen name="Login" component = {LoginScreen} />
					<Stack.Screen name="SignUp" component = {SignUpScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		)

	}
}



