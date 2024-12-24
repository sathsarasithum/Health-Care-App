import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';

const HospitalDoctorListScreen = () => {

  const param = useRoute().params;
  return (
    <View style={{padding:30}}>
      <Text>{param?.categoryName}</Text>
      <PageHeader title={param?.categoryName}/>
    </View>
  )
}

export default HospitalDoctorListScreen

const styles = StyleSheet.create({})