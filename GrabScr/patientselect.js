import React, { useEffect, useState } from "react";
import {
    View, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity,
    Text, Image, TextInput, FlatList, Modal, TouchableWithoutFeedback,
    StyleSheet,
    ScrollView,
    StatusBar
} from "react-native";
import moment from "moment/moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomCustom from "./custombottom";



export default function Patientselection({ route, navigation }) {
    const [payIndex, setPayIndex] = useState(0)
    // patient selection 
    const [patientslect, setPatienselect] = useState('')
    // payment method selection 
    const [paymethos, setpaymathods] = useState('')
    // modal
    const [visible, setVisible] = useState(false)
    const starttModal = () => {
        setVisible(true)
        setTimeout(() =>
            setVisible(false)

            , 3000);
    }
    let paymethods = [
        { id: 1, method: 'pay on vista', payimg: require('../Images1/Framepay.png') },
        { id: 2, method: 'Amazom Pay', payimg: require('../Images1/AmazonPay.png') },
        { id: 3, method: 'Card', payimg: require('../Images1/Framecard.png') },
        { id: 4, method: 'paypall', payimg: require('../Images1/Paypa.png') },
        { id: 5, method: 'Skrill', payimg: require('../Images1/Framesk.png') }
    ]


    let patientArray = [

        {
            id: 101,
            patienName: "rajendra",
            nickName: "mySelf",
            Age: "22",
            imglady: require('../Images1/lady.png')
        },
        {
            id: 102,
            patienName: "phanendra",
            nickName: "dad",
            Age: "24",
            imglady: require('../Images1/lady.png')

        }
    ];
    const patient_select = (id) => {
        setPatienselect(id)

    }

    return (
        <View style={{ height: '100%' }}>
            <StatusBar backgroundColor={"#2F65EC"} />
            <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#2F65EC', alignItems: 'center', justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Image source={require('../Images/arrow.png')} style={{ height: 16, width: 16, marginLeft: 20, marginRight: 10, tintColor: "white" }} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 25, fontFamily: 'Poppins-SemiBold' }}>Consultaton Details</Text>
                </View>
                <Image source={require('../Images1/bell-1.png')} style={{ height: 16, width: 16, marginRight: 12, tintColor: "white" }} resizeMode="contain" />
            </View>
            <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: '#2F65EC', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 10, color: "white" }}>1</Text>
                </View>


                <View style={{ width: '25%', height: 1, marginHorizontal: 2, backgroundColor: '#2F65EC' }} />
                <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F65EC', borderWidth: 1, borderColor: '#C5C5C5' }}>
                    <Text style={{ color: 'white' }}>2</Text>
                </View>
                <View style={{ width: '25%', height: 1, marginHorizontal: 2, backgroundColor: '#2F65EC' }} />
                <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2F65EC', borderWidth: 1, borderColor: '#C5C5C5' }}>
                    <Text style={{ color: 'white' }}>3</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={[style.lables, { width: 105, marginLeft: 18, color: '#235BE5' }]}>Search Specialities/Doctors</Text>
                <Text style={[style.lables, { width: 55, marginLeft: 44, color: '#235BE5' }]}>Select Time SLot</Text>
                <Text style={[style.lables, { width: 45, marginLeft: 85, color: '#235BE5' }]}>Confirm & Pay</Text>
            </View>
            <ScrollView>
                <View style={style.consulDoc}>
                    <View style={{
                        backgroundColor: 'white',
                        borderTopLeftRadius: 11,
                        borderTopEndRadius: 11,
                        paddingHorizontal: 5,
                        paddingVertical: 10
                    }}>

                        <View style={{ flexDirection: "row", }}>
                            <View>
                                <Image source={route.params.docData.img} style={style.img1} />
                            </View>
                            <View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "baseline"
                                }}>
                                    <Text style={{
                                        fontFamily: 'Poppins-Regular',
                                        fontSize: 16, color: '#000000'
                                    }} >
                                        {route.params.docData.name}
                                    </Text>
                                    <Image source={require('../Images/star.png')}
                                        resizeMode="contain"
                                        style={{ height: 10, width: 10, marginLeft: 15, alignSelf: "center" }} />
                                    <Text style={{ fontFamily: 'Poppins-regular', fontSize: 10, color: "#8B8585" }}>{route.params.docData.Rating}</Text>
                                </View>
                                <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }} >{route.params.docData.Speciality}</Text>
                                <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }}>{route.params.docData.Experiance}</Text>
                                <View style={{ flexDirection: "row", marginVertical: 5, alignItems: "baseline" }}>
                                    <Image source={require('../Images/video-camera.png')} style={{ width: 17, tintColor: '#2F65EC', height: 11, marginRight: 5 }} />
                                    <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 13 }}>Video Consultation</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('ViewDocDetails')} style={{ alignItems: "center", marginLeft: 30 }} >
                                <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Regular', fontSize: 11 }}>View Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "baseline",
                            marginLeft: 5
                        }}>
                            <Text
                                style={{
                                    color: "#8B8585",
                                    fontFamily: 'Poppins-Light',
                                    fontSize: 10
                                }}>Consultation fee </Text>
                            <Text
                                style={{
                                    color: "#2F65EC",
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 13,
                                    marginLeft: 10
                                }}
                            >
                                {route.params.docData.fee}
                            </Text>
                        </View>

                    </View>
                    <View style={{ borderTopWidth: 0.5, padding: 5, flexDirection: "row", justifyContent: "space-around", }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../Images1/calender.png')}
                                resizeMode="contain"
                                style={{ width: 12, tintColor: '#2F65EC', height: 12, marginRight: 4 }} />
                            <Text style={{ color: "#2F65EC", fontSize: 11, textAlign: "center" }}>{route.params.time}</Text>
                        </View>
                        <View style={{ width: 1, backgroundColor: '#DADADA' }} />
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images/time.png')}
                                resizeMode="contain" style={{ width: 15, height: 15, marginRight: 3, tintColor: "#2F65EC" }} />
                            <Text style={{ color: "#2F65EC", fontSize: 11 }}>{route.params.datesel}</Text>
                        </View>
                    </View>
                </View>
                {payIndex === 0 ?
                    <View >
                        <Text style={{ color: "#064C9F", fontSize: 16, marginLeft: 24 }}>Appointment for?</Text>
                        <View style={{}}>
                            <View>

                                {patientArray.map((pat) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => patient_select(pat.id)}
                                            key={pat.id}
                                            style={{
                                                flexDirection: "row",
                                                borderWidth: 1,
                                                borderRadius: 11,
                                                marginHorizontal: 24,
                                                marginVertical: 8,
                                                alignItems: "center",
                                                borderColor: patientslect === pat.id ? '#2F65EC' : '#D4D4D4',
                                                justifyContent: "space-between",
                                                backgroundColor: '#D4D4D4',
                                            }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                <Image source={pat.imglady} resizeMode="center"
                                                    style={{ width: 42, height: 38, marginHorizontal: 12, marginVertical: 14 }} />
                                                <View>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <View>
                                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#8B8585' }}>{pat.patienName}</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#8B8585' }}>({pat.nickName})</Text>
                                                        </View>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 13, color: '#2F65EC' }}>Age:{pat.Age}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            {patientslect === pat.id ?
                                                <View style={{ width: 12, height: 12, borderRadius: 6, borderColor: '#2F65EC', borderWidth: 1, marginRight: 10 }} /> : <View></View>
                                            }
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('Addpatient')}>
                                <Text style={{ color: "#064C9F", fontFamily: 'Poppins-Regular', fontSize: 16, marginLeft: 24 }}>+AddPatient</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setPayIndex(1)} style={{ alignItems: "center", marginTop: 20, justifyContent: "center", height: 52, width: 352, backgroundColor: "#2F65EC", borderRadius: 15, alignSelf: "center" }}>
                            <Text style={{ color: "#FFFFFF", fontFamily: 'Poppins-SemiBold', fontSize: 20 }} >Confirm & pay</Text>
                        </TouchableOpacity>
                    </View> :
                    <View style={{ marginBottom: 50 }}>
                        <View>
                            <Text style={{ color: "#2F65EC", fontSize: 22, marginLeft: 25, fontFamily: 'Poppins-Medium' }}>Pay $ 50</Text>
                        </View>
                        {paymethods.map((payme) => {
                            return (
                                <TouchableWithoutFeedback key={payme.id} onPress={() => setpaymathods(payme.id)} >
                                    <View style={{
                                        alignSelf: "center",
                                        marginVertical: 10,
                                        height: 61, width: 366,
                                        borderWidth: 1, borderColor: '#C4C4C4',
                                        flexDirection: "row",
                                        alignItems: "center",
                                        borderRadius: 13,
                                        justifyContent: "space-between"
                                    }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                                            <Image source={payme.payimg} resizeMode="contain" style={{ height: 25, width: 30, marginLeft: 10 }} />
                                            <Text style={{ marginLeft: 16, fontFamily: 'Poppins-Regular', color: '#8B8585' }}>{payme.method}</Text>
                                        </View>
                                        <View style={{
                                            height: 16,
                                            width: 16, borderWidth: 1,
                                            borderRadius: 8,
                                            marginRight: 10,
                                            borderColor: paymethos === payme.id ? "#064C9F" : "#C4C4C4"
                                        }} />
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}

                        <TouchableOpacity onPress={() => starttModal()} style={{ borderRadius: 10, marginVertical: 10, marginHorizontal: 10, width: 351, height: 52, backgroundColor: "#2F65EC", marginBottom: 30, alignItems: "center", justifyContent: "center", alignSelf: "center" }} >

                            <Text style={{ color: "#FFFFFF", fontFamily: 'Poppins-SemiBold', fontSize: 20 }}>Pay</Text>

                        </TouchableOpacity>

                        <View>

                            <Modal visible={visible} transparent={false}  >
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ height: 203, width: 208, borderRadius: 35, justifyContent: "center", alignItems: "center", backgroundColor: "#2F65EC" }}>
                                        <View style={{ width: 54, height: 54, backgroundColor: 'white', borderRadius: 27, alignItems: "center", justifyContent: "center" }}>
                                            <Image source={require('../Images1/ckeckmark.png')} style={{ width: 40, height: 40 }} />
                                        </View>
                                        <Text style={{ color: "#FFFFFF", fontFamily: 'Poppins-Medium', textAlign: "center", marginHorizontal: 5, fontSize: 25 }}>Payment Successfull!</Text>
                                    </View>
                                </View>
                            </Modal>
                        </View>

                    </View >
                }



            </ScrollView>





            <BottomCustom />
        </View>
    )
}

const style = StyleSheet.create({

    head: {
        fontWeight: "bold",
        padding: 10,
        fontSize: 25,

        color: "white"
    },

    onoroff: {
        color: 'white',
        paddingHorizontal: 7,
        borderRadius: 4,
        marginHorizontal: 15,
        fontSize: 13,
        fontFamily: 'Poppins-Regular'
    },
    margintext: {
        marginHorizontal: 20,
        fontFamily: 'Poppins-Regular',
        fontSize: 13

    },
    button: {
        color: "black"
    },
    but: {
        width: 100,
        padding: 10,
        backgroundColor: "skyblue",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        borderRadius: 5
    },
    img1: {
        height: 92,
        width: 92,
        borderRadius: 5,
        marginHorizontal: 5,
        margin: 4,
        marginRight: 10

    },
    lables: {

        textAlign: "center",
        fontSize: 10,
        marginTop: -10,
        fontFamily: "Poppins-Regular",
        //   marginBottom:5

    },
    Slot: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10.5,
    },
    stlslot: {
        borderRadius: 7,
        borderWidth: 1,
        width: 70, paddingVertical: 6, alignItems: "center", justifyContent: "center",
        margin: 5, borderColor: '#B2B7C5'
    },
    nxttext: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'
    },
    nxtBotn: {
        backgroundColor: '#2F65EC',
        height: 52,
        width: 352,
        marginVertical: 23,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        alignSelf: "center"
    },
    consulDoc: {
        backgroundColor: "white",
        margin: 15,
        borderWidth: 0.5,
        borderRadius: 11,
        borderColor: '#C4C4C4'
    }
})