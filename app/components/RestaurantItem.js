import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons"


export default function RestaurantItem() {
  return (
    <View style={{backgroundColor: "white"}}>
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 10}}>
            <View style={{paddingTop: 10, backgroundColor: "white"}}>
                <RestaurantImage /> 
                <RestaurantInfo/>
            </View>
        </TouchableOpacity>
    </View>
  )
}

const RestaurantImage = ()=> (
    <>
        <Image
            source={{uri: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyYW50JTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}}
            style={{width: "100%", height: 180, borderRadius: 5}}
        />
        <TouchableOpacity style={{ position: "absolute", right: 10, top: 10 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="#000" />
        </TouchableOpacity>
     </>
)

const RestaurantInfo =() => (
    <View 
     style={{
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginTop: 10
    }}>
        <View>
            <Text style={{fontSize: 15, fontWeight: "bold"}}> Farhouse kitechen Thai Cuisine </Text>
            <Text style={{fontSize: 13, color: "gray"}}> 30-45 . min </Text>
        </View>
        <View style={{
            backgroundColor: "#000", height: 30, width: 30, alignItems: "center", borderRadius: 15, justifyContent: "center"
        }}>
            <Text style={{color: "white"}}> 4.5 </Text>
        </View>
    </View>
)