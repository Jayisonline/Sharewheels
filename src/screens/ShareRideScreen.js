import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollViewComponent, ScrollView, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import DatePicker from 'react-native-date-picker'
import { Button } from 'react-native-paper';
import firebase from 'firebase/compat/app';
import useAuth from '../../hooks/useAuth';
import { db } from '../../config/firebase';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import Geolocation from 'react-native-geolocation-service';
// import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';


export default function ShareRideScreen() {
	// const [date, setDate] = useState(new Date())

	const navigation = useNavigation();
	const [open, setOpen] = useState(false)

	const [source, setSource] = useState("");
	const [destination, setDestination] = useState("");
	const [seats, setSeats] = useState("");
	const [fare, setFare] = useState("");
	const [date, setDate ] = useState("");
	const [time, setTime] = useState("");
	// const [message, setMessage] = useState("");

	
	const user = useAuth();

	// console.log(source);
	// console.log(destination);
	// console.log(date);
	// console.log(time);
	// console.log(seats);
	// console.log(fare);

	// useEffect(()=>{
	// 	requestLocPermission();
	// }, []);

	const requestLocPermission = async () => {
		try {
		  const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			{
			  title: 'Location Access',
			  message:'',
			  buttonNeutral: 'Ask Me Later',
			  buttonNegative: 'Cancel',
			  buttonPositive: 'OK',
			},
		  );
		  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			console.log('You can use the Location');
		  } else {
			console.log('Location permission denied');
		  }
		} catch (err) {
		  console.warn(err);
		}
	};


	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
  
	useEffect(() => {
	  
		(async () => {
		
		
  
			const result = await Location.requestForegroundPermissionsAsync();
			console.log("requesting...");
			let location = await Location.getCurrentPositionAsync({});
			console.log("got location");
			setLocation(location);	
	  })();

	}, []);


	// Geolocation.setRNConfiguration(config);


	const handleSubmit = async (e) =>{
		// e.persist();

		try{

			console.log(location);
			const loc = location;
			// console.log(loc.coords.latitude);
			
			
			const data = user;
			console.log(data.user.uid);

			const docData = {
				uid: data.user.uid,
				source: source,
				destination: destination,
				seats: seats,
				fare: fare,
				date: date,
				time: time,
				dlat: loc.coords.latitude,
				dlong: loc.coords.longitude,
			}

			await setDoc(doc(db, "ShareRide", data.user.uid), docData);
		
			console.log("Created a Ride Successfully!");

		}catch(e){
			console.log("error " + e);
		}

	}


  return (
	<ScrollView>
		<SafeAreaView className="flex">
			<View className="flex-row justify-start pt-10 pb-2" style={{backgroundColor: "#540C97"}}>

				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className = "bg-yellow-400 p02 rounded-tr-2xl rounded-bl-2xl ml-4"
				>
					<ArrowLeftIcon size="30" color="black" />
				</TouchableOpacity>
				<View>
					<Text className="font-bold text-lg pl-5 text-white">Share Your Ride</Text>
				</View>
			</View>
			<View>
				{/* insert image */}
			</View>
	  </SafeAreaView>


		<View className='flex-1 px-8 pt-8 bg-white' style={{borderTopRadius: 50, borderTopRightRadius: 50, height: responsiveScreenHeight(86)}}>

			<View className="form space-y-2 ">
				<Text className="text-gray-700 ml-4">Source</Text>
				<TextInput 
					className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
					value={source}
					onChangeText={value=>setSource(value)}
					placeholder = "Enter Source"

				/>

				<Text className="text-gray-700 ml-4">Destination</Text>
				<TextInput 
					className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
					value={destination}
					onChangeText={value=>setDestination(value)}
					placeholder = "Enter Destination"

				/>

	

				<Text className="text-gray-700 ml-4">Date</Text>
				<TextInput 
					className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
					value={date}
					onChangeText = {value=>setDate(value)}
					placeholder='Enter Date'
				/>


	

				<Text className="text-gray-700 ml-4">Time</Text>
				<TextInput 
					className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
					value={time}
					onChangeText = {value=>setTime(value)}
					placeholder='Journey start time'
				/>

				<Text className="text-gray-700 ml-4">Number of seats available</Text>
				<TextInput 
					className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
					value={seats}
					onChangeText = {value=>setSeats(value)}
					placeholder='Enter seats available'
				/>


				<Text className="text-gray-700 ml-4">Fare per person</Text>
				<TextInput 
					className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
					value={fare}
					onChangeText = {value=>setFare(value)}
					placeholder='Fare in Rs/-'
				/>


				


				<TouchableOpacity
					className="py-3 bg-yellow-400 rounded-xl mb-10 mt-5"
					onPress = {handleSubmit}
				>
					<Text className="font-xl font-bold text-center text-gray-700">
						Create a ride
					</Text>
					
					
				</TouchableOpacity>	

		</View>
		</View>

	</ScrollView>
  )
}