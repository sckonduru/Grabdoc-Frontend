import React, { Component, useEffect, useState } from "react";
import {
    View, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity,
    Text, Image, ScrollView, TextInput, ImageBackground, Keyboard, FlatList,
    StyleSheet
} from "react-native";


const AppointmentsSrc = ({ navigation }) => {
    // let { screenTitle } = props
    const [topIndex, setTopIndex] = useState(0)
    const [docData, setDocData] = useState([])
    const [docData2, setDocData2] = useState([])
    // const [OTP, setOTP] = useState('')
    const [value, setValue] = useState('');
    const [samData] = useState([
        { id: 1, title: 'doc1', status: 'yes' },
        { id: 2, title: 'doc2', status: 'yes' },
        { id: 3, title: 'doc3', status: 'yes' },

    ]);


    const goNextScreen = (item, val) => {
        setDocData(item)
        setTopIndex(val)
        console.log('item', item, val, docData);
    }
    const thirdStep = (val) => {
        // setDocData(item)
        setTopIndex(val)
        console.log('item', val, docData);
    }


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", height: 40, alignItems: "center", backgroundColor: "#2F65EC" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require('../Images/left.png')} style={{ height: 20, width: 20, marginHorizontal: 10, tintColor: "white" }} />
                        <Text style={{ fontSize: 25,fontFamily:'Poppins-SemiBold', color: "white" }}>Appointments</Text>
                    </View>
                    <Image source={require('../Images1/bell-1.png')} style={{ height: 20, width: 20, tintColor: "white", marginHorizontal: 10 }} />


                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
                    <TouchableOpacity
                        onPress={() => setTopIndex(0)}
                        style={[styles.sections, { backgroundColor: topIndex === 0 ? "#2F65EC" : "#EBEBEB", }]}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: topIndex === 0 ? "#FFFFFF" : "#292929" }}>Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.sections, { backgroundColor: topIndex === 1 ? "#2F65EC" : "#EBEBEB", }]}
                        onPress={() => setTopIndex(1)}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: topIndex === 1 ? "#FFFFFF" : "#292929" }}>Complete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.sections, { backgroundColor: topIndex === 2 ? "#2F65EC" : "#EBEBEB", }]}
                        onPress={() => setTopIndex(2)}>
                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: topIndex === 2 ? "#FFFFFF" : "#292929" }}>Cancelled</Text>
                    </TouchableOpacity>


                </View>


                {topIndex == 0 ?
                    <ScrollView>
                        <View style={{ flex: 1, marginBottom: 50 }}>
                            <View>
                                <View style={{ margin: 10, backgroundColor: "white", borderRadius: 10, elevation: 10, borderTopLeftRadius: 6 }}>
                                    <View style={{ flexDirection: "row", marginHorizontal: 10, marginTop: 10 }}>
                                        <View>
                                            <Image source={require('../Images1/docter-1.png')} style={{ height: 80, width: 80, marginHorizontal: 8 }} />
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                                <Text style={{ color: '#000000', fontFamily: 'Poppins-Regular', fontSize: 16 }}>Dr. S David</Text>
                                                <Image source={require('../Images/star.png')} style={{ height: 10, width: 10, marginLeft: 5 }} />
                                                <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>4.9</Text>
                                            </View>
                                            <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }}>Orthopedic</Text>
                                            <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }}>7 Years of Experiance</Text>
                                            <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>MNSMS.D.N.B. Orthopedics,M.B.Bs</Text>
                                        </View>

                                    </View>
                                    <View style={{ borderBottomWidth: 1, flexDirection: "row", borderColor: '#EDEDED', padding: 5, alignItems: "center", paddingLeft: 10 }}>
                                        <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }} > Appointment for:  </Text>
                                        <Image source={require('../Images1/Framepersonlogo.png')} resizeMode="contain" style={{ tintColor: '#2F65EC', width: 10, height: 10, marginHorizontal: 5 }} />
                                        <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>Pooja Hegde (Myself)</Text>

                                    </View >
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", borderColor: '#EDEDED', borderBottomWidth: 1, padding: 5 }}>
                                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                            <Image source={require('../Images1/calender.png')} resizeMode='contain' style={{ height: 12, width: 12, tintColor: '#2F65EC', marginHorizontal: 4 }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>12-may</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                            <Image source={require('../Images1/time.png')} resizeMode='contain' style={{ height: 12, width: 12, tintColor: '#2F65EC', marginHorizontal: 4 }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>8:30AM</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('uploadfiles')} style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: '#EDEDED', borderRadius: 11, width: 98, height: 27, justifyContent: "center" }}>
                                            <Image source={require('../Images1/upload.png')} resizeMode='contain' style={{ width: 15, height: 15, tintColor: '#8B8585' }} />
                                            <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>Upload Report</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: 98, height: 27, borderWidth: 1, borderRadius: 11, borderColor: '#EDEDED', alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>Reschedule</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: 98, height: 27, borderWidth: 1, borderRadius: 11, borderColor: '#EDEDED', alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ margin: 10, backgroundColor: "white", borderRadius: 10, elevation: 10, borderTopLeftRadius: 10 }}>
                                    <View style={{ flexDirection: "row", margin: 10 }}>
                                        <View>
                                            <Image source={require('../Images/docter.jpg')} style={{ height: 80, width: 80, }} />
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text>Dr. S David</Text>
                                                <Image source={require('../Images/star.png')} style={{ height: 15, width: 15, marginLeft: 5 }} />

                                                <Text>4.9</Text>
                                            </View>
                                            <Text>Orthopedic</Text>
                                            <Text>7 Years of Experiance</Text>
                                            <Text>MNSMS.D.N.B. Orthopedics,M.B.Bs</Text>
                                        </View>

                                    </View>
                                    <View style={{ borderBottomWidth: 0.3, flexDirection: "row", padding: 5, alignItems: "center" }}>
                                        <Text> Appointment for:  </Text>
                                        <Image source={require('../Images/Person1.jpg')} style={{ width: 20, height: 20 }} />
                                        <Text>Kapoor(dad)</Text>

                                    </View >
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 0.3, padding: 5 }}>
                                        <Text>12may</Text>
                                        <Text>9:30AM</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10, height: 40 }}>
                                        <TouchableOpacity onPress={() => navigation.navigate('uploadfiles')} style={{ flexDirection: "row", alignItems: "center", borderWidth: 0.20, borderRadius: 5, paddingHorizontal: 5 }}>
                                            <Image source={require('../Images/notes.png')} style={{ width: 15, height: 15 }} />
                                            <Text>Upload Report</Text>
                                        </TouchableOpacity>
                                        <Text style={{ borderWidth: 0.20, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5, alignSelf: "center", }}>Reschedule</Text>
                                        <View style={{ alignItems: "center" }}>
                                            <Text style={{ fontSize: 15 }}>Consult</Text>
                                            <Text style={{ borderWidth: 0.20, borderRadius: 5, paddingHorizontal: 15, paddingVertical: 2, backgroundColor: "green" }}>in 15 min</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ margin: 10, backgroundColor: "white", borderRadius: 10, elevation: 10, borderTopLeftRadius: 10 }}>
                                    <View style={{ flexDirection: "row", margin: 10 }}>
                                        <View>
                                            <Image source={require('../Images/docter.jpg')} style={{ height: 80, width: 80, }} />
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text>Dr. S David</Text>
                                                <Image source={require('../Images/star.png')} style={{ height: 15, width: 15, marginLeft: 5 }} />
                                                <Text>4.9</Text>
                                            </View>
                                            <Text>Orthopedic</Text>
                                            <Text>7 Years of Experiance</Text>
                                            <Text>MNSMS.D.N.B. Orthopedics,M.B.Bs</Text>
                                        </View>

                                    </View>
                                    <View style={{ borderBottomWidth: 0.3, flexDirection: "row", padding: 5, alignItems: "center" }}>
                                        <Text> Appointment for:  </Text>
                                        <Image source={require('../Images/Person1.jpg')} style={{ width: 20, height: 20 }} />
                                        <Text>Pooja Hegde(Myself)</Text>

                                    </View >
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 0.3, padding: 5 }}>
                                        <Text>12may</Text>
                                        <Text>8:30AM</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 0.20, borderRadius: 5, padding: 5 }}>
                                            <Image source={require('../Images/notes.png')} style={{ width: 15, height: 15 }} />
                                            <Text>Upload Report</Text>
                                        </View>
                                        <Text style={{ borderWidth: 0.20, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 5 }}>Reschedule</Text>
                                        <TouchableOpacity onPress={() => navigation.navigate('vcScreen1')}>
                                            <Text style={{ borderWidth: 0.20, borderRadius: 5, paddingHorizontal: 25, paddingVertical: 5, backgroundColor: "green" }}>Join</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView> : (topIndex == 1 ?



                        // complete









                        <View style={{ flex: 1 }}>
                            <View>
                                <View style={{ margin: 10, backgroundColor: "white", borderRadius: 10, elevation: 10, borderTopLeftRadius: 10 }}>
                                    <View style={{ flexDirection: "row", margin: 10 }}>
                                        <View>
                                            <Image source={require('../Images1/docter-1.png')} style={{ height: 82, width: 89,marginRight:8 }} />
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                                <Text style={{ color: '#000000', fontFamily: 'Poppins-Regular', fontSize: 16 }}>Dr. S David</Text>
                                                <Image source={require('../Images/star.png')} style={{ height: 10, width: 10, marginHorizontal: 5 }} />
                                                <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 11 }}>4.9</Text>
                                                <TouchableOpacity style={{ marginLeft: 60, }}>
                                                    <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Regular', fontSize: 10, }}>Write a Review</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }}>Orthopedic</Text>
                                            <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }}>7 Years of Experiance</Text>
                                            <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>MNSMS.D.N.B. Orthopedics,M.B.Bs</Text>
                                        </View>

                                    </View>
                                    <View style={{ borderBottomWidth: 1, flexDirection: "row", borderColor: '#EDEDED', padding: 5, alignItems: "center", paddingLeft: 10 }}>
                                        <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }} > Appointment for:  </Text>
                                        <Image source={require('../Images1/Framepersonlogo.png')} resizeMode="contain" style={{ tintColor: '#2F65EC', width: 10, height: 10, marginHorizontal: 5 }} />
                                        <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>Pooja Hegde (Myself)</Text>

                                    </View >
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", borderColor: '#EDEDED', borderBottomWidth: 1, padding: 5 }}>
                                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                            <Image source={require('../Images1/calender.png')} resizeMode='contain' style={{ height: 12, width: 12, tintColor: '#2F65EC', marginHorizontal: 4 }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>12-may</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                                            <Image source={require('../Images1/time.png')} resizeMode='contain' style={{ height: 12, width: 12, tintColor: '#2F65EC', marginHorizontal: 4 }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>8:30AM</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10, height: 40 }}>
                                        <TouchableOpacity style={{height:27,width:89,borderColor:'#EDEDED', flexDirection: "row",justifyContent:"center", alignItems: "center", borderWidth: 1, borderRadius: 11, }}>
                                            <Image source={require('../Images/download.png')} style={{ width: 15, height: 15 }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>Invoice</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('summaryScr')} style={{height:27,width:89,borderColor:'#EDEDED', flexDirection: "row", alignItems: "center", borderWidth:1, alignItems: "center", borderRadius: 11, paddingHorizontal: 5 }}>

                                            <Image source={require('../Images/clipboard.png')} style={{ width: 15, height: 15 }} />
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>Summary</Text>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={{height:27,width:89, borderWidth: 1,borderColor:'#EDEDED', borderRadius: 11,alignItems: "center",justifyContent: "center" }}>
                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 11 }}>Rebook</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ margin: 10, backgroundColor: "white", borderRadius: 10, elevation: 10, borderTopLeftRadius: 10 }}>
                                    <View style={{ flexDirection: "row", margin: 10 }}>
                                        <View>
                                            <Image source={require('../Images/docter.jpg')} style={{ height: 80, width: 80, }} />
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text>Dr. S David</Text>
                                                <Image source={require('../Images/star.png')} style={{ height: 15, width: 15, marginLeft: 5 }} />

                                                <Text>4.9</Text>
                                            </View>
                                            <Text>Orthopedic</Text>
                                            <Text>7 Years of Experiance</Text>
                                            <Text>MNSMS.D.N.B. Orthopedics,M.B.Bs</Text>
                                        </View>

                                    </View>
                                    <View style={{ borderBottomWidth: 0.3, flexDirection: "row", padding: 5, alignItems: "center" }}>
                                        <Text> Appointment for:  </Text>
                                        <Image source={require('../Images/Person1.jpg')} style={{ width: 20, height: 20 }} />
                                        <Text>Kapoor(dad)</Text>

                                    </View >
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 0.3, padding: 5 }}>
                                        <Text>12may</Text>
                                        <Text>9:30AM</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10, height: 40 }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 0.20, borderRadius: 5, paddingHorizontal: 5 }}>
                                            <Image source={require('../Images/download.png')} style={{ width: 15, height: 15 }} />
                                            <Text>Invoice</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 0.20, borderRadius: 5, paddingHorizontal: 5 }}>
                                            <Image source={require('../Images/clipboard.png')} style={{ width: 15, height: 15 }} />
                                            <Text>Summary</Text>
                                        </View>
                                        <View style={{ borderWidth: 0.20, borderRadius: 5, paddingHorizontal: 15, paddingVertical: 10, alignSelf: "center" }}>
                                            <Text >Rebook</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                        </View> :
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => thirdStep(2)}>
                                <View style={{}}>
                                    <Text>cancelled meeeting</Text>
                                </View>
                            </TouchableOpacity>


                        </View>)}
            </View>

        </KeyboardAvoidingView>
    );

}
export default AppointmentsSrc;


const styles = StyleSheet.create({
    sections: {
        width: 109,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
    },
})