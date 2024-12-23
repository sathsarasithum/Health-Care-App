import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../assets/Shared/Colors';
import img from './../../assets/Images/img.png';

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
        <Image source={img} style={styles.appImage}/>
        <View style={{backgroundColor:Colors, 
        padding:25, 
        alignItems:'center',
        marginTop:-30
        }}>
            <Text style={styles.heading}>Your ULtimate Doctor</Text>
            <Text style={styles.heading}>Appoinment Booking App</Text>
            <Text style={{textAlign:'center', marginTop:20}}>Book Appoinment Effortlessly and manage your healt journey</Text>
            
            <TouchableOpacity 
            onPress={() => console.log("Clicked")}
            style={{padding:16,
            backgroundColor:Colors.PRIMARY,
            borderRadius:90,
            alignItems:'center',
            marginTop:20,
            width:Dimensions.get('screen').width*0.7,
            }}>
                <Text style={{fontSize:17, color:Colors.white}}>Login With Google</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    marginTop:20,
    fontSize:28,
    fontWeight:"bold",
    objectFit:'contain'
  },
  appImage:{
    marginTop:20,
    width:400,
    height:400
  }
});