import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalDoctorListScreen from '../Screens/HospitalDoctorListScreen';
import HospitalDetails from '../Screens/HospitalDetails';
import BookApoinment from '../Screens/BookApoinment';
import LoginForm from '../Screens/LoginForm';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='hospital-doctor-list-screen' 
      component={HospitalDoctorListScreen} />
      <Stack.Screen name='hospital-detail' component={HospitalDetails}/>
      <Stack.Screen name='book-appoinment' component={BookApoinment} />
      <Stack.Screen name='login-form' component={LoginForm} />
   </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})