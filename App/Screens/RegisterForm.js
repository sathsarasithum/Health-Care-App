import { StyleSheet, Text, View,TextInput, TouchableOpacity, Dimensions,} from "react-native";
import React, { useState } from "react";
import PageHeader from "../Components/Shared/PageHeader";
import Colors from "../../assets/Shared/Colors";
import { Picker } from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/Feather";

const RegisterForm = () => {

    const [sex, setSex] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

  return (
    <View style={{ marginTop: 10, padding: 17 }}>
        <PageHeader />
        <View style={{ marginTop: 20, marginLeft: 20, marginRight: 10,  }}>
            <Text style={{ fontSize: 35, color: Colors.PRIMARY, fontWeight: "bold" }}>Hello!  Register to get</Text>
            <Text style={{ fontSize: 35, color: Colors.PRIMARY, fontWeight: "bold" }}>Started 👋😊</Text>
            <TextInput
                      multiline={true}
                      placeholder="First Name"
                      style={{
                        backgroundColor: Colors.LIGHT_GRAY,
                        marginTop: 20,
                        padding: 10,
                        borderRadius: 10,
                        borderColor: "#ccc",
                        borderWidth: 1,
                        height: 45,
                        textAlignVertical: "top",
                      }}
            />
            <TextInput
                      multiline={true}
                      placeholder="Last Name"
                      style={{
                        backgroundColor: Colors.LIGHT_GRAY,
                        marginTop: 20,
                        padding: 10,
                        borderRadius: 10,
                        borderColor: "#ccc",
                        borderWidth: 1,
                        height: 45,
                        textAlignVertical: "top",
                      }}
            />
            <TextInput
                      multiline={true}
                      placeholder="Age"
                      style={{
                        backgroundColor: Colors.LIGHT_GRAY,
                        marginTop: 20,
                        padding: 10,
                        borderRadius: 10,
                        borderColor: "#ccc",
                        borderWidth: 1,
                        height: 45,
                        textAlignVertical: "top",
                      }}
            />

             {/* Sex Selection */}
            <View style={{ marginTop: 20, borderRadius:10, overflow: 'hidden',borderColor: "#ccc", }}>
                {/* <Text style={{ fontSize: 18, color: Colors.PRIMARY }}>Sex</Text> */}
                <Picker
                    selectedValue={sex}
                    style={{
                    height: 50,
                    backgroundColor: Colors.LIGHT_GRAY,
                    borderRadius: 20,
                    
                    borderWidth: 1,
                    borderColor: Colors.SECONDARY_COLOR,
                    }}
                    onValueChange={(itemValue) => setSex(itemValue)}
                >
                    <Picker.Item label="Select Sex" value="" style={{ color: 'gray' }}/>
                    <Picker.Item label="Male" value="male" style={{ color: 'gray' }}/>
                    <Picker.Item label="Female" value="female" style={{ color: 'gray' }}/>
                </Picker>
            </View>

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

            <View style={styles.inputContainer}>
                      <TextInput
                        placeholder="Confirm Your Password"
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

            <View style={{alignItems:'center', marginTop:20}}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        backgroundColor: Colors.PRIMARY,
                        borderRadius: 99,
                        padding: 16,
                        borderRadius: 90,
                        alignItems: "center",
                        marginTop: 10,
                        width: Dimensions.get("screen").width * 0.7,
                        borderColor: Colors.grey,
                    }}
                        //   onPress={() => {
                        //     navigation.navigate('login-form');
                        //   }}
                >
                    <Text style={{fontSize:18, fontWeight:'600', color:Colors.white}}>Register</Text>
                </TouchableOpacity>
            </View>

            {/* Continue With Google Button */}

            <View style={{alignItems:'center', marginTop:10}}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        backgroundColor: Colors.LIGHT_GRAY,
                        borderRadius: 99,
                        padding: 16,
                        borderRadius: 90,
                        alignItems: "center",
                        marginTop: 10,
                        width: Dimensions.get("screen").width * 0.7,
                        borderColor: Colors.grey,
                    }}
                        
                >
                    <Text style={{fontSize:18, fontWeight:'600', color:Colors.SECONDARY}}>Continue With Google</Text>
                </TouchableOpacity>
            </View>

            <View style={{display:'flex',marginTop:10, alignItems:'center', flexDirection:'row', padding:10,paddingLeft:75,}}>
                <Text>Already have an account? </Text>
                <TouchableOpacity><Text style={{color:Colors.PRIMARY}}>Log In</Text></TouchableOpacity>
            </View>

        </View>
        
    </View>
  );
};

export default RegisterForm;

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
