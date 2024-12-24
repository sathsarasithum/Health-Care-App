import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function Slider() {
    const sliderList = [
        {
            id:1,
            name:'Slider 1',
            imageUrl:'https://via.placeholder.com/150'
        },
        {
            id:2,
            name:'Slider 2',
            imageUrl:'https://via.placeholder.com/150',
        },

    ]
  return (
    <View style={{marginTop:10}}>
      <FlatList 
        data={sliderList}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <Image source={{uri:item.imageUrl}} 
            style={{ 
              width: Dimensions.get('screen').width*0.9,
              height: 170, 
              marginBottom: 10,
              borderRadius:10 
              }}
                
            />
            
        )}
      />
    </View>
  )
}