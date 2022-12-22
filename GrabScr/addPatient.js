
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from "react-native";

export default function AddPatientDetails({ navigation }) {
    const [relationship, setRelation] = useState("")
    const [border, setGenderborder] = useState("")
    const relationsArray = [
        { no: 1, rela: 'Mom' },
        { no: 2, rela: 'Dad' },
        { no: 3, rela: 'Husband' },
        { no: 4, rela: 'Wife' },
        { no: 5, rela: 'Sister' },
        { no: 6, rela: 'Brother' },
        { no: 7, rela: 'Other' }
    ]
    const genderArry = [
        { no: 1, gender: 'Female' },
        { no: 2, gender: 'Male' },
        { no: 3, gender: 'Other' }
    ]
    return (
        <ScrollView>
            <StatusBar backgroundColor={"#2F65EC"} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#2F65EC" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Image source={require('../Images/arrow.png')} style={{ height: 15, width: 15, tintColor: "white", marginLeft: 10 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, marginLeft: 10, color: "white", fontFamily: 'Poppins-SemiBold' }}>Add New Patient</Text>
                </View>
                <View>
                    <Image source={require('../Images1/bell-1.png')} style={{ height: 17, width: 16, tintColor: "white", marginRight: 10 }} />
                </View>
            </View>
            <View style={{ alignItems: "center", flexDirection: "row", marginTop: 25, marginHorizontal: 30 }}>
                <Image source={require('../Images/profile.png')} style={{ height: 53, width: 53, marginRight: 10 }} />
                <Text style={{ fontSize: 21, color: "#2F65EC", fontFamily: 'Poppins-SemiBold' }}>Upload Profile Pic</Text>
            </View>
            <View style={{ marginHorizontal: 15 }}>
                <View>
                    <Text style={{ marginTop: 5, fontSize: 16, color: "#8B8585", fontFamily: 'Poppins-Regular' }}>First name</Text>
                    <TextInput placeholder="" style={{ backgroundColor: "white", borderRadius: 11, width: 344, height: 51, alignSelf: "center" }} />
                </View>
                <View>
                    <Text style={{ marginTop: 5, fontSize: 16, color: "#8B8585", fontFamily: 'Poppins-Regular' }}>Second name</Text>
                    <TextInput placeholder="" style={{ backgroundColor: "white", borderRadius: 11, width: 344, height: 51, alignSelf: "center" }} />

                </View>
                <View>
                    <Text style={{ marginTop: 5, fontSize: 16, color: "#8B8585", fontFamily: 'Poppins-Regular' }}>Gender</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                        {genderArry.map((gen) => {
                            return (
                                <TouchableOpacity key={gen.no}
                                    onPress={() => (setGenderborder(gen.no))}
                                    style={{
                                        borderRadius: 8, height: 42, borderWidth: 1, borderColor: border === gen.no ? "#2F65EC" : "#FFFFFF",
                                        width: 104, backgroundColor: 'white',
                                        alignItems: "center", justifyContent: "center"
                                    }}>
                                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#8B8585' }}>{gen.gender}</Text>
                                </TouchableOpacity>

                            )
                        })}
                    </View>
                    <View>
                        <Text style={{ marginTop: 5, fontFamily: 'Poppins-Regular', fontSize: 16, color: '#8B8585' }}>Date Of Birth</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 8, backgroundColor: "white", width: 155, height: 42 }}>
                            <TextInput placeholder="dd/mm/yy" style={{ backgroundColor: "white", fontFamily: 'Poppins-Regular', borderRadius: 8, fontSize: 16, color: '#8B8585', width: '88%' }} />
                            <Image source={require('../Images/calendar.png')} style={{ height: 12, width: 12, tintColor: "#2F65EC", marginRight: 5, }} />
                        </View>
                    </View>

                </View>
                <View style={{ borderColor: '#F0F0F0', borderWidth: 1, width: 367, borderRadius: 17, marginTop: 10, backgroundColor: '#F9F9F9' }}>
                    <Text style={{ color: '#8B8585', fontFamily: 'Poppins-regular', fontSize: 16, marginLeft: 8, marginVertical: 10 }}>relationship</Text>
                    {relationsArray.map((rel) => {
                        return (
                            <TouchableOpacity key={rel.no}
                                onPress={() => (setRelation(rel.no))}
                            >
                                <View style={{ paddingVertical: 8, paddingHorizontal: 8, flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderColor: '#ECECEC', alignItems: "center" }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular' }}>{rel.rela}</Text>
                                    <View style={{
                                        height: 10, width: 10, borderRadius: 5,
                                        borderColor: relationship === rel.no ? "#2F65EC" : "#8B8585",
                                        borderWidth: 1, marginRight: 10
                                    }} />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
                    <TouchableOpacity style={{
                        height: 52, borderRadius: 15, justifyContent: "center", alignItems: "center",
                        width: 144, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#2F65EC'
                    }}>
                        <Text style={[styles.bottonstl, { color: '#2F65EC' }]}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: 52, borderRadius: 15, justifyContent: "center", alignItems: "center",
                        width: 144, backgroundColor: '#2F65EC'
                    }}>
                        <Text style={[styles.bottonstl, { color: '#FFFFFF' }]}>Save</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    bottonstl: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,


    }
})