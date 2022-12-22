import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


export default function Review() {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <Image source={require('../Images/arrow.png')} style={styles.backArrow} />
                    <Text style={{ fontSize: 20, marginLeft: 10, color: "white" }}>
                        Reviews
                    </Text>
                </View>
                <View>
                    <Image source={require('../Images/bell.png')} style={styles.bellIcon} />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 10,  }}>
                <View style={{ margin: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: 15, fontWeight: "800" }}>DR. S .David</Text>
                        <Image source={require('../Images/star.png')} style={{ height: 13, width: 13, marginLeft: 5, marginRight: 5 }} />
                        <Text>4.9</Text>
                    </View>
                    <Text>21 Reviews</Text>

                </View>
                <Image source={require('../Images/docter.jpg')} style={{ height: 50, width: 50, marginRight: 5, borderRadius: 5 }} />
            </View>
            <View style={{ margin: 20, backgroundColor: "red",flexDirection:"row" }}>
                <View style={{marginRight:30}}>
                    <Text>On going .......</Text>
                </View>
                <View>
                    <Text>On going .......</Text>
                </View>
            </View>
            {/* <View style={{ flexDirection: "row", margin: 20,width:'90%',height:100,backgroundColor:"red" }}>
                <View>
                    <Image source={require('../Images/girl.png')}
                        style={{ height: 60, width: 60, borderWidth: 1, borderColor: "gray", borderRadius: 5 }} />

                </View>
                <View style={{ }}>
                    <Text style={{ fontSize: 18 }}>Alexandra</Text>
                    <Text style={{  }}>Doctor of Osteopathic Medicine the latter in the United States only, and this is undertaken by graduat</Text>
                </View>
            </View> */}
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