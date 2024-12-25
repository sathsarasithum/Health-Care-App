import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorScreen/HospitalDoctorTab';
import HospitalListBig from '../Components/HospitalDoctorScreen/HospitalListBig';
import Colors from '../../assets/Shared/Colors';
import hospital1 from "../../assets/Images/hospital/hospital1.jpg";
import hospital2 from "../../assets/Images/hospital/hospital2.jpg";
import hospital3 from "../../assets/Images/hospital/hospital3.jpg";
import hospital4 from "../../assets/Images/hospital/hospital4.jpg";
import hospital5 from "../../assets/Images/hospital/hosptal5.jpg";

const HospitalDoctorListScreen = () => {

// const hospitalList = [
//   {
//     id: 1,
//     name: 'National Hospital of Sri Lanka',
//     address: 'No. 317, Deans Road, Colombo 10, Sri Lanka.',
//     imageUrl: hospital1,
//     categories: [
//       { id: 1, name: 'General' },
//       { id: 2, name: 'Cardiology' },
//       { id: 3, name: 'Neurology' }
//     ]
//   },
//   {
//     id: 2,
//     name: 'Lanka Hospitals (Pvt) Ltd',
//     address: 'No. 578, Elvitigala Mawatha, Colombo 5, Sri Lanka.',
//     imageUrl: hospital2,
//     categories: [
//       { id: 1, name: 'Dentist' },
//       { id: 2, name: 'Pediatrics' },
//       { id: 3, name: 'Orthopedics' }
//     ]
//   },
//   {
//     id: 3,
//     name: 'Asiri Hospital Holdings PLC',
//     address: 'No. 21, Kirimandala Mawatha, Colombo 5, Sri Lanka.',
//     imageUrl: hospital3,
//     categories: [
//       { id: 1, name: 'Cardiology' },
//       { id: 2, name: 'Oncology' },
//       { id: 3, name: 'Radiology' }
//     ]
//   },
//   {
//     id: 4,
//     name: 'Durdans Hospital',
//     address: 'No. 3, Alfred Place, Colombo 3, Sri Lanka.',
//     imageUrl: hospital4,
//     categories: [
//       { id: 1, name: 'Neurology' },
//       { id: 2, name: 'Dermatology' },
//       { id: 3, name: 'Psychiatry' }
//     ]
//   },
//   {
//     id: 5,
//     name: 'Kings Hospital Colombo',
//     address: 'No. 5, Sri Jayawardenapura Mawatha, Narahenpita, Colombo 5, Sri Lanka.',
//     imageUrl: hospital5,
//     categories: [
//       { id: 1, name: 'Cardiology' },
//       { id: 2, name: 'Surgery' },
//       { id: 3, name: 'ENT' }
//     ]
//   }
// ];
const hospitalList = [
  {
    id: 1,
    name: 'National Hospital of Sri Lanka',
    address: 'No. 317, Deans Road, Colombo 10, Sri Lanka.',
    imageUrl: hospital1,
    description: 'The largest and most comprehensive hospital in Sri Lanka, providing a wide range of medical services including emergency care, general treatments, and specialized clinics.',
    categories: [
      { id: 1, name: 'General' },
      { id: 2, name: 'Cardiology' },
      { id: 3, name: 'Neurology' }
    ]
  },
  {
    id: 2,
    name: 'Lanka Hospitals (Pvt) Ltd',
    address: 'No. 578, Elvitigala Mawatha, Colombo 5, Sri Lanka.',
    imageUrl: hospital2,
    description: 'A leading private hospital known for its state-of-the-art facilities, exceptional pediatric care, and a variety of specialized medical services.',
    categories: [
      { id: 1, name: 'Dentist' },
      { id: 2, name: 'Pediatrics' },
      { id: 3, name: 'Orthopedics' }
    ]
  },
  {
    id: 3,
    name: 'Asiri Hospital Holdings PLC',
    address: 'No. 21, Kirimandala Mawatha, Colombo 5, Sri Lanka.',
    imageUrl: hospital3,
    description: 'One of the most advanced hospitals in Colombo, offering cutting-edge treatments in cardiology, oncology, and radiology, with highly skilled medical professionals.',
    categories: [
      { id: 1, name: 'Cardiology' },
      { id: 2, name: 'Oncology' },
      { id: 3, name: 'Radiology' }
    ]
  },
  {
    id: 4,
    name: 'Durdans Hospital',
    address: 'No. 3, Alfred Place, Colombo 3, Sri Lanka.',
    imageUrl: hospital4,
    description: 'Renowned for its patient-centered care, Durdans Hospital specializes in neurology, dermatology, and psychiatry, providing a comfortable environment for treatment.',
    categories: [
      { id: 1, name: 'Neurology' },
      { id: 2, name: 'Dermatology' },
      { id: 3, name: 'Psychiatry' }
    ]
  },
  {
    id: 5,
    name: 'Kings Hospital Colombo',
    address: 'No. 5, Sri Jayawardenapura Mawatha, Narahenpita, Colombo 5, Sri Lanka.',
    imageUrl: hospital5,
    description: 'A modern facility offering world-class medical care with a focus on cardiology, surgery, and ENT treatments, ensuring high-quality service for all patients.',
    categories: [
      { id: 1, name: 'Cardiology' },
      { id: 2, name: 'Surgery' },
      { id: 3, name: 'ENT' }
    ]
  }
];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
    }, 500); // 500ms delay before rendering the ActivityIndicator

    return () => clearTimeout(timer); // Clean up the timeout on component unmount
  }, []);

  const param = useRoute().params;
  const [activeTab, setActiveTab] = useState('Hospital');
  return (
    <View style={{padding:30}}>
       
      <PageHeader title={param?.categoryName}/>
      <HospitalDoctorTab activeTab={(value)=>setActiveTab(value)}/>

      {hospitalList.length === 0 ? (
        <ActivityIndicator size={'large'} color={Colors.PRIMARY} 
          style={{marginTop:'50%'}} 
        />
      ) :
      activeTab=='Hospital'? 
        <HospitalListBig hospitalList={hospitalList} />
        :
        
        <Text>Doctors List</Text> //add doctor list component
      }
      
    </View>
  )
}

export default HospitalDoctorListScreen

const styles = StyleSheet.create({})