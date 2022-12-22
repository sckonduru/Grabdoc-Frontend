import React, { useRef, useState } from "react";
import { View, Text, Button, DrawerLayoutAndroid, Image, TouchableNativeFeedback, TextInput, StyleSheet } from "react-native";



export default function drawbar() {
    const [pick, setpick] = useState('Chest Pain')
    const drawer = useRef(null);
    const mainView = () => (
        <View>
            <View style={{ backgroundColor: "white", height: "100%", width: 300 }}>
                <Text>menu</Text>
                <View style={{
                    // height: 70,
                    width: '100%',
                    justifyContent: "center"
                }}>
                    < Button title="close draw" onPress={() => drawer.current.closeDrawer()} />
                </View>
            </View>



        </View>

    )
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition="left"
            renderNavigationView={mainView}
        >
            <View>
                <View>
                    <TouchableNativeFeedback onPress={() => drawer.current.openDrawer()}>
                        <Image source={require('../Images/threeline.png')} style={{ height: 50, width: 50 }} />
                    </TouchableNativeFeedback>
                </View>
         

            </View>
        </DrawerLayoutAndroid>
    )

}
const style = StyleSheet.create({

    Picker: {
        height: 50,
        width: '100%',
        margin: 10,
        color: "white",
        backgroundColor: "gray",
        borderWidth: 1,


    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: 20,
        height: 10,
        alignItems: "center"
    },
    align: {
        textAlign: "center"
    },
    reason: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 5
    },
    sear: {
        borderWidth: 0.5,
        margin: 5,
        borderRadius: 20
    },
})
