import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login'

const Stack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

export default LoginNavigation

const styles = StyleSheet.create({})