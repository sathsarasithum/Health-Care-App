import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Colors from '../../../assets/Shared/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const ActionButton = () => {
    const actionButtonList = [
        {
            id: 1,
            name: 'Website',
            icon: 'earth'
        },
        {
            id: 2,
            name: 'Email',
            icon: 'mail'
        },
        {
            id: 3,
            name: 'Phone',
            icon: 'call'
        },
        {
            id: 4,
            name: 'Direction',
            icon: 'location-sharp'
        },
        {
            id: 5,
            name: 'Share',
            icon: 'share-social-sharp'
        },
    ]
  return (
    <View style={{marginTop:15}}>
      <FlatList 
        data={actionButtonList}
        columnWrapperStyle={{
            flex:1,
            justifyContent:'space-between'
        }}
        numColumns={5}
        renderItem={({item})=>(
            <TouchableOpacity
                onPress={()=> console.log(item.name)}
                style={{alignItems:'center'}}
            >
                <View style={{
                    backgroundColor:Colors.SECONDARY_COLOR,
                    padding:13,
                    borderRadius:99,
                    alignItems:'center',
                    width:51
                    }}>
                    <Ionicons name={item.icon} size={20} color={Colors.PRIMARY} />
                    
                </View>
                <Text style={{fontWeight:500, color:Colors.Dark_Charcoal}}>{item.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ActionButton

const styles = StyleSheet.create({})