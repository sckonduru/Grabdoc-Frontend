import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function VedioScrSEC({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: "white",fontFamily:'Poppins-Regular' }}>Thanks for</Text>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center",fontFamily:'Poppins-Regular' }}>lpsum, giving information on its origins, as well as a random Lipsum generator</Text>
            <Text style={{ fontSize: 17, textAlign: "center", color: "white", marginTop: 80,fontFamily:'Poppins-Regular' }}>How was your experiance ?</Text>
            <TouchableOpacity style={{
                width: 287,height:52,
                backgroundColor: "#FFFFFF",
                marginTop: 20,
                borderRadius: 15,
            }} onPress={() => navigation.navigate('ratingScr')}>
                <Text style={styles.leaveButon}>Write a Review</Text>
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
        color: "#2F65EC",
        fontSize: 20,

    },
    icnSty: {
        width: 50,
        height: 50,
        tintColor: "white",
        margin: 10
    }
})