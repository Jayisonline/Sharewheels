import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import {Marker} from 'react-native-maps';


export default function MapScreen({route}) {

	const latitude = route.params.latitude.dLat;
	const longitude = route.params.longitude.dLong;

	console.log(latitude+' '+longitude);

	const navigation = useNavigation();
  return (
	<View>
			<View className="flex-row justify-between pt-100 font-extrabold text-2x" style={{backgroundColor: "#540C97"}}>

			<SafeAreaView className="flex">

					<View className="flex-row justify-start mt-10 pb-2">

						<TouchableOpacity
							onPress={() => navigation.goBack()}
							className = "bg-yellow-400 p02 rounded-tr-2xl rounded-bl-2xl ml-4"
						>
							<ArrowLeftIcon size="30" color="black" font="bold"/>
						</TouchableOpacity>

						<Text className="ml-10 text-xl font-bold text-white">Driver's Information</Text>
					</View>
					{/* <View className="flex-row justify-between w-96 ml-4">
						<Text className="text-xl font-bold">Form: {s}</Text>
							<ArrowRightIcon size="20" color="black"/>
						<Text className="text-xl font-bold">To: {d}</Text>
					</View> */}
				</SafeAreaView>

				
			</View>

	  <MapView
				className="h-full w-100"
				initialRegion={{
				latitude: latitude,
				longitude: longitude,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
				}}
		>
			<Marker
				coordinate={{latitude: latitude, longitude: longitude}}
				// image={{uri: 'custom_pin'}}
			/>
		</MapView>


	</View>
  )
}