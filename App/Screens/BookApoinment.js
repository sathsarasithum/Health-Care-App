import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import AppoinmentHospitalInfo from '../Components/BookAppoinment/AppoinmentHospitalInfo';
import ActionButton from '../Components/HospitalDetail/ActionButton'
import HorizontalLine from '../Components/Shared/HorizontalLine';
import BookingSection from '../Components/BookAppoinment/BookingSection';

const BookApoinment = () => {
    const param = useRoute().params;
  return (
    <View style={{marginTop:10,padding:17}}>
      <AppoinmentHospitalInfo hospital={param.hospital}/>
      <ActionButton />
      <HorizontalLine />
      <BookingSection />
    </View>
  )
}

export default BookApoinment

const styles = StyleSheet.create({})