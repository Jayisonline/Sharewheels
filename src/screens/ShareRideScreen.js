import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollViewComponent, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore"; 
import DatePicker from 'react-native-date-picker'
import { Button } from 'react-native-paper';
import firebase from 'firebase/compat/app';
import useAuth from '../../hooks/useAuth';
import { db } from '../../config/firebase';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';


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

	const handleSubmit = async (e) =>{
		// e.persist();

		try{
			
			const data = user;
			console.log(data.user.uid);

			const docData = {
				uid: data.user.uid,
				source: source,
				destination: destination,
				seats: seats,
				fare: fare,
				date: date,
				time: time
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
			<View className="flex-row justify-start mt-10">

				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className = "bg-yellow-400 p02 rounded-tr-2xl rounded-bl-2xl ml-4"
				>
					<ArrowLeftIcon size="30" color="black" />
				</TouchableOpacity>
				<View>
					<Text className="font-bold text-lg pl-5">Share Your Ride</Text>
				</View>
			</View>
			<View>
				{/* insert image */}
			</View>
	  </SafeAreaView>


		<View className='flex-1 px-8 pt-8 bg-white' style={{borderTopRadius: 50, borderTopRightRadius: 50}}>

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