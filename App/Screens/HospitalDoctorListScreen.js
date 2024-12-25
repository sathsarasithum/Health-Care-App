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
    description: 'As the largest and oldest hospital in Sri Lanka, the National Hospital of Sri Lanka (NHSL) is a government-run institution renowned for its extensive range of healthcare services. Established in the 19th century, it serves as a primary referral center for the entire country. NHSL houses over 3,000 beds and offers services including general medicine, emergency care, specialized surgical units, and advanced neurology and cardiology treatments.The hospital is also a key teaching institution, training medical professionals from across Sri Lanka.',
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
    description: 'Renowned as one of the leading private hospitals in Sri Lanka, Lanka Hospitals offers world-class services in a comfortable and efficient environment. It is particularly celebrated for its pediatric care, making it a trusted choice for families. With state-of-the-art facilities and a dedicated team of healthcare professionals, Lanka Hospitals excels in areas such as dentistry, orthopedics, and specialized pediatrics, ensuring top-notch care tailored to patients’ needs.',
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
    description: 'Known for its emphasis on patient comfort and care, Durdans Hospital offers a serene environment for treatment. Its specialized departments in neurology, dermatology, and psychiatry attract patients seeking holistic and empathetic medical services. The hospital combines modern facilities with a patient-first approach, ensuring a comfortable and healing experience for all visitors.',
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
    description: 'Kings Hospital stands as a symbol of modern medical excellence. With a strong focus on cardiology, surgical care, and ENT (ear, nose, throat) treatments, it provides high-quality healthcare services to its patients. The hospital is equipped with world-class infrastructure and an experienced medical team, ensuring optimal outcomes for a wide range of medical needs. Patients appreciate its dedication to providing personalized and compassionate care.',
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
    <View style={{padding:19}}>
       
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