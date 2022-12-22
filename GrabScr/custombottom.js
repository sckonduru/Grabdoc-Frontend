import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";


export default function BottomCustom() {
    return (
        <View style={{ position: "absolute", bottom: 0, height: 65, width: '100%', backgroundColor: '#2F65EC',flexDirection:"row",alignItems:"center",justifyContent:"center" }}>
            <TouchableOpacity style={{alignItems:"center",height:'100%',width:'30%',justifyContent:'center'}}>
                <Image source={require('../Images1/Framebottomc.png')} resizeMode="contain" style={{ width: 21, height: 16 }} />
                <Text style={{fontSize:10,fontFamily:'Poppins-Regular',color:'#FFFFFF'}}>Consult</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center",height:'100%',width:'30%',justifyContent:'center'}}>
                <Image source={require('../Images1/Framebottom.png')} resizeMode="contain" style={{ width: 21, height: 16 }} />
                <Text  style={{fontSize:10,fontFamily:'Poppins-Regular',color:'#FFFFFF'}}>Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:"center",height:'100%',width:'30%',justifyContent:'center'}}>
                <Image source={require('../Images1/Groupbottomr.png')} resizeMode="contain" style={{ width: 21, height: 16 ,tintColor:'white'}} />
                <Text  style={{fontSize:10,fontFamily:'Poppins-Regular',color:'#FFFFFF'}}>Records</Text>
            </TouchableOpacity>
        </View>
    )
}
