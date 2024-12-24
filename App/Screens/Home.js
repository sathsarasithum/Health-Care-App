import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import SearchBar from '../Components/Home/SearchBar'
import Slider from '../Components/Home/Slider'
import Categories from '../Components/Home/Categories'

export default function Home() {
  return (
    <View style={{padding:20, marginTop:20}}>
      <Header />

      <SearchBar setSearchText={(value) => console.log(value)}/>

      <Slider />
      <Categories />
      
    </View>
  )
}