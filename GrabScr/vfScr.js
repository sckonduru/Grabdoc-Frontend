import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function VedioScrONE() {
    return (
        <View style={styles.container}>
            <Image source={require('../Images1/Frameload.png')} style={styles.icnSty} />
            <Text style={{ fontSize: 20,fontFamily:'Poppins-Regular',fontSize:20,color:'#FFFFFF' }}>please wait</Text>
            <Text style={{ fontSize: 20,fontFamily:'Poppins-Regular',fontSize:20,color:'#FFFFFF'  }}>Host will let you in soon</Text>
            <Text style={{ fontSize: 20, textAlign: "center", marginTop: 50,fontFamily:'Poppins-Regular',color:'#FFFFFF'  }}>Reference site about loren lpsum, giving information on its origins, as well as a random Lipsum generator</Text>
            <TouchableOpacity style={{
                width: 355,height:52,
                backgroundColor: "#FE001E",
                marginTop: 110,
                borderRadius: 15,
            }}>
                <Text style={styles.leaveButon}>Leave</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 200,
        alignItems: "center",
        padding: 30,
        backgroundColor: "#2F65EC"
    },
    leaveButon: {

        textAlign: "center",
        paddingVertical: 12,
fontFamily:'Poppins-SemiBold',
        color: "white",
        fontSize: 20,

    },
    icnSty: {
        width: 60,
        height: 63,
        tintColor: "#FFFFFF",
        margin: 10
    }
})