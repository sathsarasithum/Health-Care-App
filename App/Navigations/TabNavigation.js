import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Appoinment from '../Screens/Appoinment'
import Profile from '../Screens/Profile'
import Login from '../Screens/Login'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import HomeNavigation from './HomeNavigation'
import Explores from '../Screens/Explores'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    
      <Tab.Navigator 
        screenOptions={{
            headerShown:false,
            tabBarStyle: { position: 'absolute' },
            tabBarLabelStyle: { fontSize: 14 },}}>
        <Tab.Screen name='Home' component={HomeNavigation} 
          options={{
            tabBarIcon:({color,size}) => (
              <FontAwesome name="home" size={size} color='#1ABC9C' />
            )
          }}
        />
        <Tab.Screen name='Explore' component={Explores} 
          options={{
            tabBarIcon:({color,size}) => (
              <FontAwesome name="search" size={size} color='#1ABC9C' />
            )
          }}
        />
        <Tab.Screen name='Login' component={Login} 
          options={{
            tabBarIcon:({color,size}) => (
              <FontAwesome name="home" size={size} color='#1ABC9C' />
            )
          }}
        />
        <Tab.Screen name='Appoinment' component={Appoinment} 
          options={{
            tabBarIcon:({color,size}) => (
              <Entypo name="calendar" size={size} color='#1ABC9C' />
            )
          }}
        />
        <Tab.Screen name='Profile' component={Profile} 
          options={{
            tabBarIcon:({color,size}) => (
              <FontAwesome name="user-circle" size={size} color='#1ABC9C' />
            )
          }}
        />
      </Tab.Navigator>
    
  )
}


