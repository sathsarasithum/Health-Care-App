import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import userImage from "../../../assets/Images/user1.png";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
  // const {isLoaded,isSignIn, user} = useUser();
  // if(!isLoaded||isSignIn){
  //     return null;
  // }

  const user1 = "Sathsara";
  return (
    <View style={{display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:10}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 7,
          alignItems: "center",
        }}
      >
        <Image source={userImage} style={styles.user1} />

        <View>
          <Text style={{fontFamily:'appfont'}}>Hello, 👋</Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              fontFamily:'appfont-bold'
            }}
          >
            {user1}
          </Text>
        </View>
      </View>
      <Ionicons name="notifications" 
      size={28} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  user1: {
    width: 40,
    height: 40,
    borderRadius: 90,
  },
});
