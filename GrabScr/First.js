import React from "react";
import { View, Image, KeyboardAvoidingView, Platform, Dimensions } from "react-native";

export default function FlashScr({ Navigation }) {
    // setTimeout(()=>{
    //     Navigation.navigate('Login');
    //        },3000);
    return (
        <KeyboardAvoidingView behavior={Platform.OS==="ios"?"padding":"height"} style={{height:Dimensions.get("window").height}} >
            <View style={{ height: '100%', width: '100%', backgroundColor: "steelblue" }}>
                <View style={{ height: '40%', }}>
                    <Image source={{ uri: 'https://play-lh.googleusercontent.com/Wxb77s94uMRBDzt-mMbY5UobfEgSgh-dUx2PSP2hjeemNUsmlWiBnxBWXHD0r3Pp-rg3=w600-h300-pc0xffffff-pd' }}
                        style={{ height: '50%', width: '100%', marginTop: 100 }}
                    />
                </View>
                <View style={{ height: '60%', marginLeft: 100 }}>
                    <Image source={{ uri: 'https://1.bp.blogspot.com/--0vVDm-kEIk/YSR0ddUSyKI/AAAAAAAACtw/frRId8kkQio0sWTyQv4G_kEhSFrrG63ggCLcBGAsYHQ/s1307/Female-Indian-Doctor-Pointing-Transparent-Image.png?dl=1' }}
                        style={{ height: '100%', width: 400, }} resizeMode="contain"
                    />
                    

                </View>
            </View>
        </KeyboardAvoidingView>
    )
}