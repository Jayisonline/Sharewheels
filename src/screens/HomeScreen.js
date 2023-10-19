import { View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView, Platform, TextInput } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react"
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from "../components/categories";
import SortCategories from "../components/sortCategories";
import Destinations from "../components/destinations";


const ios = Platform.OS=='ios'

const topMargin = ios? 'mt-3': 'mt-10';
export default function HomeScreen(){

	return(
		<SafeAreaView className='flex-1 bg-white'>
			<ScrollView showsVerticalScrollIndicator={false} className={"space-y-6"+topMargin}>


				<View className='mx-5 flex-row justify-between items-center mb-10'>
					<Text style={{fontSize: wp(7)}} className="font-bold text-neutral-700">Let's Discover</Text>

					<TouchableOpacity>
						<Image source={require('../../assets/images/avatar.png')} style={{height: wp(12), width: wp(12)}} />
					</TouchableOpacity>
				</View>




				{/* Search bar view */}

				<View className="mx-5 mb-4">
					<View className='flex-row item-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6'>
						<MagnifyingGlassIcon size={20} strokeWidth={3} color='grey' />

						<TextInput 
							placeholder="Search Destinations"
							placeholderTextColor={'grey'}
							className="flex-1 text-base mb-1 pl-1 tracking-wider"
						/>
					</View>
				</View>





				{/* Categories */}
				<View className='mb-4'>
					<Categories />
				</View>



				{/* sort Categories */}

				<View className='mb-4'>
					<SortCategories />
				</View>


				{/* Destinations */}

				<View className='mb-4'>
					<Destinations />
				</View>


			</ScrollView>
		</SafeAreaView>
	)
}