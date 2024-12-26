import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../assets/Shared/Colors";
import img from "./../../assets/Images/img.png";
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Login() {
  const [button, setButton] = useState(1);
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={img} style={styles.appImage} />
      <View
        style={{
          backgroundColor: Colors,
          padding: 25,
          alignItems: "center",
          marginTop: -30,
        }}
      >
        <Text style={styles.heading1}>Welcome to</Text>
        <Text style={styles.heading2}>MediEase</Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 20,
            color: "#37ad96",
            fontSize: 17,
          }}
        >
          Your health, our priority! Easily book appointments with trusted
          hospitals and doctors anytime, anywhere.
        </Text>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            button == 1 ? { backgroundColor: "#37ad96" } : null,
          ]}
          onPress={() => {
            setButton(1);
            navigation.navigate('login-form');
          }}
        >
          <Text
            style={
              ({
                fontSize: 25,
                color: Colors.white,
              },
              button == 1
                ? { color: Colors.SECONDARY, fontWeight: "bold" }
                : null)
            }
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            button == 0 ? { backgroundColor: "#37ad96" } : null,
          ]}
          onPress={() => {
            setButton(0);
            navigation.navigate('register-form',{users});
          }}
        >
          <Text
            style={
              ({
                fontSize: 20,
                color: Colors.white,
              },
              button == 1
                ? { color: Colors.SECONDARY, fontWeight: "bold" }
                : null)
            }
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading1: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    objectFit: "contain",
    color: "#f2542c",
  },
  heading2: {
    marginTop: -10,
    fontSize: 50,
    fontWeight: "bold",
    objectFit: "contain",
    color: Colors.PRIMARY,
  },
  appImage: {
    marginTop: 20,
    width: 400,
    height: 400,
  },
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 16,
    borderRadius: 90,
    alignItems: "center",
    marginTop: 20,
    width: Dimensions.get("screen").width * 0.7,
    borderColor: Colors.grey,
  },
});
