import { View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView, Platform, TextInput } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useState } from "react";
import { ArrowLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";
import { signOut } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, query, where } from "firebase/firestore";
import SearchRideScreen from "./SearchRideScreen";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import MapView from "react-native-maps";
import {Marker} from 'react-native-maps';





export default function HomeScreen({route}){
	const navigation = useNavigation();
	// const Drawer = createDrawerNavigator();

	const [source, setSource] = useState("");
	const [destination, setDestination] = useState("");

	


	// console.log(route.params.uid);


	// console.log(source);

	const handlePress = () =>{
		navigation.navigate("ShareRide")
	}
	

	const handleLogout = async()=>{
		await signOut(auth);
		navigation.navigate("Welcome")

	}

	const handleSubmitSearchRide = async () => {

		navigation.navigate("SearchRide", {source: source, destination:destination});
		console.log("Going to search rides screen!");

	}

	const handleAllRideBookings = async () => {
		navigation.navigate("AllRideBooking");
		console.log("Going to All Rides Booking!");
	}


	return(
		<View className = "flex-1  bg-white" style= {{backgroundColor: "#540C97"}}>

			<View className="flex">
				<View className="flex-row justify-start mt-8 pb-3">
	
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className = "bg-yellow-400 p02 rounded-tr-2xl rounded-bl-2xl ml-4"
					>
						{/* <ArrowLeftIcon size="30" color="white" font="bold"/> */}
					</TouchableOpacity>

					<Text className="ml-10 text-xl text-white font-bold">Home Screen</Text>
				</View>
				{/* <View>
					insert image
				</View> */}
			</View>
  
			<ScrollView className="">
		<View className='flex-1 bg-white px-8 rounded-3xl' style={{borderTopRadius: 20}}>
			

<View className="mt-3">

		<MapView
				className="rounded-2xl mb-3"
				style = {{width: responsiveWidth(85), height: responsiveHeight(35), justifyContent:"center"}}
				// className="h-full w-100 mt-2"
				initialRegion={{
				latitude: 21.151744,
				longitude: 79.0888448,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
				}}
		>
			<Marker
				coordinate={{latitude: 21.151744, longitude: 79.0888448}}
				
			/>
			

		
				
		
			<View className="flex items-center justify-center" style={{position:"absolute"}}>
			<Text className="font-bold text-lg mt-2 mb-2" style={{color:"#540C97"}}>Let's Book a Ride!</Text>
			</View>
			</MapView>

</View>
  
		  <View className="form space-y-2">
			  <TextInput 
				  className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				  value={source}
				  onChangeText={value=>setSource(value)}
				  placeholder = "From"
  
			  />
  
			  <TextInput 
				  className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				  value={destination}
				  onChangeText={value=>setDestination(value)}
				  placeholder = "To"
			
			  />
  
  
 
  
			  <TouchableOpacity
				  onPress={handleSubmitSearchRide}
				  className="py-3 bg-yellow-400 rounded-xl"
			  >
				  <Text className="font-xl font-bold text-center text-gray-700">
					  Search where you want to go
				  </Text>
				  
				  
			  </TouchableOpacity>	
  
		  </View>

		  
  
		  <Text className="text-xl text-gray-700 font-bold text-center py-5">
			  OR
		  </Text>
  
		  
  
  
		  	<TouchableOpacity
				  onPress={handlePress}
				  className="py-3 bg-yellow-400 rounded-xl"
			  >
				  <Text className="font-xl font-bold text-center text-gray-700">
					  Share your ride 
				  </Text>
				  
				  
			</TouchableOpacity>	




			<TouchableOpacity
				  onPress={handleAllRideBookings}
				  className="py-3 mt-12 bg-yellow-400 rounded-xl"
			  >
				  <Text className="font-xl font-bold text-center text-gray-700">
					  All ride bookings for driver
				  </Text>
				  
				  
			</TouchableOpacity>	


			<TouchableOpacity
				  onPress={handleLogout}
				  className="py-3 mt-12 bg-gray-400 rounded-xl mb-32"
			  >
				  <Text className="font-xl font-bold text-center text-gray-700">
					  Logout
				  </Text>
				  
				  
			</TouchableOpacity>	
  
		</View>

		</ScrollView>
	   </View>
		
	)
}