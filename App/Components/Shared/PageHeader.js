import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

    
const PageHeader = ({title}) => {
    const navigation = useNavigation();
  return (
    <View style={{display:'flex', flexDirection:'row',gap:5, alignItems:'center',paddingRight:10}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons  name="arrow-back-circle-outline" size={37} color="black" />
        </TouchableOpacity>
        
        <Text style={{fontSize:25,fontFamily:'appfont-semi'}}>{title}</Text>
    </View>
  )
}

export default PageHeader

const styles = StyleSheet.create({})