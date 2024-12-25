import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import PageHeader from "../Components/Shared/PageHeader";
import Colors from "../../assets/Shared/Colors";
import Feather from '@expo/vector-icons/Feather';
import Icon from 'react-native-vector-icons/Feather';

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
  return (
    <View style={{ marginTop: 10, padding: 17 }}>
      <PageHeader />
      <View style={{marginTop:120,marginLeft:20,marginRight:10}}>
        <Text style={{ fontSize: 35, color:Colors.PRIMARY, fontWeight:'bold'}}>Welcome Back ! Glad</Text>
        <Text style={{ fontSize: 35, color:Colors.PRIMARY,fontWeight:'bold' }}>See You Again</Text>
        <TextInput
                multiline={true}
                placeholder="Enter Your Email"
                style={{
                  backgroundColor: Colors.LIGHT_GRAY,
                  marginTop:20,
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
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color="gray" />
            </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
    inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20,
  },
  input: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc', 
    borderWidth: 1,
    height: 45,
    flex: 1, 
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});
