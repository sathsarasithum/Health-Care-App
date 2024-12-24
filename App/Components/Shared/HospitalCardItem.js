import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const HospitalCardItem = ({ hospital }) => {
  return (
    <View style={{borderRadius:10, marginBottom:20}}>
      {/* <Text>{hospital.name}</Text> */}
      <Image
        source={hospital.imageUrl}
        style={{
          width: "100%",
          height: 140,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{ padding: 18, backgroundColor: Colors.white }}>
        <Text style={{ fontSize: 18 }}>{hospital.name}</Text>
        <FlatList
          data={hospital.categories}
          horizontal={true}
          renderItem={({ item }) => (
            <Text style={{ marginRight: 10, color: Colors.GREY }}>
              {item.name}
            </Text>
          )}
        />
        <View
          style={{
            borderBottomEndRadius: 1,
            borderColor: Colors.LIGHT_GRAY,
            margin: 5,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
            }}
          >
            <Ionicons name="location" size={20} color={Colors.PRIMARY_GREEN} />
            <Text>{hospital.address}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Ionicons name="eye" size={24} color={Colors.ORANGE} />
            <Text>964 Views</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HospitalCardItem;

const styles = StyleSheet.create({});
