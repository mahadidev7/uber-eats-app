import { Text, TouchableOpacity } from "react-native";


export default function HeaderButton ({text, activeTab, setActiveTab}) {
    return(
        <TouchableOpacity
        style={{
            backgroundColor: activeTab === text ? "black" : "white",
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderRadius: 30,
        }}
        onPress={()=> setActiveTab(text)}
    >
        <Text
            style={{
                color: activeTab === text ? "white" : "black",
                fontSize: 15,
                fontWeight:"900",
            }}
        > 
            {text}
        </Text>
    </TouchableOpacity>
    )
}