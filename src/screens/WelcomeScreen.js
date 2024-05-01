// import { View, Image, Text, TouchableOpacity } from "react-native"
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import React from "react"
// import { LinearGradient } from 'expo-linear-gradient'
// import { useNavigation } from "@react-navigation/native";


// export default function WelcomeScreen() {


// 	const navigation = useNavigation();

// 	return(
// 		<View className='flex-1 flex justify-end'>

// 			<Image 
// 			source={require('../../assets/images/welcome.png')}
// 			className='h-full w-full absolute'

// 			/>



// 			<View className='p5 pb-10 space-y-8'>

				
// 				<LinearGradient 
// 					colors={['transparent', 'rgba(3, 105, 161, 0.8)']}
// 					style={{width:wp(100), height: hp(60)}}
// 					start={{x:0.5, y: 0}}
// 					end={{x:0.5, y: 1}}
// 					className='absolute bottom-0'
// 				/>
// 				<View  className='space-y-3 p-4'>
// 					<Text className="text-white font-bold text-5xl" style={{fontSize: wp(10)}}>Traveling made easy!</Text>
// 					<Text className="text-neutral-200 font-medium" style={{fontSize: wp(4)}}>
// 							Exeperience the world's best adventures arouond the world with us.
// 					</Text>
// 				</View>


// 				<TouchableOpacity onPress={()=> navigation.navigate("Home")} className="bg-orange-500 mx-auto p-3 px-12 rounded-full">
// 					<Text className='text-white font-bold' style={{fontSize: wp(5.5)}}>Let's Explore</Text>
// 				</TouchableOpacity>

				
// 			</View>
// 		</View>
// 	)
// }



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