import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "../Components/Shared/PageHeader";
import Colors from "../../assets/Shared/Colors";
import Feather from "@expo/vector-icons/Feather";
import Icon from "react-native-vector-icons/Feather";
import { Formik } from 'formik';  
import * as Yup from 'yup'; 
import google1 from '../../assets/Images/google/google1.png'
import google2 from '../../assets/Images/google/google2.png'
import { useNavigation, useRoute } from '@react-navigation/native'

const LoginForm = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const route = useRoute();


  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    const { usersArray } = route.params || {};  // Fetch users from params
    if (usersArray) {
        setUsers(usersArray); // Set users if passed
    }
    console.log(users)
}, [route.params]);

  const handleLogin = () => {

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    // Log the email to check what is being entered
    console.log("Entered Email:", trimmedEmail);
    console.log("Entered Password:", trimmedPassword);

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
        Alert.alert("Error", "Please enter your email.");
        return;
    }
    if (!emailPattern.test(trimmedEmail)) {
        Alert.alert("Error", "Please enter a valid email.");
        return; 
    }

    // Check if password is provided
    if (!password) {
        Alert.alert("Error", "Please enter your password.");
        return; 
    }

    // Check if the user already exists
    const existingUser = users.find(user => user.email === trimmedEmail);

    if (existingUser) {
        Alert.alert("Error", "User already exists. Please log in.");
        navigation.navigate('Main',{ user: existingUser });
    } else {
        
        Alert.alert("Error", "User not exists. Please enter corect Email and Password");

    }
    };



  console.log(users)


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
          value={email}
          onChangeText={(text) => setEmail(text)}
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
            value={password}
            placeholder="Enter Your Password"
            onChangeText={(text) => setPassword(text)}
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
            // onPress={()=>navigation.navigate('home')}
            onPress={handleLogin}
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
              paddingLeft:40,
              padding: 16,
              borderRadius: 90,
              alignItems: "center",
              marginTop: 20,
              width: Dimensions.get("screen").width * 0.7,
              borderColor: Colors.grey,
              display:'flex',
              flexDirection:'row',
              gap:10
            }}
            //   onPress={() => {
            //     navigation.navigate('login-form');
            //   }}
          >
            <Image source={google2} style={{width:20, height:20}}/>
            <Text style={{fontSize:18, fontWeight:'600', color:Colors.SECONDARY}}>Continue With Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{display:'flex',marginTop:10, alignItems:'center', flexDirection:'row', padding:10,paddingLeft:75,}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('register-form',{ users })}><Text style={{color:Colors.PRIMARY}}>Register</Text></TouchableOpacity>
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
