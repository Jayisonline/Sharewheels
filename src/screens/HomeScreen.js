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





export default function HomeScreen(){
	const navigation = useNavigation();
	// const Drawer = createDrawerNavigator();

	const [source, setSource] = useState("");
	const [destination, setDestination] = useState("");


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

	return(
		<View className = "flex-1  bg-white" style= {{backgroundColor: "blue"}}>

			<SafeAreaView className="flex">
				<View className="flex-row justify-start">
	
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className = "bg-yellow-400 p02 rounded-tr-2xl rounded-bl-2xl ml-4"
					>
						<ArrowLeftIcon size="30" color="black" />
					</TouchableOpacity>
				</View>
				{/* <View>
					insert image
				</View> */}
			</SafeAreaView>
  
  
		<View className='flex-1 bg-white px-8 pt-20' style={{borderTopRadius: 20}}>


		<Image 
				source={require("../img/sharewheels.jpg")} 
			 	style = {{width: 300, height: 200, justifyContent:"center"}}
			/>
  
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
				  onPress={handlePress}
				  className="py-3 mt-12 bg-gray-400 rounded-xl"
			  >
				  <Text className="font-xl font-bold text-center text-gray-700">
					  All ride bookings
				  </Text>
				  
				  
			</TouchableOpacity>	


			<TouchableOpacity
				  onPress={handleLogout}
				  className="py-3 mt-12 bg-gray-400 rounded-xl"
			  >
				  <Text className="font-xl font-bold text-center text-gray-700">
					  Logout
				  </Text>
				  
				  
			</TouchableOpacity>	
  
		</View>
	   </View>
		
	)
}