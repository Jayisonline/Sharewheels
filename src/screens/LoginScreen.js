import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'


export default function LoginScreen() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState('');

	const handleSubmit = async ()=> {
		if (email && password){
			try{
				await signInWithEmailAndPassword(auth, email, password);
			}catch(err){
				console.log("got error: ", err.message)
			}
		}
	}

	const navigation = useNavigation();
  return (


	<View className = "flex-1  bg-indigo-400" style={{backgroundColor: "#540C97"}}>
	  
	  <SafeAreaView className="flex mb-3">
			<View className="flex-row justify-start">

				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className = "bg-yellow-400 p02 rounded-tr-2xl rounded-bl-2xl ml-4"
				>
					<ArrowLeftIcon size="30" color="black" />
				</TouchableOpacity>
				<View>
					<Text className="font-bold text-white text-lg pl-5">Login Screen</Text>
				</View>

			</View>
			
	  </SafeAreaView>


	  <View className='flex-1 bg-white px-8 pt-8' style={{borderTopRadius: 50, borderTopRightRadius: 50}}>

		<View className="form space-y-2">
			<Text className="text-gray-700 ml-4">Email Address</Text>
			<TextInput 
				className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				// style={{backgroundColor: "#CDCDCD"}}
				value={email}
				onChangeText={value=>setEmail(value)}
				placeholder = "Enter Email"

			/>

			<Text className="text-gray-700 ml-4">Password</Text>
			<TextInput 
				className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				value={password}
				onChangeText={value=>setPassword(value)}
				placeholder = "Enter Password"
				
			/>


			<TouchableOpacity className="flex items-end mb-5" >
				<Text className="text-gray-700">Forgot password?</Text>
			</TouchableOpacity>


			<TouchableOpacity
				onPress={handleSubmit}
				className="py-3 bg-yellow-400 rounded-xl"
			>
				<Text className="font-xl font-bold text-center text-gray-700">
					Login
				</Text>
				
				
			</TouchableOpacity>	

		</View>

		<Text className="text-xl text-gray-700 font-bold text-center py-5">
			OR
		</Text>

	


		<View className="flex-row justify-center">
						<Text className="text-grey font-semibold">Don't have an account? </Text>

						<TouchableOpacity onPress={()=> navigation.navigate("SignUp")}>
							<Text className="font-semibold text-yellow-400">
								Sign Up
							</Text>
						</TouchableOpacity>
		</View>

	  </View>
	 </View>
  )
}