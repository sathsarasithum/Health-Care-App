import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import HospitalDoctorListScreen from '../Screens/HospitalDoctorListScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='hospital-doctor-list-screen' component={HospitalDoctorListScreen} />
   </Stack.Navigator>
  )
}

export default HomeNavigation

const styles = StyleSheet.create({})