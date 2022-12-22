import React, { useState } from "react";
import { FlatList,View,Text,TouchableOpacity } from "react-native";


export default function ListOfSpec(){
    const [border,setBorder]=useState("")
    
    let users=[
        {
            id:1,tittle:"Allergy and immunology",data:["giving infomation on it's origins "]
        },
        {id:2,tittle:"Anesthesiology",data:["giving infomation on it's origins "]},
        {id:3,tittle:"Dermatology",data:["giving infomation on it's origins "]},
        {id:4,tittle:"Diagnostic radiology",data:["giving infomation on it's origins "]},
        {id:5,tittle:"Emergency Medicine",data:["giving infomation on it's origins "]},
        {id:6,tittle:"Family Medicine",data:["giving infomation on it's origins "]},
        {id:7,tittle:"Allergy and immunology",data:["giving infomation on it's origins "]},
        {id:8,tittle:"Anesthesiology",data:["giving infomation on it's origins "]},
        {id:9,tittle:"Dermatology",data:["giving infomation on it's origins "]},
        {id:10,tittle:"Diagnostic radiology",data:["giving infomation on it's origins "]},
        {id:11,tittle:"Emergency Medicine",data:["giving infomation on it's origins "]},
        {id:12,tittle:"Family Medicine",data:["giving infomation on it's origins "]},
    ]
   
    return(
        <View>
           {users.map((lista)=>{
            return(
                <View key={lista.id} style={{ padding: 5, marginHorizontal: 28, borderRadius: 10, borderColor: lista.id === border ? "blue" : "", borderWidth: lista.id === border ? 1 : 0 }}>
                <Text style={{ fontSize: 16,fontFamily:'Poppins-Regular', }}>{lista.tittle}</Text>
                <Text style={{ fontSize: 10,fontFamily:'Poppins-Regular', borderTopWidth: 0.3 }}>{lista.data}</Text>
            </View>
            )
           })}
        </View>
    )

}