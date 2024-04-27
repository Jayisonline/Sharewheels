import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Infocard from './Infocard'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
// import { Icon } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/outline';
import { and, collection, getDocs, query, where, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';




export default function SearchRideScreen({route}) {

	const navigation = useNavigation();

	const s = route.params.source;
	const d = route.params.destination;

	const [info, setInfo] = useState([]);

	
	
	const open = async () => {
			try{

				const q = query(collection(db, "ShareRide"), where("source", "==", s));
				const querySnapshot = await getDocs(q);

				const data = [];

				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots

					const d = doc.data();
					const id = doc.id;

					// const q2 = query(collection(db, 'users'), where("uid", "==",  id));
					// const snapshot = getDocs(q2);

					data.push({uid: doc.id, fare: d.fare, date: d.date, time: d.time, source: d.source, destination: d.destination});
				

					
					// console.log(doc.id, " => ", doc.data());
					
					
				});
				// info =data;
				// console.log(data);
				setInfo([...data]);


			}catch(e){
				console.log("error: "+ e);
			}
	}

	open();
	

	// info.forEach(async (doc) => {

	// 	const d = await getDoc(doc(db, 'users', doc.uid));
	// 	const temp = d.data();
	// 	console.log(temp.username);
	// 	doc.uid = temp.username;
	// 	// const snapshot = await getDocs(q1);
		
	// })

  return (
	<GestureHandlerRootView>


		<View className="flex-row justify-between pt-100 font-extrabold text-2x" style={{backgroundColor: "white"}}>

		<SafeAreaView className="flex">

				<View className="flex-row justify-start mt-10 pb-2">
	
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						className = "bg-yellow-400 p02 rounded-tr-2xl rounded-bl-2xl ml-4"
					>
						<ArrowLeftIcon size="30" color="black" font="bold"/>
					</TouchableOpacity>

					<Text className="ml-10 text-xl font-bold">Available Rides</Text>
				</View>
				<View className="flex-row justify-between w-96 ml-4">
					<Text className="text-xl font-bold">Form: {s}</Text>
						<ArrowRightIcon size="20" color="black"/>
					<Text className="text-xl font-bold">To: {d}</Text>
				</View>
			</SafeAreaView>

			
		</View>

	 <ScrollView className="h-full bg-indigo-500">


		

		
		<View className="pl-2 mt-2">

			{info.map((i) => {
				// console.log(i.uid);
				return (<Infocard key={i.uid} user={i.uid} source={i.source} destination={i.destination} date={i.date} time={i.time} fare={i.fare} />)
			})
			}

			{/* <Infocard />
			<Infocard />
			<Infocard />
			<Infocard />
			<Infocard />
			<Infocard /> */}


		</View>

		</ScrollView>
		
</GestureHandlerRootView> 
  )
}