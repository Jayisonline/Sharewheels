import { View, Text , Image, Touchable, PermissionsAndroid, Linking} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import useAuth from '../../hooks/useAuth';
import { db } from '../../config/firebase';
import { ArrowRightIcon } from 'react-native-heroicons/outline';



 

export default function BookRideScreen({route}) {
	

	

	const [driverEmail, setDriverEmail] = useState("");
	const [driverPhno, setDriverPhno] = useState("");
	const [driverName, setDriverName] = useState("");
	const [fare, setFare] = useState("");
	const [seats, setSeats] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");

	const [passEmail, setPassEmail] = useState("");
	const [passPhno, setPassPhno] = useState("");
	const [passName, setPassName] = useState("");
	const [passId, setPassId] = useState("");

	const [location, setLocation] = useState(false);
	const [content, setContent] = useState("Book Ride");


	const driverId = route.params.DriverId;
	const s = route.params.source;
	const d = route.params.destination;



	const user = useAuth();
	const data = user;
	console.log(data);
	const setUID = async () => {
		setPassId(data?.user?.uid);
	};

	

	// setUID();

	// console.log(route.params.DriverId);


	//geolocation permission








	const onStart = async () => {

		
		try {
			// getLocation();

			setUID();
			
			// Driver's information
			const q1 = doc(db, "users", driverId);
			const snapShot = await getDoc(q1);
			const d = snapShot.data();

			setDriverEmail(d.email);
			setDriverName(d.username);
			setDriverPhno(d.phoneno);
			// console.log("data =>"+ d.email);


			// driver's extra info
			const q2 = doc(db, "ShareRide" , driverId);
			const snapShot2 = await getDoc(q2);
			const d2 = snapShot2.data();
			setFare(d2.fare);
			setDate(d2.date);
			setTime(d2.time);
			setSeats(d2.seats);



		}catch(e){
			console.log("error1: "+e);
		}
	}

	// onStart();


	const handlePress = async () => {


		
		try{

			

			//passengers info
			const q3 = doc(db, "users", passId);
			const snapShot3 = await getDoc(q3);
			const d3 = snapShot3.data();

			setPassName(d3.username);
			setPassPhno(d3.phoneno);
			setPassEmail(d3.email);

			console.log("passId: "+ passId);
			


			const bookingId = passId+driverId;
			//data for pushing in BookedRides
			const docData = {
				bookingId: bookingId,
				passengerId: passId,
				passName:passName,
				passEmail: passEmail,
				passPhone: passPhno,
				driverId: driverId,
				driverName:driverName,
				driverEmail: driverEmail,
				driverPhno: driverPhno,
				date: date,
				time: time,
				fare: fare, 
				seatsgrabbed: seats,

			}
			await setDoc(doc(db, "BookedRides", bookingId), docData);
			console.log("Ride Booked Sucessfully!");
			// setContent("Booked!");

			Linking.openURL("https://www.google.com/maps/@21.0474049,79.0091255,10.88z");



		}catch(e){
			console.log("error2: "+e);
		}
	}


	// onStart();
	useEffect(() => {
		onStart();
		
	}, []);

	console.log(passId);



  return (

	<GestureHandlerRootView>
		<ScrollView>
	<View className="justify-between">
	  <Text>BookRideScreen</Text>

	  <Image source={require("../img/man.jpg")}
	  style={{width:300, height:300, }} 
	  className="rounded-full ml-10 mt-10"
	  />

		<View className="flex-row flex justify-between mt-10 p-6 font-bold text-lg">
			<Text>Source: {s}</Text>
			<Text>Destination: {d}</Text>
		</View>

		<View className="flex-col justify-between ml-20">
			<Text>Driver's Name: {driverName}</Text>
			<Text>User ID: {driverId}</Text>
			<Text>Email: {driverEmail}</Text>
			<Text>Phone No.: {driverPhno}</Text>
			<Text>Available Seats: {seats}</Text>
			<Text>Date of Journey: {date}</Text>
			<Text>Time of Journey: {time}</Text>
			<Text>Fare per Person: {fare}Rs/-</Text>
		</View>


		<TouchableOpacity  

	  	onPress={()=> {Linking.openURL("https://www.google.com/maps/@21.0474049,79.0091255,10.88z")}}
	  	className="w-80 h-10 bg-green-600 justify-center flex-row rounded-lg mt-10 ml-10"
	  >
		<Text className="pt-1 font-extrabold text-2xl text-white border-blue-950">Get Location of Driver</Text>
	  </TouchableOpacity>

	  <TouchableOpacity  

	  	onPress={handlePress}
	  	className="w-80 h-10 bg-green-600 justify-center flex-row rounded-lg mt-10 ml-10"
	  >
		<Text className="pt-1 font-extrabold text-2xl text-white border-blue-950">{content}</Text>
	  </TouchableOpacity>


	</View>
	</ScrollView>
	</GestureHandlerRootView>
  )
}