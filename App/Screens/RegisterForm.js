import { StyleSheet, Text, View,TextInput, TouchableOpacity, Dimensions,Image, ScrollView,} from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "../Components/Shared/PageHeader";
import Colors from "../../assets/Shared/Colors";
import { Picker } from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/Feather";
import google2 from '../../assets/Images/google/google2.png'
import { Formik } from 'formik';  
import * as Yup from 'yup'; 
import { useNavigation, useRoute } from '@react-navigation/native';


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
    const navigation = useNavigation();
    const route = useRoute();
    const [users, setUsers] = useState(route.params?.usersArray || []);

    
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    useEffect(() => {
        // If users array is passed, update state
        const { usersArray } = route.params || {};
        if (usersArray) {
            setUsers(usersArray);
        }
        console.log(users)
    }, [route.params]);

  return (
    <View View style={{ marginTop: 10, padding: 17 }}>
        <PageHeader />
        <ScrollView style={{height:1000}} showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 10, marginLeft: 20, marginRight: 10,  }}>
                <Text style={{ fontSize: 35, color: Colors.PRIMARY, fontWeight: "bold" }}>Hello!  Register to get</Text>
                <Text style={{ fontSize: 35, color: Colors.PRIMARY, fontWeight: "bold" }}>Started 👋😊</Text>
            </View>
            <View>
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

                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(true);
                    const newUser = {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        age:values.age,
                        sex:values.sex,
                        email: values.email,
                        password: values.password,
                    };
                    setUsers([...users, newUser]);
                    setTimeout(() => {
                        navigation.navigate('login-form',  { usersArray: [...users, newUser] });
                        setSubmitting(false); 
                    }, 1000); 
                }}
                >{({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    isValid
                }) =>( 
                        <View style={{ marginTop: 10, marginLeft: 20, marginRight: 10,  }}>
                            <TextInput

                                    multiline={true}
                                    placeholder={
                                        touched.firstName && errors.firstName ? errors.firstName : "First Name"
                                    }
                                    placeholderTextColor={touched.firstName && errors.firstName ? "red" : "#888"}
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
                                        onChangeText={(text) => {
                                            handleChange("firstName")(text); // Update Formik value
                                            console.log("First Name:", text); // Log the value to the console
                                        }}
                                        onBlur={handleBlur("firstName")}
                                        value={values.firstName}
                            />

                            <TextInput
                                    multiline={true}
                                    placeholder={
                                        touched.lastName && errors.lastName ? errors.lastName : "Last Name"
                                    }
                                    placeholderTextColor={touched.lastName && errors.lastName ? "red" : "#888"}
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
                                        onChangeText={(text) => {
                                            handleChange("lastName")(text); // Update Formik value
                                            console.log("Last Name:", text); // Log the value to the console
                                        }}
                                        onBlur={handleBlur("lastName")}
                                        value={values.lastName}
                            />

                            <TextInput
                                    multiline={true}
                                    placeholder={
                                        touched.age && errors.age ? errors.age : "Age"
                                    }
                                    placeholderTextColor={touched.age && errors.age ? "red" : "#888"} 
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
                                        onChangeText={(text) => {
                                            handleChange("age")(text); // Update Formik value for "age"
                                            console.log("Age:", text); // Log the value to the console
                                        }}
                                        onBlur={handleBlur("age")}
                                        value={values.age}
                            />
                            

                            {/* Sex Selection */}
                            <View style={{ marginTop: 10, borderRadius:10, overflow: 'hidden',borderColor: "#ccc", }}>
                                {/* <Text style={{ fontSize: 18, color: Colors.PRIMARY }}>Sex</Text> */}
                                <Picker
                                    selectedValue={values.sex}
                                    style={{
                                    height: 50,
                                    backgroundColor: Colors.LIGHT_GRAY,
                                    borderRadius: 20,
                                    
                                    borderWidth: 1,
                                    borderColor: errors.sex && touched.sex ? "red" : Colors.SECONDARY_COLOR,
                                    }}
                                    onValueChange={(itemValue) => {
                                        handleChange("sex")(itemValue); // Update the state
                                        console.log("Selected Value:", itemValue); // Log the selected value
                                    }}
                                                                        >
                                    <Picker.Item label={touched.sex && errors.sex ? errors.sex : "Select Sex"} value="" style={{ color: 'gray' }} />
                                    <Picker.Item label="Male" value="male" style={{ color: 'gray' }}/>
                                    <Picker.Item label="Female" value="female" style={{ color: 'gray' }}/>
                                </Picker>
                            </View>

                            <TextInput
                                    multiline={true}
                                    placeholder={
                                        touched.email && errors.email ? errors.email : "Enter Email Address"
                                    }
                                    placeholderTextColor={touched.email && errors.email ? "red" : "#888"}
                                    style={{
                                        backgroundColor: Colors.LIGHT_GRAY,
                                        marginTop: 10,
                                        padding: 10,
                                        borderRadius: 10,
                                        borderColor: errors.email && touched.email ? "red" : "#ccc",
                                        borderWidth: 1,
                                        height: 45,
                                        textAlignVertical: "top",
                                    }}
                                        onChangeText={(text) => {
                                            handleChange("email")(text); // Update Formik value for "age"
                                            console.log("Email:", text); // Log the value to the console
                                        }}
                                        onBlur={handleBlur("email")}
                                        value={values.email}
                            />

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
                                        onChangeText={(text) => {
                                            handleChange("password")(text); // Update Formik value for "age"
                                            console.log("Password:", text); // Log the value to the console
                                        }}
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
                                        onChangeText={(text) => {
                                            handleChange("confirmPassword")(text); // Update Formik value for "age"
                                            console.log("Confirm Password:", text); // Log the value to the console
                                        }}
                                        
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
                                     
                                    disabled={!isValid || isSubmitting}

                                    onPress={() => {
                                        console.log("Button Pressed");
                                        handleSubmit();
                                    }}
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
                                <TouchableOpacity onPress={()=> navigation.navigate('login-form') }><Text style={{color:Colors.PRIMARY}}>Log In</Text></TouchableOpacity>
                            </View>

                        </View>
                    
                    
                    
                

                )}

                </Formik>
            </View>
        </ScrollView>

    </View>
    
    
    
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
