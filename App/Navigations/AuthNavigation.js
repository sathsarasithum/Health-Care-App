import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import LoginForm from '../Screens/LoginForm';
import Home from '../Screens/Home';
import RegisterForm from '../Screens/RegisterForm';
import HomeNavigation from './HomeNavigation';

const Stack = createStackNavigator();

const AuthNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name='login-form' component={LoginForm} options={{ headerShown: false }} />
      <Stack.Screen name='register-form' component={RegisterForm} options={{ headerShown: false }} />
      <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})