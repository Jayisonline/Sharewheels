import { View, Text, ScrollView } from 'react-native'
import React from 'react'
// import {  } from 'react-native-gesture-handler'
import RideReqCard from '../cards/RideReqCard'
import BookingCard from "../cards/bookingCard"
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function AcceptedReqScreen() {
  return (
	<GestureHandlerRootView>
	<ScrollView className="" style={{backgroundColor: "#540C97"}}>
	<View className="mt-2 h-full flex items-center justify-center">
		<Text className="text-white font-bold text-lg pb-3">Your booked Rides</Text>
		<View className="flex-row justify-between w-80 mb-2">
			<Text className="text-white font-bold">From: </Text>
			<Text className="text-white font-bold">To: </Text>
		</View>
		<BookingCard/>
		<BookingCard/>
		<BookingCard/>
		<BookingCard/>
		<BookingCard/>
		<BookingCard/>
		<BookingCard/>
		<BookingCard/>
		
		
	  </View>
	</ScrollView>
	</GestureHandlerRootView>
  )
}