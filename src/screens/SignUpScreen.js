import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
// import auth from '../config/firebase'
import {getAuth} from 'firebase/auth'
import { auth ,db,storage} from '../../config/firebase'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc, setDoc} from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 
import { RadioButton } from 'react-native-paper';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'



export default function SignUpScreen() {

	const navigation = useNavigation();

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState('');
	const [phno, setPhno] = useState("");
	const [file, setFile] = useState("");
	const [err, setErr] = useState(false);
	const [gender, setGender] = useState("Male");

	const [checked, setChecked] = useState('first');


	
	const url = gender === 'man' ? "gs://share-wheels-b66ea.appspot.com/man.jpg" : "gs://share-wheels-b66ea.appspot.com/woman.jpg";

		// console.log(url);


	const handleSubmit = async ()=> {
		
		console.log(username);

		

		if (email && password){
			try{
				const res = await createUserWithEmailAndPassword(auth, email, password);
				
				await setDoc(doc(db, "users", res.user.uid), {
					uid: res.user.uid,
					username: username,
					phoneno: phno,
					email: email,
					photoURL: url
				});
				console.log(email);

			}catch(err){
				console.log("got error: ", err.message)
			}
		}
	}



  return (

	// <GestureHandlerRootView>

	<View className = "flex-1  bg-white" style= {{backgroundColor: "yellow"}}>
	  
	  <SafeAreaView className="flex">
			<View className="flex-row justify-start">

				<TouchableOpacity
					onPress={() => navigation.goBack()}
					className = "bg-yellow-400 p02 rounded-tr-2xl rounded-bl-2xl ml-4"
				>
					<ArrowLeftIcon size="30" color="black" />
				</TouchableOpacity>
			</View>
			<View>
				{/* insert image */}
			</View>
	  </SafeAreaView>


	  <View className='flex-1 bg-white px-8 pt-8' style={{borderTopRadius: 50, borderTopRightRadius: 50}}>

		<View className="form space-y-2">
			<Text className="text-gray-700 ml-4 pt-4">Full Name</Text>
			<TextInput 
				className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				value={username}
				onChangeText={value=>setUsername(value)}
				placeholder = "Enter Your Name"

			/>

			<Text className="text-gray-700 ml-4 pt-4">Gender</Text>

			<View className="flex flex-row">
				<RadioButton
					value="man"
					status={ gender === 'man' ? 'checked' : 'unchecked' }
					onPress={() => setGender('man')}
					
				/> 
				<Text className="pt-2">Male</Text>

				<RadioButton
					value="woman"
					status={ gender === 'woman' ? 'checked' : 'unchecked' }
					onPress={() => setGender('woman')}
				/>
				<Text className="pt-2">Female</Text>

			</View>

			<Text className="text-gray-700 ml-4 pt-4">Phone number</Text>
			<TextInput 
				className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				value={phno}
				onChangeText = {value=>setPhno(value)}
				placeholder='Enter Phone number'


			/>
				

			<Text className="text-gray-700 ml-4 pt-4">Email Address</Text>
			<TextInput 
				className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				value={email}
				onChangeText = {value=>setEmail(value)}
				placeholder = "Enter Email"

			/>

			<Text className="text-gray-700 ml-4 pt-4">Password</Text>
			<TextInput 
				className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				value={password}
				onChangeText = {value=>setPassword(value)}
				placeholder='Enter Password'
				
			/>


			{/* <Text className="text-gray-700 ml-4">Conform Password</Text>
			<TextInput 
				className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
				value="Test@1234"
				placeholder = "Enter Password"
				
			/> */}


			{/* <TouchableOpacity className="flex items-end mb-5" >
				<Text className="text-gray-700">Forgot password?</Text>
			</TouchableOpacity> */}


			<TouchableOpacity
				className="py-3 bg-yellow-400 rounded-xl"
				onPress = {handleSubmit}
			>
				<Text className="font-xl font-bold text-center text-gray-700">
					Sign up
				</Text>
				
				
			</TouchableOpacity>	

		</View>

		{/* { err && <Text>Something went wrong!</Text> } */}

		<Text className="text-xl text-gray-700 font-bold text-center py-5">
			OR
		</Text>

	

		<View className="flex-row justify-center">
						<Text className="text-grey font-semibold">Already have an account? </Text>

						<TouchableOpacity onPress={()=> navigation.navigate("Login")}>
							<Text className="font-semibold text-yellow-400">
								Login
							</Text>
						</TouchableOpacity>
		</View>

	  </View>
	 </View>

	//  </GestureHandlerRootView>
  )
}