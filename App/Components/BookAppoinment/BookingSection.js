import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../../assets/Shared/Colors'
import SubHeading from '../Home/SubHeading'
import moment from 'moment'

const BookingSection = () => {

    const [next7Days,setNext7Days] = useState([]);

    useEffect(()=>{
        getDays();
    },[])

    const getDays = () =>{
        const today = moment();
        const nextSevenDays = [];
        for (let i=0; i<7; i++){
            const date= moment().add(i, 'days');
            nextSevenDays.push({
                date:date.add(i,'days'),
                day:date.format('ddd'), //Tue, Mon
                formmatedDate:date.format('Do MMM') //8th Dec
            })
        }
        setNext7Days(nextSevenDays);
        console.log(nextSevenDays);
    }
  return (
    <View>
      <Text style={{fontSize:18,
        color:Colors.G
      }}>Book Appoinment</Text>

      <SubHeading subHeading={'Day'} seeAll={false}/>

      <FlatList 
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity style={styles.dayButton}>
                <Text style={{
                    fontFamily:'apfont'
                    }}>{item.day}</Text>
                <Text style={{
                    fontFamily:'appfont-semi',
                    fontSize:16
                }}>{item.formmatedDate}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default BookingSection

const styles = StyleSheet.create({
    dayButton:{
        borderWidth:1,
        borderRadius:99,
        padding:5,
        paddingHorizontal:20,
        alignItems:'center',
        marginRight:10,
        borderColor:Colors.grey,
    }
})