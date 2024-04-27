import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Infocard({ user, source, destination, date, time, fare }) {
  
  const navigation = useNavigation();

 
  
  const handlePress = () => {
      navigation.navigate("BookRide", {DriverId: user, source: source, destination: destination});
  }

  return (
  // <View>
	<TouchableOpacity onPress={handlePress} className="bg-white shadow-md rounded-xl m-2 p-6 pt-4 w-96">
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
        <Text className="text-m font-bold text-gray-700">Fare: {fare}</Text>
       

      </View>
    </TouchableOpacity>
    // </View>
  )
}