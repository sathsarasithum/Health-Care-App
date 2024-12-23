import { View, Text , TextInput} from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../../assets/Shared/Colors';


export default function SearchBar({setSearchText}) {

    const [searchInput,setSearchInput] = useState();

  return (
    <View style={{marginTop:15}}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        gap:5,
        alignItems:'center',
        paddingLeft:6,
        borderWidth:0.6,
        BorderColor:Colors.grey1,
        borderRadius:10,
        height:40


      }}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput placeholder='Search'
            onChangeText={(value)=> setSearchInput(value)}
            onSubmitEditing={()=>setSearchText(searchInput)}
            style={{width:'100%'}}
        />
      </View>
    </View>
  )
}