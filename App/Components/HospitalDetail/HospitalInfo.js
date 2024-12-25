import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Colors from '../../../assets/Shared/Colors'
import Ionicons from "@expo/vector-icons/Ionicons";
import ActionButton from './ActionButton';
import SubHeading from '../Home/SubHeading';
import { ScrollView } from 'react-native-gesture-handler';

const HospitalInfo = ({hospital}) => {
  return hospital&&(
    <View>
        <Text style={{
            fontSize:23,
            fontFamily:'appfont-semi',
            fontWeight:'bold'
        }}>{hospital.name}</Text>
        <FlatList
                data={hospital.categories}
                horizontal={true}
                renderItem={({ item }) => (
                  <Text style={{ marginRight: 10, color: Colors.GREY }}>
                    {item.name}
                  </Text>
                )}
        />
        <View style={{
            borderBottomWidth: 1,
            borderColor: Colors.grey1,
            margin: 5,
            marginBottom: 10,
            marginTop:10
            }}></View>
        <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              marginTop:6
            }}
          >
            <Ionicons name="location" size={20} color={Colors.PRIMARY_GREEN} />
            <Text style={{fontSize:16, fontFamily:'appfont', color:Colors.GREY}}>{hospital.address}</Text>
        </View>
        <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              marginTop:6
            }}
          >
            <Ionicons name="time" size={20} color={Colors.BLUE} />
            <Text style={{fontSize:16, fontFamily:'appfont', color:Colors.GREY}}>Mon Sun | 11AM -8PM</Text>
        </View>

        {/* Actiin Button */}

        <ActionButton />
        <View style={{
            borderBottomWidth: 1,
            borderColor: Colors.grey1,
            margin: 5,
            marginBottom: 10,
            marginTop:10
            }}>
        </View>

        <SubHeading subHeading={'About'}/>
        <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{maxHeight: 140,}}>
            <Text style={{lineHeight: 20}}>{hospital.description}</Text>
        </ScrollView>
        
            
    </View>
    
  )
}

export default HospitalInfo

const styles = StyleSheet.create({})