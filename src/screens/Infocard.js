import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Infocard({ user, source, destination, date, time, fare }) {
  
  const navigation = useNavigation();

 
  
  const handlePress = () => {
      navigation.navigate("BookRide", {DriverId: user, source: source, destination: destination});
  }

  return (
  <View>
	<TouchableOpacity onPress={handlePress} className="bg-gray-100 shadow-md rounded-xl m-2 p-6 pt-4" style={{width:responsiveWidth(92)}}>

    <View className="flex-row">
     <Image source={require("../img/man.jpg")} style={{width: responsiveWidth(8), height: responsiveWidth(8), borderWidth:1, borderColor:"black"}} className="rounded-full" />
      {/* <Text className="text-lg font-bold ml-2">Arpit Sir</Text> */}
      </View>
      <Text className="text-lg font-bold">{user}</Text>

      <View className="flex flex-row justify-between">
        <Text className="text-m font-bold text-gray-700">Form: {source}</Text>
        <Icon name='arrow-right' />
        <Text className="text-m font-bold text-gray-700">To: {destination}</Text>

      </View>

      <View className="flex flex-row justify-between">
        <Text className="text-m font-bold text-gray-700">Journey Date: {date}</Text>
        {/* <Icon name='arrow-right' /> */}
        <Text className="text-m font-bold text-gray-700">Time: {time}</Text>

      </View>

      <View className="flex flex-row justify-between">
        <Text className="text-m font-bold text-gray-700">Fare: {fare}/- Only</Text>
       

      </View>
        </TouchableOpacity>


          

                {/* <TouchableOpacity onPress={handlePress} className="bg-gray-100 shadow-md rounded-xl m-2 p-6 pt-4" style={{width:responsiveWidth(92)}}>
                <View className="flex-row">
     <Image source={require("../img/woman.jpg")} style={{width: responsiveWidth(8), height: responsiveWidth(8), borderWidth:1, borderColor:"black"}} className="rounded-full" />
      <Text className="text-lg font-bold ml-2">Gita</Text>
      </View>
                <Text className="text-lg font-bold">YXfqvVrqxRcDte9g6O5pfzs4THN2</Text>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Form: {source}</Text>
                  <Icon name='arrow-right' />
                  <Text className="text-m font-bold text-gray-700">To: {destination}</Text>

                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Journey Date: 23 April</Text>
                  <Icon name='arrow-right' /> 
                  <Text className="text-m font-bold text-gray-700">Time: 1PM</Text>

                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Fare: 699/- Only</Text>
                

                </View>
                </TouchableOpacity> */}






                {/* <TouchableOpacity onPress={handlePress} className="bg-gray-100 shadow-md rounded-xl m-2 p-6 pt-4" style={{width:responsiveWidth(92)}}>
                <View className="flex-row">
     <Image source={require("../img/woman.jpg")} style={{width: responsiveWidth(8), height: responsiveWidth(8), borderWidth:1, borderColor:"black"}} className="rounded-full" />
      <Text className="text-lg font-bold ml-2">Vedanti</Text>
      </View>
                <Text className="text-lg font-bold">KdhsihdjhsjhDte9g6O5pfzs4THN2</Text>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Form: {source}</Text>
                  <Icon name='arrow-right' />
                  <Text className="text-m font-bold text-gray-700">To: {destination}</Text>

                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Journey Date: 23 April</Text>
                   <Icon name='arrow-right' /> 
                  <Text className="text-m font-bold text-gray-700">Time: 1PM</Text>

                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Fare: 700/- Only</Text>
                

                </View>
                </TouchableOpacity> */}



                {/* <TouchableOpacity onPress={handlePress} className="bg-gray-100 shadow-md rounded-xl m-2 p-6 pt-4" style={{width:responsiveWidth(92)}}>
                <View className="flex-row">
     <Image source={require("../img/man.jpg")} style={{width: responsiveWidth(8), height: responsiveWidth(8), borderWidth:1, borderColor:"black"}} className="rounded-full" />
      <Text className="text-lg font-bold ml-2">Vedant</Text>
      </View>
                <Text className="text-lg font-bold">IjskSSorqxRcDte9g6O5pfzs4BGS&</Text>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Form: {source}</Text>
                  <Icon name='arrow-right' />
                  <Text className="text-m font-bold text-gray-700">To: {destination}</Text>

                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Journey Date: 23 April</Text>
                 <Icon name='arrow-right' /> 
                  <Text className="text-m font-bold text-gray-700">Time: 3AM</Text>

                </View>

                <View className="flex flex-row justify-between">
                  <Text className="text-m font-bold text-gray-700">Fare: 849/- Only</Text>
                

                </View>
                </TouchableOpacity> */}
     </View>
  )
}