import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HospitalCardItem from '../Shared/HospitalCardItem'
import { useNavigation } from '@react-navigation/native'

const HospitalListBig = ({hospitalList}) => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop:15}}>
      <FlatList 
        data={hospitalList}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('hospital-detail',{
              hospital:item
            })}>
                <HospitalCardItem hospital={item}/>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default HospitalListBig

const styles = StyleSheet.create({})