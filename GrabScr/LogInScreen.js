import React from "react";
import { Text, View, Image, TextInput, Button, KeyboardAvoidingView, Dimensions, Platform, TouchableOpacity } from "react-native";


export default function LoggingScreen({ navigation }) {
    setTimeout(() => {
        <Image source={require('../Images/Female-Docter.png')} />
    }, 10000
    )
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <View style={{ backgroundColor: "white", height: '100%' }}>
                <View>
                    <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', textAlign:"center",marginTop:66, color: "#818286" }} >
                        Welcome Back!
                    </Text>
                    <Image source={require('../Images1/steth.png')}
                        style={{
                            height: 270,
                            width: '100%',
                        }}
                        resizeMode="stretch"
                    />
                    <Text style={{
                        fontSize: 25,
                        color: "#064C9F",
                        marginLeft: 44,
                        marginTop: 5,
                        fontFamily: 'Poppins-SemiBold',
                        height: 38, width: 100
                    }}>
                        Login
                    </Text>
                    <View style={{}}>
                        <TextInput placeholder="     Your Phone Number"
                            style={{
                                height: 50,
                                width: 326,
                                margin: 10,
                                borderWidth: 0.6,
                                borderRadius: 12, marginLeft: 44,
                                backgroundColor: "#F3F3F3"
                            }} keyboardType='numeric' maxLength={10} />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Verification')}
                        style={{
                            width: 326,
                            height: 50,
                            justifyContent: "center", backgroundColor: "#064C9F",
                            marginLeft:44,borderRadius:12,marginTop:56

                        }}>
                        <Text style={{ textAlign: "center",color:"white",fontFamily: 'Poppins-SemiBold',fontSize:20 }}>Login</Text>
                    </TouchableOpacity>
<Image source={require('../Images1/reddots.png')} style={{width:27,height:232,position:"absolute",left:-2,top:452}}
resizeMode="contain"/>

                </View>
                <Image source={require('../Images1/heartline.png')}
                    style={{
                        height: 120,
                        width: '100%',
                        marginTop: 20,marginLeft:15
                    }} resizeMode="contain" />
            </View>
        </KeyboardAvoidingView>
    )
}