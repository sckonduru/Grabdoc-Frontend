import React, { useRef, useState } from "react";
import { View, Text, Button, DrawerLayoutAndroid, Image, FlatList, TouchableNativeFeedback, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';


export default function Fifthsrc({ navigation }) {
    const [pick, setpick] = useState("")
    const [border, setBorder] = useState("")
    const drawer = useRef(null);
    const movingNxt = (lista) => {
        setBorder(lista.id)
        navigation.navigate('bottomTabs')
    }
    const mainView = () => (
        <View>
            <View style={{ backgroundColor: "#2F65EC", width: 313, flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => drawer.current.closeDrawer()}>
                    <Image source={require('../Images/left.png')} style={{ width: 15, height: 15, marginLeft: 15, tintColor: "white" }} />
                </TouchableOpacity>
                <Image source={require('../Images/Female-Docter.png')} style={{ width: 50, height: 50, margin: 5, borderRadius: 50 }} resizeMode="contain" />
                <View style={{ justifyContent: "center" }}>

                    <Text style={{ color: "white", fontSize: 16, fontFamily: 'Poppins-Medium' }}>pooja hegde</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('editprifileScr')}>
                        <Text style={{ color: "white", textAlign: "center", fontFamily: 'Poppins-Regular', fontSize: 13 }}>View and Edit Profile</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <TouchableOpacity>
                <View style={style.drawlist}>
                    <Image source={require('../Images1/vediocall-B.png')} resizeMode="contain" style={{ width: 25, height: 25, margin: 5, tintColor: "blue" }} />
                    <Text style={style.drawtext}>Consult</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>

                <View style={style.drawlist}>
                    <Image source={require('../Images1/Vectora.png')} resizeMode="contain" style={{ width: 18, height: 22, margin: 5, tintColor: "blue" }} />
                    <Text style={style.drawtext}>Appointments</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity>

                <View style={style.drawlist}>
                    <Image source={require('../Images1/Groupmr.png')} resizeMode="contain" style={{ width: 16, height: 20, margin: 5, tintColor: "blue" }} />
                    <Text style={style.drawtext}>Medical Records</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity>

                <View style={style.drawlist}>
                    <Image source={require('../Images1/family.png')} resizeMode="contain" style={{ width: 21, height: 22, margin: 5, tintColor: "blue" }} />
                    <Text style={style.drawtext}>My Family</Text>

                </View>
            </TouchableOpacity>
            <TouchableOpacity>

                <View style={style.drawlist}>
                    <Image source={require('../Images1/customercare.png')} resizeMode="contain" style={{ width: 18, height: 18, margin: 5, tintColor: "blue" }} />
                    <Text style={style.drawtext}>Help Center</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>

                <View style={style.drawlist}>
                    <Image source={require('../Images1/logout.png')} resizeMode="contain" style={{ width: 14, height: 19, margin: 5, tintColor: "blue" }} />
                    <Text style={style.drawtext}>Logou</Text>
                </View>
            </TouchableOpacity>



        </View>

    )
    let users = [
        { id: 1, tittle: "Allergy and immunology", data: "giving infomation on it's origins " },
        { id: 2, tittle: "Anesthesiology", data: "giving infomation on it's origins " },
        { id: 3, tittle: "Dermatology", data: "giving infomation on it's origins " },
        { id: 4, tittle: "Diagnostic radiology", data: "giving infomation on it's origins " },
        { id: 5, tittle: "Emergency Medicine", data: "giving infomation on it's origins " },
        { id: 6, tittle: "Family Medicine", data: "giving infomation on it's origins " },
        { id: 7, tittle: "Allergy and immunology", data: "giving infomation on it's origins " },
        { id: 8, tittle: "Anesthesiology", data: "giving infomation on it's origins " },
        { id: 9, tittle: "Dermatology", data: "giving infomation on it's origins " },
        { id: 10, tittle: "Diagnostic radiology", data: "giving infomation on it's origins " },
        { id: 11, tittle: "Emergency Medicine", data: "giving infomation on it's origins " },
        { id: 12, tittle: "Family Medicine", data: "giving infomation on it's origins " },
    ]



    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={313}
            drawerPosition="left"
            renderNavigationView={mainView}
        >
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <TouchableNativeFeedback onPress={() => drawer.current.openDrawer()}>
                            <Image source={require('../Images1/Framethreedots.png')} resizeMode='contain' style={{ height: 17, width: 23, tintColor: "gray", marginLeft: 15, marginTop: 12 }} />
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback >
                            <Image source={require('../Images1/bell-1.png')} resizeMode='contain' style={{ height: 13, width: 13, tintColor: "gray", marginRight: 10, marginTop: 12 }} />
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: '#2F65EC', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 10, color: 'white' }}>1</Text>
                        </View>


                        <View style={{ width: '25%', height: 5, marginHorizontal: 2, backgroundColor: '#EAECF5' }} />
                        <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAECF5' }}>
                            <Text>2</Text>
                        </View>
                        <View style={{ width: '25%', height: 5, marginHorizontal: 2, backgroundColor: '#EAECF5' }} />
                        <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAECF5' }}>
                            <Text>3</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <Text style={style.lables}>Search Specialities/Doctors</Text>
                        <Text style={style.lables}>Select Time SLot</Text>
                        <Text style={style.lables}>Confirm & Pay</Text>
                    </View>

                    <Text style={style.reason}>Reason for consulting</Text>
                    <View style={{ margin: 10 }}>

                        <Picker
                            style={style.Picker}

                            selectedValue={pick}
                            onValueChange={(itemValue) => setpick(itemValue)}
                        >
                            <Picker.Item label="Chest Pain" value={"Chest Pain"} />
                            <Picker.Item label="Headache" value={"Headache"} />
                            <Picker.Item label="Wheezing" value={"Wheezing"} />
                            <Picker.Item label="Cold" value={"Cold"} />

                        </Picker>
                        {pick == "" ? <View></View> : <Text style={{ fontSize: 15, borderWidth: 0.30, width: 85, marginTop: 5, padding: 5, flexDirection: "row" }}>{pick}</Text>}


                    </View>
                    <Text style={style.reason}> Specialities</Text>
                    <View style={style.sear}>
                        <Image source={require('../Images/search.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
                        <TextInput placeholder="Search Specialities/Doctors " style={{ fontFamily: 'Poppins-Regular', fontSize: 15, width: "65%" }} />
                    </View>
                    <View>
                        {users.map((lista) => {
                            return (
                                <TouchableOpacity
                                    key={lista.id}
                                    onPress={() => movingNxt(lista)}
                                    style={{ padding: 5, marginHorizontal: 28, borderRadius: 10, borderColor: lista.id === border ? "blue" : "", borderWidth: lista.id === border ? 1 : 0 }}>
                                    <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', }}>{lista.tittle}</Text>
                                    <Text style={{ fontSize: 10, fontFamily: 'Poppins-Regular', borderTopWidth: 0.3 }}>{lista.data}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={{ height: 60, width: '100%', backgroundColor: "#2F65EC", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }} >
                        <View style={{ alignItems: "center" }}>
                            <Image source={require('../Images/video-camera1.png')} style={{ width: 25, height: 25, tintColor: "white" }} />
                            <Text style={{ color: "white" }}>Consulting</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Image source={require('../Images/schedule.png')} style={{ width: 25, height: 25, tintColor: "white" }} />
                            <Text style={{ color: "white" }}>Appointments</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Image source={require('../Images/plus.png')} style={{ width: 25, height: 25, tintColor: "white" }} />
                            <Text style={{ color: "white" }}>Records</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </DrawerLayoutAndroid>
    )
}
const style = StyleSheet.create({

    Picker: {
        height: 50,
        width: 350,
        borderRadius: 17,
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
        textAlign: "center",
        alignSelf: "center"
    },
    reason: {
        color: "#064C9F",
        fontSize: 15,
        marginLeft: 15,
        height: 23,
        fontFamily: 'Poppins-SemiBold'
    },
    sear: {
        borderWidth: 0.5,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: "center"
    },
    lables: {
        height: 25, width: 112,
        textAlign: "center",
        fontSize: 10,
        fontFamily: "Poppins-Regular"

    },
    drawlist: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    drawtext: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium'
    }
})