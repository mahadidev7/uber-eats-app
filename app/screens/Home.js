
import React from 'react'
import { ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem from '../components/RestaurantItem'
import SafeAreaWrapper from '../components/SafeAreaWrapper'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaWrapper bg="#eee">
      <HeaderTabs />
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 20}}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
      
    </SafeAreaWrapper>

    // 1.24.25 s
  )
}