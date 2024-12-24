import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalDoctorTab from '../Components/HospitalDoctorScreen/HospitalDoctorTab';

const HospitalDoctorListScreen = () => {

  const param = useRoute().params;
  return (
    <View style={{padding:30}}>
       
      <PageHeader title={param?.categoryName}/>
      <HospitalDoctorTab />
    </View>
  )
}

export default HospitalDoctorListScreen

const styles = StyleSheet.create({})