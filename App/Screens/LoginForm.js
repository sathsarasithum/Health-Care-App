import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import PageHeader from "../Components/Shared/PageHeader";
import Colors from "../../assets/Shared/Colors";
import Feather from "@expo/vector-icons/Feather";
import Icon from "react-native-vector-icons/Feather";
import { Formik } from 'formik';  
import * as Yup from 'yup'; 

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={{ marginTop: 10, padding: 17 }}>
      <PageHeader />
      <View style={{ marginTop: 120, marginLeft: 20, marginRight: 10 }}>
        <Text
          style={{ fontSize: 35, color: Colors.PRIMARY, fontWeight: "bold" }}
        >
          Welcome Back ! Glad
        </Text>
        <Text
          style={{ fontSize: 35, color: Colors.PRIMARY, fontWeight: "bold" }}
        >
          See You Again
        </Text>
        <TextInput
          multiline={true}
          placeholder="Enter Your Email"
          style={{
            backgroundColor: Colors.LIGHT_GRAY,
            marginTop: 20,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.SECONDARY_COLOR,
            borderWidth: 1,
            height: 45,
            textAlignVertical: "top",
          }}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter Your Password"
            secureTextEntry={!isPasswordVisible}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.icon}
          >
            <Icon
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 7,
          }}
        >
          <TouchableOpacity>
            <Text style={{ color: Colors.PRIMARY }}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', marginTop:20}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 99,
              padding: 16,
              borderRadius: 90,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.7,
              borderColor: Colors.grey,
            }}
            //   onPress={() => {
            //     navigation.navigate('login-form');
            //   }}
          >
            <Text style={{fontSize:18, fontWeight:'600', color:Colors.white}}>Login</Text>
          </TouchableOpacity>
        </View>

        
        <View style={{alignItems:'center', marginTop:60, paddingLeft:8}}>
            <Text style={{color:Colors.GREY, fontWeight:'600'}}>Or</Text>
        </View>

        <View style={{alignItems:'center', marginTop:20}}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              backgroundColor: Colors.LIGHT_GRAY,
              borderRadius: 99,
              padding: 16,
              borderRadius: 90,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.7,
              borderColor: Colors.grey,
            }}
            //   onPress={() => {
            //     navigation.navigate('login-form');
            //   }}
          >
            <Text style={{fontSize:18, fontWeight:'600', color:Colors.SECONDARY}}>Continue With Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{display:'flex',marginTop:10, alignItems:'center', flexDirection:'row', padding:10,paddingLeft:75,}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity><Text style={{color:Colors.PRIMARY}}>Register</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    height: 45,
    flex: 1,
  },
  icon: {
    position: "absolute",
    right: 10,
  },
});
