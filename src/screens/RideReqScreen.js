import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import RideReqCard from '../cards/RideReqCard'
import useAuth from '../../hooks/useAuth';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { responsiveWidth } from 'react-native-responsive-dimensions';
// import {  } from 'react-native-gesture-handler'

export default function RideReqScreen() {

	const user = useAuth();
	const temp = user;

	const [uid, setUid] = useState("");

	console.log("User data: "+ temp?.user?.uid);
	// const uid = temp.user.uid;

	const [info, setInfo] = useState([]);

	useEffect(() => {
	  
		(async () => {
			
			// try{
			// 	console.log("checking...");
			// 	const q1 = doc(db, "RideReq", "dzdCLkc1HNMpKiN4YeBl0EY7zgr1");
			// 	const snapShot = await getDoc(q1);
			// 	const d = snapShot.data();
			// 	const temp = d;
			// 	console.log("d: " + temp);
			// 	setData(temp);
			// 	console.log("this is the data we want: "+ data.source);
			// 	console.log("got it!");

				


			// }catch(e){

			// 	console.log("error: "+e);
			// }



			try{

				setUid(temp?.user?.uid);

				console.log("checking...");
				const q = query(collection(db, "RideReq"), where("driverId", "==", "dzdCLkc1HNMpKiN4YeBl0EY7zgr1"));
				const querySnapshot = await getDocs(q);

				console.log("Gotit!")

				const data = [];

				querySnapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots

					const d = doc.data();
					const id = doc.id;

					// const q2 = query(collection(db, 'users'), where("uid", "==",  id));
					// const snapshot = getDocs(q2);

					data.push(doc.data());
				

					
					console.log(doc.id, " => ", doc.data());
					
					
				});
				// info =data;
				console.log("this is the data we want: "+data[0].date);
				setInfo([...data]);


			}catch(e){
				console.log("error: "+ e);
			}





			
	  })();

	}, []);


	const onAccept = async () =>{
		
		await setDoc(doc(db, "BookedRides", data.bookingId), data);
		console.log("Ride Booked Sucessfully!");

	}





  return (
	
	<ScrollView className="" style={{backgroundColor: "#540C97"}}>
	<View className="mt-2 h-full flex items-center justify-center">
		<Text className="text-white font-bold text-lg pb-3">These people want to join your cluster</Text>
		<View className="flex-row justify-between w-80 mb-2">
			<Text className="text-white font-bold">From: </Text>
			<Text className="text-white font-bold">To: </Text>
		</View>


		{info.map((i) => {
				console.log(i);
				return (
					<View className="bg-white rounded-lg m-3 mt-0 p-2" style={{width: responsiveWidth(90)}} key={i}>
	  
					<View className="">
					  <TouchableOpacity className="bg-gray-200">
					  <Text>User Name: {i.passName}</Text>
					  <Text>{i.passengerId}</Text>
					  </TouchableOpacity>
					  <Text>For Ride</Text>
					  <Text>From: {i.source}</Text>
					  <Text>To: {i.destination}</Text>
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

				)
			})
		}


		
	  </View>
	</ScrollView>
  )
}