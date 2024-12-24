import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SubHeading from './SubHeading'
import HospitalItem from './HospitalItem'
import hospital1 from "../../../assets/Images/hospital/hospital1.jpg";
import hospital2 from "../../../assets/Images/hospital/hospital2.jpg";
import hospital3 from "../../../assets/Images/hospital/hospital3.jpg";
import hospital4 from "../../../assets/Images/hospital/hospital4.jpg";
import hospital5 from "../../../assets/Images/hospital/hosptal5.jpg";

export default function PremiumHospitals() {

    const hospitalList = [
        {
            id: 1,
            name: 'National Hospital of Sri Lanka',
            address:'No. 317, Deans Road, Colombo 10, Sri Lanka.',
            imageUrl:hospital1
        },
        {
            id: 2,
            name: 'Lanka Hospitals (Pvt) Ltd',
            address:'No. 578, Elvitigala Mawatha, Colombo 5, Sri Lanka.',
            imageUrl:hospital2
        },
        {
            id: 3,
            name: 'Asiri Hospital Holdings PLC',
            address:'No. 21, Kirimandala Mawatha, Colombo 5, Sri Lanka.',
            imageUrl:hospital3
        },
        {
            id: 4,
            name: 'Durdans Hospital',
            address:'No. 3, Alfred Place, Colombo 3, Sri Lanka.',
            imageUrl:hospital4
        },
        {
            id: 5,
            name: 'Kings Hospital Colombo',
            address:'No. 5, Sri Jayawardenapura Mawatha, Narahenpita, Colombo 5, Sri Lanka.',
            imageUrl:hospital5
        },
    ]

  return (
    <View style={{marginTop:10}}>
      <SubHeading subHeading={'Our Premium Hospitals'} />
      <FlatList 
        data={hospitalList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <HospitalItem hospital={item} />
        )}
      />
    </View>
  )
}