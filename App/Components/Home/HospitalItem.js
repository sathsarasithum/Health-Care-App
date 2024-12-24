import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import slider5 from "../../../assets/Images/banner5.jpg";
import Colors from '../../../assets/Shared/Colors';

const HospitalItem = ({hospital}) => {
    
  return (
    <View style={{width:200, borderRadius:10,borderWidth:1,borderColor:Colors.GREY,marginRight:10}}>
      <Image source={hospital.imageUrl} style={{
        width:'100%', height:110, borderTopLeftRadius:10,borderTopRightRadius:10}} />
      <View style={{padding:7}}>
        <Text style={{fontFamily:'appfont-semi', fontSize:16}}>{hospital.name}</Text>
        <Text style={{color:Colors.GREY}}>{hospital.address}</Text>
      </View>
    </View>
  )
}

export default HospitalItem

const styles = StyleSheet.create({})