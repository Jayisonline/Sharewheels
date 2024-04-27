import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import Infocard from './Infocard'

export default function DriverScreen() {
  return (
	
	<GestureHandlerRootView>
	<View>

		<View className="shadow-xl">
			<Text className="mt-10 font-bold text-3xl ml-20 pl-4">DriverScreen</Text>
		</View>

		<View>
			<ScrollView>


					

					
				<View className="pl-7 bg-indigo-500">
					<Infocard />
					<Infocard />
					<Infocard />
					<Infocard />
					<Infocard />
					<Infocard />
					<Infocard />
					<Infocard />
					<Infocard />
				</View>

			</ScrollView>
		</View>
	</View>

	</GestureHandlerRootView>
  )
}