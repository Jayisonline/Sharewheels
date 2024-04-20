import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Infocard from './Infocard'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
// import { Icon } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import { and, collection, getDocs, query, where, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';




export default function SearchRideScreen({route}) {

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

					data.push({uid: doc.id, fare: d.fare, date: d.date, time: d.time});
				

					
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


		<View className="flex-row justify-between m-10 pt-2 font-extrabold text-2xl">

			<Text className="text-xl font-bold">Form: {s}</Text>
			<ArrowRightIcon size="20" color="black"/>
			<Text className="text-xl font-bold">To: {d}</Text>
		</View>

	 <ScrollView>


		

		
		<View className="pl-7 bg-indigo-500">


			{info.map((i) => {
				// console.log(i.uid);
				return (<Infocard key={i.uid} user={i.uid} source={s} destination={d} date={i.date} time={i.time} fare={i.fare} />)
			})
			}

		</View>

		</ScrollView>
		
</GestureHandlerRootView> 
  )
}