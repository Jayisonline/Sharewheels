import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Infocard from './Infocard'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import PassengerCard from './PassengerCard';
import useAuth from '../../hooks/useAuth';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';

export default function PassengerScreen() {
	const user = useAuth();
	const data = user;
	// console.log(data?.user?.uid);
	const [passId, setPassId] = useState("");
	const [list, setList] = useState([]);

	const setUID = async () => {
		setPassId(data?.user?.uid);
	};


	const onStart = async () => {

		try{
			
			console.log("starting...");
			setUID();
			console.log("uid: " + passId);
			
			const q = query(collection(db, "BookedRides"), where());
			// console.log(q);
			console.log("snap1");

			const querySnapshot = await getDocs(q);

			console.log("snap2");

			const data = [];
			


			querySnapshot.forEach((doc) => {
				const d = doc.data();
				const BookingId = doc.id;

				console.log(d);

				data.push({
					BookingId: BookingId, 
					date: d.date,
					driverEmail: d.driverEmail,
					driverId: d.driverId,
					driverName: d.driverName,
					driverPhno: d.driverPhno,
					fare: d.fare,
					// passEmail:d.passEmail,
					// passName: d.passName,
					// passPhone: d.passPhone,
					// passengerId: d.passengerId,
					seatsgrabbed: d.seatsgrabbed,
					time: d.time, 
					s: d.source, 
					des:d.destination
				});

			});

			setList([...data]);

			console.log("done");



		}catch(er){

			console.log("error: "+ e);
		}

		console.log(list);

	}



	onStart();

	console.log(passId);
		


  return (

	<GestureHandlerRootView>
	<View>

		<View className="flex-row">
			<Text className="mt-10 font-bold text-3xl ml-16">PassengerScreen</Text>
		</View>

		<View>
			<ScrollView>


					

					
				<View className="pl-7 bg-indigo-500">


				{list.map((i) => {
				// console.log(i.uid);
					return (<PassengerCard key={i.BookingId} BookingId={i.BookingId} source={i.source} destination={i.destination} date={i.date} time={i.time} fare={i.fare} driverEmail={i.driverEmail} driverId={i.driverId} driverName={i.driverName}/>)
					
					})
				}
					{/* <PassengerCard />
					<PassengerCard />

					<PassengerCard />
					<PassengerCard />
					<PassengerCard />
					<PassengerCard />
					<PassengerCard />
					<PassengerCard />
					<PassengerCard />
					<PassengerCard /> */}

				</View>

			</ScrollView>
		</View>
	</View>

	</GestureHandlerRootView>
  )
}