import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { responsiveWidth } from 'react-native-responsive-dimensions'


export default function BookingCard() {
  return (
	<GestureHandlerRootView>
	<View className="bg-white rounded-lg m-3 mt-0 p-2" style={{width: responsiveWidth(90)}}>
	  
	  <View className="">
		<TouchableOpacity className="bg-gray-200">
		<Text>Drivers Name</Text>
		<Text>Passengers Name</Text>
		</TouchableOpacity>
		<Text>For Ride</Text>
		<Text>From: </Text>
		<Text>To: </Text>
	  </View>


		<View className="flex-row justify-between">
		<TouchableOpacity 
			className="bg-yellow-400 w-28 h-10 rounded-lg flex items-center justify-center"
		>
			<Text className=" font-bold">Accept</Text>
		</TouchableOpacity>
		<TouchableOpacity 
			className="bg-green-400 w-28 h-10 rounded-lg flex items-center justify-center"
		>
			<Text className=" font-bold">See location</Text>
		</TouchableOpacity>

		<TouchableOpacity
			className="bg-red-500 w-28 h-10 rounded-lg flex items-center justify-center"
		>
			<Text className="font-bold">Cancel</Text>

			</TouchableOpacity> 

		
		</View>
	</View>

	</GestureHandlerRootView>
  )
}