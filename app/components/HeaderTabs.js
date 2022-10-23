import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { HeaderData } from "../data/HeaderData"
import HeaderButton from './HeaderButton';


export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");
    const { headerdata } = HeaderData
  return (
    <View style={{ padding: 15, backgroundColor: "white"}}>
        <View style={{ flexDirection: "row", alignSelf: "center",}}>
        {
            headerdata?.map((item, index) => (
              <HeaderButton
                key={index}
                {...item} 
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />  
            ))
        }
            
        </View>
    </View>
  )
}


