import { StyleSheet, Text, View,TextInput, TouchableOpacity, Dimensions,Image, ScrollView,} from "react-native";
import React, { useState } from "react";
import PageHeader from "../Components/Shared/PageHeader";
import Colors from "../../assets/Shared/Colors";
import { Picker } from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/Feather";
import google2 from '../../assets/Images/google/google2.png'
import { Formik } from 'formik';  
import * as Yup from 'yup'; 


    const validationSchema = Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        age: Yup.number()
        .required("Age is required")
        .min(1, "Age must be greater than 0")
        .typeError("Age must be a number"),
        sex: Yup.string().required("Please select your gender"),
        password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    });

const RegisterForm = () => {

    const [sex, setSex] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        sex: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Submitted", values);
      }}
    >{({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
    }) =>(<View style={{ marginTop: 10, padding: 17 }}>
        <PageHeader />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 10, marginLeft: 20, marginRight: 10,  }}>
                <Text style={{ fontSize: 35, color: Colors.PRIMARY, fontWeight: "bold" }}>Hello!  Register to get</Text>
                <Text style={{ fontSize: 35, color: Colors.PRIMARY, fontWeight: "bold" }}>Started 👋😊</Text>
                <TextInput
                        multiline={true}
                        placeholder="First Name"
                        style={{
                            backgroundColor: Colors.LIGHT_GRAY,
                            marginTop: 10,
                            padding: 10,
                            borderRadius: 10,
                            borderColor: errors.firstName && touched.firstName ? "red" : "#ccc",
                            borderWidth: 1,
                            height: 45,
                            textAlignVertical: "top",
                        }}
                            onChangeText={handleChange("firstName")}
                            onBlur={handleBlur("firstName")}
                            value={values.firstName}
                />

                {touched.firstName && errors.firstName && (
                <Text style={{ color: "red", marginTop: 5 }}>{errors.firstName}</Text>
                )}
                <TextInput
                        multiline={true}
                        placeholder="Last Name"
                        style={{
                            backgroundColor: Colors.LIGHT_GRAY,
                            marginTop: 10,
                            padding: 10,
                            borderRadius: 10,
                            borderColor: errors.lastName && touched.lastName ? "red" : "#ccc",
                            borderWidth: 1,
                            height: 45,
                            textAlignVertical: "top",
                        }}
                            onChangeText={handleChange("lastName")}
                            onBlur={handleBlur("lastName")}
                            value={values.lastName}
                />
                {touched.lastName && errors.lastName && (
                    <Text style={{ color: "red", marginTop: 5 }}>{errors.lastName}</Text>
                )}
                <TextInput
                        multiline={true}
                        placeholder="Age"
                        style={{
                            backgroundColor: Colors.LIGHT_GRAY,
                            marginTop: 10,
                            padding: 10,
                            borderRadius: 10,
                            borderColor: errors.age && touched.age ? "red" : "#ccc",
                            borderWidth: 1,
                            height: 45,
                            textAlignVertical: "top",
                        }}
                            onChangeText={handleChange("age")}
                            onBlur={handleBlur("age")}
                            value={values.age}
                />
                {touched.age && errors.age && (
                    <Text style={{ color: "red", marginTop: 5 }}>{errors.age}</Text>
                )}

                {/* Sex Selection */}
                <View style={{ marginTop: 10, borderRadius:10, overflow: 'hidden',borderColor: "#ccc", }}>
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
                {touched.sex && errors.sex && (
                    <Text style={{ color: "red", marginTop: 5 }}>{errors.sex}</Text>
                )}

                <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Enter Your Password"
                            secureTextEntry={!isPasswordVisible}
                            style={[
                                styles.input,
                                {
                                    borderColor: errors.password && touched.password ? "red" : "#ccc",
                                },
                            ]}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
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
                {touched.password && errors.password && (
                    <Text style={{ color: "red", marginTop: 5 }}>{errors.password}</Text>
                )}

                <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Confirm Your Password"
                            secureTextEntry={!isPasswordVisible}
                            style={[
                                styles.input,
                                {
                                    borderColor: errors.confirmPassword && touched.confirmPassword ? "red" : "#ccc",
                                },
                            ]}
                            onChangeText={handleChange("confirmPassword")}
                            onBlur={handleBlur("confirmPassword")}
                            value={values.confirmPassword}
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
                {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={{ color: "red", marginTop: 5 }}>{errors.confirmPassword}</Text>
                )}

                <View style={{alignItems:'center', marginTop:10}}>
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
                            paddingLeft:40,
                            padding: 16,
                            borderRadius: 90,
                            alignItems: "center",
                            marginTop: 10,
                            width: Dimensions.get("screen").width * 0.7,
                            borderColor: Colors.grey,
                            display:'flex',
                            flexDirection:'row',
                            gap:10
                        }}
                            
                    >
                        <Image source={google2} style={{width:20, height:20}}/>
                        <Text style={{fontSize:18, fontWeight:'600', color:Colors.SECONDARY}}>Continue With Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{display:'flex',marginTop:10, alignItems:'center', flexDirection:'row', padding:10,paddingLeft:75,}}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity><Text style={{color:Colors.PRIMARY}}>Log In</Text></TouchableOpacity>
                </View>

            </View>
        </ScrollView>
        
        
    </View>

    )}

    </Formik>
    
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
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
