import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ColorSpace } from "react-native-reanimated";
import Colors from "../../../assets/Shared/Colors";
import HorizontalLine from "../Shared/HorizontalLine";

const AppoinmentHospitalInfo = ({ hospital }) => {
  return (
    <View>
      <PageHeader title={"Book Appoinment"} />
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems:'center'
        }}
      >
        <Image source={hospital.imageUrl} style={{ width: 100, height: 100, borderRadius:10}} />
        <View>
          <Text
            style={{ fontSize: 20, fontFamily: "font-semi", marginBottom: 8 }}
          >
            {hospital.name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              marginTop: 6,
            }}
          >
            <Ionicons name="location" size={20} color={Colors.PRIMARY_GREEN} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "appfont",
                color: Colors.GREY,
                width:'75%'
              }}
            >
              {hospital.address}
            </Text>
          </View>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
};

export default AppoinmentHospitalInfo;

const styles = StyleSheet.create({});
