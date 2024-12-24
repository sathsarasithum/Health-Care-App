import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HospitalCardItem from '../Shared/HospitalCardItem'

const HospitalListBig = ({hospitalList}) => {
  return (
    <View style={{marginTop:10}}>
      <FlatList 
        data={hospitalList}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity>
                <HospitalCardItem hospital={item}/>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default HospitalListBig

const styles = StyleSheet.create({})