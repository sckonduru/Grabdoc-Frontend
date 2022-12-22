import React from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default function FourScr({ navigation }) {
    return (
        <View style={{ backgroundColor: "white",height:'100%' }}>
            <View style={{ height: 260, width: '100%', backgroundColor: "white" }}>
                <Image source={require('../Images1/handheart.png')} style={{ height: '100%', width: '100%' }} />
            </View>
            <View style={{ height: 55, flexDirection: "row", marginLeft: 35, alignItems: "center" }}>
                <Image source={require('../Images1/person-2.png')} resizeMode="contain" style={{ width: 12.25, height: 14, marginRight: 21 }} />
                <TextInput placeholder="First Name" style={{ borderBottomWidth: 0.5, width: '80%' }} />
            </View>
            <View style={{ height: 55, flexDirection: "row", alignItems: "center", marginLeft: 35 }}>
                <Image source={require('../Images1/person-2.png')} resizeMode="contain" style={{ width: 12.25, height: 14, marginRight: 21 }} />
                <TextInput placeholder="Last Name" style={{ borderBottomWidth: 0.5, width: '80%' }} />
            </View>
            <View style={{ height: 55, flexDirection: "row", alignItems: "center", marginLeft: 35 }}>
                <Image source={require('../Images1/phone-1.png')} resizeMode="contain" style={{ width: 15, height: 15, marginRight: 17.5, }} />
                <TextInput placeholder="Phone number" keyboardType="numeric" style={{ borderBottomWidth: 0.5, width: '80%' }} />
            </View>
            <View style={{ height: 55, flexDirection: "row", alignItems: "center", marginLeft: 35 }}>
                <Image source={require('../Images1/mail.png')} resizeMode="contain" style={{ width: 17, height: 12, marginRight: 15 }} />
                <TextInput placeholder="Email" keyboardType="email-address" style={{ borderBottomWidth: 0.5, width: '80%' }} />
            </View>
            <View style={{ height: 55, flexDirection: "row", alignItems: "center", marginLeft: 36 }}>
                <Image source={require('../Images1/Framedob.png')} resizeMode="contain" style={{ width: 13, height: 13, marginRight: 18 }} />
                <TextInput placeholder="Date of birth(dd/mm/yy)" style={{ borderBottomWidth: 0.5, width: '80%' }} />
                <TouchableOpacity style={{ marginLeft: -25 }}>
                    <Image source={require('../Images1/calender.png')} resizeMode="contain" style={{ width: 15, height: 15, }} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
                <TouchableOpacity style={{ width: '20%', borderWidth: 1, borderColor: '#064C9F', alignItems: "center", borderRadius: 7 }}>
                    <Text style={{ padding: 3, color: '#064C9F' }}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '20%', borderWidth: 1, borderColor: '#064C9F', alignItems: "center", borderRadius: 7 }}>
                    <Text style={{ padding: 3, color: '#064C9F' }}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '20%', borderWidth: 1, borderColor: '#064C9F', alignItems: "center", borderRadius: 7 }}>
                    <Text style={{ padding: 3, color: '#064C9F' }}>Others</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('draw')}
                style={{ width: 340, alignSelf:"center",height:50, marginTop: 15 ,backgroundColor:'#2F65EC',borderRadius:15 ,alignItems:"center",justifyContent:"center"}}>
                <Text style={{color:'white',fontFamily: 'Poppins-SemiBold',fontSize:20}}>Continue</Text>
            </TouchableOpacity>
            <Image source={require('../Images1/heartline.png')} resizeMode="stretch"             style={{ height: 50, width: '100%',marginTop:15}} />
        </View>
    )
}