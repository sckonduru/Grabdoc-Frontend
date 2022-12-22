import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';


export default function MedicalRecords({ navigation }) {
    const [pick, setpick] = useState("")

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.heading}>
                    <TouchableOpacity onPress={()=>navigation.pop()}>
                        <Image source={require('../Images/arrow.png')} style={styles.backArrow} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginLeft: 10, color: "white" }}>
                        Add Medical Records
                    </Text>
                </View>
                <View>
                    <Image source={require('../Images/bell.png')} style={styles.bellIcon} />
                </View>
            </View>
            <View style={{ margin: 20 }}>
                <View>
                    <Text style={styles.textSt}>Record for *</Text>
                    <Picker
                        style={{
                            height: 50,
                            width: '100%',

                            color: "gray",
                            backgroundColor: "white",
                            borderWidth: 1,


                        }}

                        selectedValue={pick}
                        onValueChange={(itemValue) => setpick(itemValue)}
                    >
                        <Picker.Item label="Myself" value={"Myself"} />
                        <Picker.Item label="Dad" value={"Dad"} />
                        <Picker.Item label="Mom" value={"Mom"} />
                        <Picker.Item label="Husband" value={"Husband"} />
                        <Picker.Item label="Wife" value={"Wife"} />
                        <Picker.Item label="Brother" value={"Brother"} />
                        <Picker.Item label="Sister" value={"Sister"} />

                    </Picker>
                </View>
                <View>
                    <Text style={styles.textSt}>Record Name *</Text>
                    <TextInput placeholder="Enter Record Name" style={{ backgroundColor: "white" }} />
                </View>
                <Text style={styles.textSt}>Upload Records</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity style={{ height: 150, width: 150, backgroundColor: 'white', borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../Images/camera.png')} style={{ height: 20, width: 20 }} />
                        <Text style={styles.textSt}>Take a Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 150, width: 150, backgroundColor: 'white', borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../Images/folder.png')} style={{ height: 25, width: 25 }} />
                        <Text style={styles.textSt}>Upload from Gallery</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.textSt}>Record Date *</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "white", paddingHorizontal: 5, borderRadius: 5, }}>
                        <TextInput placeholder="dd/mm/yy" />
                        <Image source={require('../Images/calendar.png')} style={{ height: 15, width: 15, tintColor: "steelblue" }} />
                    </View>
                </View>

            </View>
            <TouchableOpacity style={{
                marginHorizontal: 25,
                backgroundColor: "steelblue",
                marginTop: 20,
                borderRadius: 8,
            }}>
                <Text style={styles.leaveButon}>Save</Text>
            </TouchableOpacity>

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
    leaveButon: {
        textAlign: "center",
        paddingVertical: 12,
        color: "white",
        fontSize: 20,
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
    },
    textSt: {
        fontSize: 15,
        margin: 3
    }
});