import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header'
import SearchBar from '../Components/Home/SearchBar'
import Slider from '../Components/Home/Slider'
import Categories from '../Components/Home/Categories'
import PremiumHospitals from '../Components/Home/PremiumHospitals'

export default function Home() {
  return (
    <ScrollView style={{padding:20, marginTop:20}}>
      <Header />

      <SearchBar setSearchText={(value) => console.log(value)}/>

      <Slider />
      <Categories />
      <PremiumHospitals />
      <PremiumHospitals />
      
    </ScrollView>
  )
}