import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategorieCard from './CategorieCard'
import { CategoriesData } from '../data/CategoriesData';

export default function Categories() {
    const { categoriesdata } = CategoriesData
  return (
    <View 
        style={{
            backgroundColor: "#fff",
            paddingVertical: 10,
            marginVertical: 2
        }}
    >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 10}}>
        {/* loop starts here  */}
        {
            categoriesdata?.map((categorie, index) => (
                <CategorieCard key={index} {...categorie} />
            ))
        }
        {/* loop ends here  */}
        </ScrollView>
    </View>
  )
}