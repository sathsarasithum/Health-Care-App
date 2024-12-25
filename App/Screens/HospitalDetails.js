import { StyleSheet, Text, View, Image } from 'react-native'
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
    <View style={{marginTop:50}}>
        <View style={{position:'absolute',zIndex:10,margin:15}}>
            <PageHeader title={hospital.name}/>
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
        <Text>{hospital.name}</Text>
    </View>
  )
}

export default HospitalDetails

const styles = StyleSheet.create({})