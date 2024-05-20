import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'

export default function RideReqCard() {
  return (
	<GestureHandlerRootView>
	<View className="bg-white rounded-lg m-3 mt-0 p-2" style={{width: responsiveWidth(90)}}>
	  
	  <View className="">
		<TouchableOpacity className="bg-gray-200">
		<Text>User Name</Text>
		<Text>unique id</Text>
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