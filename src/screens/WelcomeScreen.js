


import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

	const navigation = useNavigation();

  return (

	<>

		

	<SafeAreaView className="flex-1" style={{backgroundColor: "white", alignItems:'center', }}>
		<View className="flex-1 flex justify-around mt-10 mb-10">
				<Text className="font-bold text-4xl text-center text-black">
					Let's get Started!
				</Text>

		

				<View className="">
					<Image source={require("../img/img2.png")} style={{height:300, width:400, resizeMode: 'contain'}} className="mr-2" />
				</View>

				<Text className=" font-bold text-4xl text-center text-black">
				Share Wheels
				</Text>
				

				<View className="space-y-4">
					<TouchableOpacity
					 onPress={()=> navigation.navigate('SignUp')}
					 className="py-3 bg-yellow-400 mx-7 rounded-xl">

						<Text className="text-xl font-bold text-center text-gray-700">
							Sign up
						</Text>

					</TouchableOpacity>

					<View className="flex-row justify-center">
						<Text className=" font-semibold">Already have an account? </Text>

						<TouchableOpacity onPress={()=> navigation.navigate("Login")}>
							<Text className="font-semibold text-yellow-400">
								Log in
							</Text>
						</TouchableOpacity>
					</View>
				</View>

		</View>
	</SafeAreaView>
	</>
  )
}