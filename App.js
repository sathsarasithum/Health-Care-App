import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./App/Screens/Login";
import Colors from "./assets/Shared/Colors";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import AuthNavigation from "./App/Navigations/AuthNavigation";
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import HomeNavigation from "./App/Navigations/HomeNavigation";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {

  const [fontLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
    'appfont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
    'appfont-semibold': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'appfont-light': require('./assets/fonts/Outfit-Light.ttf'),

  });

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();



  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <NavigationContainer>
    //     {/* <AuthNavigation /> */}
    //     <TabNavigation />
    //   </NavigationContainer>
    // </GestureHandlerRootView>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* Show AuthNavigation first */}
          <Stack.Screen name="Auth" component={AuthNavigation} />
          {/* After login, show TabNavigation */}
          <Stack.Screen name="Main" component={TabNavigation} />
          {/* <Stack.Screen name="Home" component={HomeNavigation} /> */}
        </Stack.Navigator>



        {/* <TabNavigation /> */}

      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
});
