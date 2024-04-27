import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

export default function PassengerCard({BookingId, source, destination, driverName, date, time, driverEmail, driverPhno, fare, seatsgrabbed, driverId}) {
	


  return (
	<View>
		<View className="bg-white w-80 flex justify-center align-middle mt-6 mb-2 p-2 rounded-lg">  


		<View className="flex flex-row justify-between">
			<Text className="font-bold text-lg">
				From: {source}
			</Text>

			<Icon name='arrow-right' style={{fontSize: 14, paddingTop: 4}} />
			<Text className="font-bold text-lg">
				To: {destination}
			</Text>
		</View>
		  
		<Text className="font-semibold">
			Booking-Id: {BookingId}
		</Text>

		<Text className="font-semibold">
			Status: Booked
		</Text>
	  	
		<View className="flex flex-row justify-between">
			<Text>
				Drivers Name: {driverName}
			</Text>
			<Text>
				Drivers number: {driverPhno}
			</Text>
		</View>

		<View className="flex flex-row justify-between">
			<Text>
				Drivers Email: {driverEmail}
			</Text>
			<Text>
				Drivers UID: {driverId}
			</Text>
		</View>

		<View className="flex flex-row justify-between">
			<Text>
				Date: {date}
			</Text>
			<Text>
				Time: {time}
			</Text>
		</View>

		<View className="flex flex-row justify-between">
			<Text>
				Fare: {fare}
			</Text>
			<Text>
				Seats: {seatsgrabbed}
			</Text>
		</View>


			{/* <View className="flex-row justify-between w-74 pl-0 ">
				<TouchableOpacity
					className="bg-green-500 w-36 p-3 rounded-lg"
				>
					<Text className="text-xl font-bold text-white pl-10">Pay</Text>
				</TouchableOpacity>
				<TouchableOpacity
					className="bg-yellow-500 w-36 p-3 rounded-lg"
				>
					<Text className = "text-xl font-bold text-white pl-2">Cancel Ride</Text>
				</TouchableOpacity>
			</View> */}
		</View>

		{/* <View style={{flex: 1, height: 1, backgroundColor: 'white', width:315, }} /> */}
	</View>
  )
}