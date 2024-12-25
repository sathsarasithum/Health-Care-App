import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Components/Shared/PageHeader';
import HospitalInfo from '../Components/HospitalDetail/HospitalInfo';
import Colors from '../../assets/Shared/Colors';

const HospitalDetails = () => {
    const [hospital, setHospital] = useState([]);
    const param = useRoute().params;

    useEffect(()=>{
        setHospital(param.hospital)
    },[])
  return hospital&&(
    <View style={{flex:1,backgroundColor:Colors.white}}>
        <View style={{position:'absolute',zIndex:10,margin:25}}>
            <PageHeader title={''}/>
        </View>
        
        <View>
            <Image source={hospital.imageUrl}
                style={{
                    width:'100%',
                    height: 260
                }}
            />
        </View>
        <View style={{marginTop:-20,
            backgroundColor:Colors.white,
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            padding:20
            }}>
            <HospitalInfo hospital={hospital}/>
        </View>
        <View style={{padding:25,alignItems:'center',marginTop:50}}>
            <TouchableOpacity 
                onPress={() => console.log("Clicked")}
                style={{padding:16,
                backgroundColor:Colors.PRIMARY,
                borderRadius:99,
                left:0,
                right:0,
                alignItems:'center',
                margin:10,
                zIndex:20,
                width:Dimensions.get('screen').width*0.7,
                }}>
                    <Text style={{fontSize:17, color:Colors.white}}>Book Appoinment</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default HospitalDetails

const styles = StyleSheet.create({})