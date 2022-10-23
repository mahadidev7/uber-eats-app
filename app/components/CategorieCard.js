import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategorieCard({image, text}) {
  return (
    <TouchableOpacity 
        style={{ 
            alignItems: "center",
            marginRight:30 }}
        >
            <Image source={image} style={{
                width: 50,
                height: 40,
                resizeMode: "contain"
            }} />
            <Text style={{
                fontSize: 13,
                fontWeight: "900"
            }}>
                {text}
            </Text>
    </TouchableOpacity>
  )
}