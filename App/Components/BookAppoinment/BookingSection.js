import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "../Home/SubHeading";
import moment from "moment";
import PageHeader from "../Shared/PageHeader";
import { useNavigation, useRoute } from '@react-navigation/native'

const BookingSection = () => {
  const [next7Days, setNext7Days] = useState([]);
  const [timeList, setTimeList] = useState([]);

  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    getDays();
    getTime();
  }, []);

  const getDays = () => {
    const today = moment();
    const nextSevenDays = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, "days");
      nextSevenDays.push({
        date: date,
        day: date.format("ddd"), //Tue, Mon
        formmatedDate: date.format("Do MMM"), //8th Dec
      });
    }
    setNext7Days(nextSevenDays);
    console.log(nextSevenDays);
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    console.log(timeList);
    setTimeList(timeList);
  };

  return (
    <View>
      <Text style={{ fontSize: 18, color: Colors.GREY }}>Book Appoinment</Text>

      <SubHeading subHeading={"Day"} seeAll={false} />

      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              selectedDate == item.date
                ? { backgroundColor: Colors.RED }
                : null,
            ]}
            onPress={() => setSelectedDate(item.date)}
          >
            <Text
              style={[
                {
                  fontFamily: "apfont",
                },
                selectedDate == item.date ? { color: Colors.white } : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                {
                  fontFamily: "appfont-semi",
                  fontSize: 16,
                  fontWeight: "bold",
                },
                selectedDate == item.date ? { color: Colors.white } : null,
              ]}
            >
              {item.formmatedDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeading={"Time"} seeAll={false} />
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.dayButton,
              { paddingVertical: 16 },
              selectedTime == item.time
                ? { backgroundColor: Colors.RED }
                : null,
            ]}
            onPress={() => setSelectedTime(item.time)}
          >
            <Text
              style={[
                {
                  fontFamily: "appfont-semi",
                  fontSize: 16,
                  fontWeight: "bold",
                },
                selectedTime == item.time ? { color: Colors.white } : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
      <SubHeading subHeading={"Note"} seeAll={false} />
      <TextInput
        multiline={true}
        placeholder="Write Notes Here..."
        style={{
          backgroundColor: Colors.LIGHT_GRAY,
          padding: 10,
          borderRadius: 10,
          borderColor: Colors.SECONDARY_COLOR,
          borderWidth: 1,
          height: 60,
          textAlignVertical: "top",
        }}
      />
      <View style={{marginTop:20, marginLeft:50}}>
        <TouchableOpacity
          onPress={() =>
            {
            console.log('Clicked');
            navigation.navigate('login-form');
          }
          }
          style={{
            padding: 16,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 99,
            left: 0,
            right: 0,
            alignItems: "center",
            margin: 10,
            zIndex: 20,
            width: Dimensions.get("screen").width * 0.6,
          }}
        >
          <Text style={{ fontSize: 17, color: Colors.white, fontWeight:'700' }}>
            Make Appoinment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingSection;

const styles = StyleSheet.create({
  dayButton: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
    borderColor: Colors.grey,
  },
});
