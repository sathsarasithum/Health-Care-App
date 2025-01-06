import { View, Text, Image, Dimensions, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import dentist from "../../../assets/Images/Dentist.png";
import cardiologist from "../../../assets/Images/Cardiologist.png";
import neurologist from "../../../assets/Images/Neurologist.png";
import orthopedic from "../../../assets/Images/Orthopedic.png";
import otology from "../../../assets/Images/Otology.png";
import SubHeading from "./SubHeading";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {

  const categoryList = [
    {
        id:1,
        name:'Cardiologist',
        imageUrl:cardiologist
    },
    {
        id:2,
        name:'Dentist',
        imageUrl:dentist,        
    },
    {
      id:3,
        name:'Neurologist',
        imageUrl:neurologist,
    },
    {
        id:4,
        name:'Orthopedic',
        imageUrl:orthopedic,
    },
    {
        id:5,
        name:'Otology',
        imageUrl:otology,
    }

]

  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 10 }}>
      <SubHeading subHeading={'Doctor Specialist'}/>

      <FlatList 
              data={categoryList}
              keyExtractor={(item) => item.id.toString()}
              // horizontal={true}
              numColumns={4}
              style={{marginTop:5}}
              columnWrapperStyle={{
                flex:1,
                justifyContent:'space-between'
              }}
              renderItem={({item, index})=>index<4&&(
                  <TouchableOpacity 
                  onPress={()=>navigation.navigate('hospital-doctor-list-screen',
                  {
                    categoryName:item.name
                  })}


                  style={{alignItems:'center',marginBottom:10}}>
                    <View style={{
                      backgroundColor:Colors.SECONDARY_COLOR,
                      padding:15,borderRadius:99
                      }}>
                      <Image 
                        source={
                          typeof item.imageUrl === "string"
                          ? { uri: item.imageUrl } // Remote image
                          : item.imageUrl // Local image
                        } 
                         style={{
                          width:30,
                          height:30
                         }} 
                        />
                    </View>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
              )}
            />
    </View>
  );
}
