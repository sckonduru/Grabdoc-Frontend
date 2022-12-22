import React from "react";
import { View, Text, Image,StyleSheet } from "react-native";


export default function notificationScr() {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <Image source={require('../Images/arrow.png')} style={styles.backArrow} />
                    <Text style={{ fontSize: 20, marginLeft: 10, color: "white" }}>
                        Notifications
                    </Text>
                </View>
                <View>
                    <Image source={require('../Images/bell.png')} style={styles.bellIcon} />
                </View>
            </View>
            <View>
                <Text>notifications will display here</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "steelblue",
        padding: 10,
        elevation: 10
    },
    heading: {
        flexDirection: "row",
        alignItems: "center"
    },
    backArrow: {
        height: 15,
        width: 15,
        tintColor: "white"
    },
    bellIcon: {
        height: 20,
        width: 20,
        tintColor: "white"
    }
});