import { View, Text, Image, Dimensions } from 'react-native'
import React, { useRef, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler'
import slider1 from "../../../assets/Images/banner.jpeg";
import slider2 from "../../../assets/Images/banner2.jpg";
import slider3 from "../../../assets/Images/banner3.jpg";
import slider4 from "../../../assets/Images/banner4.jpg";
import slider5 from "../../../assets/Images/banner5.jpg";

export default function Slider() {
    const sliderList = [
        {
            id:1,
            name:'Slider 1',
            imageUrl:slider1
        },
        {
            id:2,
            name:'Slider 2',
            imageUrl:slider2,
        },
        {
            id:3,
            name:'Slider 2',
            imageUrl:slider3,
        },
        {
            id:4,
            name:'Slider 2',
            imageUrl:slider4,
        },
        {
            id:5,
            name:'Slider 2',
            imageUrl:slider5,
        },

    ]

  const flatListRef = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % sliderList.length;
      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);
  return (
    <View style={{marginTop:10}}>
      <FlatList 
        ref={flatListRef}
        data={sliderList}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index})=>(
            <Image source={
              typeof item.imageUrl === "string"
              ? { uri: item.imageUrl } // Remote image
              : item.imageUrl // Local image
            } 
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