import React, { useEffect, useState } from "react";
import {
    View, Platform, TouchableOpacity,
    Text, Image,
    StyleSheet,
    ScrollView,
    StatusBar
} from "react-native";
import moment from "moment/moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomCustom from "./custombottom";


export default function Timeslots({ route, navigation }) {
    let docselect= route.params.docter
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [TimeSlot, setTimeSlot] = useState([])
    const [TimeSlot2, setTimeSlot2] = useState([])
    const [TimeSlot3, setTimeSlot3] = useState([])
    const [timeSelect, setTimeSelect] = useState([])

    const [value, setValue] = useState('');

   
    const _toSelectTime = (item) => {
        setTimeSelect(item)
        setValue(item)
    

    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const createTimeslots = (fromTime, toTime) => {
        let startTime = moment(fromTime, 'hh:mm A');
        let endTime = moment(toTime, 'hh:mm A');
        if (endTime.isBefore(startTime)) {
            endTime.add(1, 'day');
        }
        let array = [];
        while (startTime <= endTime) {
            array.push(new moment(startTime).format('hh:mm A'));
            startTime.add(30, 'minute');
        }
        return array;
    }
    useEffect(() => {
        { setTimeSlot(createTimeslots('08:00AM', '11:30AM')) };
        { setTimeSlot2(createTimeslots('12:00PM', '04:00PM')) };
        { setTimeSlot3(createTimeslots('04:00PM', '09:00PM')) };
    }, []);


    return (
        <View style={{height:'100%'}}>
            <StatusBar backgroundColor={"#2F65EC"} />
            <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#2F65EC', alignItems: 'center', justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <TouchableOpacity>
                        <Image source={require('../Images/arrow.png')} style={{ height: 16, width: 16, marginLeft: 20, marginRight: 10, tintColor: "white" }} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 25, fontFamily: 'Poppins-SemiBold' }}>Time Slots</Text>
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
                <View style={{ width: '25%', height: 1, marginHorizontal: 2, backgroundColor: '#C5C5C5' }} />
                <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EDEDED', borderWidth: 1, borderColor: '#C5C5C5' }}>
                    <Text style={{ color: '#C5C5C5' }}>3</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={[style.lables, { width: 105, marginLeft: 18, color: '#235BE5' }]}>Search Specialities/Doctors</Text>
                <Text style={[style.lables, { width: 55, marginLeft: 44, color: '#235BE5' }]}>Select Time SLot</Text>
                <Text style={[style.lables, { width: 45, marginLeft: 85 }]}>Confirm & Pay</Text>
            </View>

            <ScrollView>






                {/* 00000   Time Slot part    00000 */}




                <View style={{
                    flexDirection: "row",
                    width: 365,
                    alignSelf: "center",
                    padding: 4 + 4,
                    borderRadius: 11,
                    borderWidth: 1,
                    marginTop: 5,
                    marginBottom: 10,
                    borderColor: '#D4D4D4'
                }}>
                    <View>
                        <Image source={route.params.docter.img} style={style.img1} />
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000000' }} >{route.params.docter.name}</Text>
                            <Image source={route.params.docter.imgstr}
                                style={{ marginLeft: 20, width: 14, height: 14 }} />
                            <Text style={{ marginLeft: 2, color: "gray" }}>{route.params.docter.Rating}</Text>
                        </View>
                        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11, color: '#2F65EC' }} >{route.params.docter.Speciality}</Text>
                        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11, color: '#2F65EC' }}>{route.params.docter.Experiance}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={require('../Images/video-camera.png')}
                                resizeMode="cover"
                                style={{ width: 17, height: 11.33, tintColor: '#2F65EC' }} />
                            <Text style={{
                                fontFamily: 'Poppins-Regular',
                                fontSize: 12, marginLeft: 3
                            }}>Video Consultation</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ViewDocDetails')} style={{ height: 25, width: 100, alignItems: "center", marginLeft: 20, justifyContent: "center" }}>
                        <Text style={{ marginLeft: 0, color: "#2F65EC", fontFamily: 'Poppins-Regular', fontSize: 10.8 }}>View Profile</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 5 }}>


                    <TouchableOpacity onPress={showDatepicker}>
                        <Image source={require('../Images/calendar.png')} style={{ height: 20, width: 20, tintColor: "#2F65EC", margin: 5 }} />
                    </TouchableOpacity>

                    <View style={{ borderWidth: 1, borderColor: '#D4D4D4', borderRadius: 11, width: 140, height: 29, textAlign: "center", alignItems: "center", justifyContent: "center", margin: 5 }}>
                        <Text style={{ color: "#2F65EC", fontFamily: 'Poppins-Bold', fontSize: 10 }}>
                            <Image source={require('../Images1/angle-leftjstarrow.png')} style={{ width: 14, height: 14 }} />
                           {/* {currentDate===date?<Text>Today,</Text>:""}  */}
                           {moment(date).format("DD MMM")}
                            <Image source={require('../Images1/angle-leftright.png')} style={{ width: 14, height: 14 }} />
                        </Text>

                    </View>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={false}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>






                <View style={{ marginHorizontal: 30 }}>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>

                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8585', fontSize: 16 }}>Morning
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8585', fontSize: 13, marginLeft: 6 }}>
                                slots Avialable</Text>
                        </View>


                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                            {TimeSlot.map((item, index) => (
                                <TouchableOpacity key={index + 90} onPress={() => _toSelectTime(item, index)}
                                    style={[style.stlslot, {
                                        backgroundColor: value === item ? "#2F65EC" : "white",
                                    }]} >
                                    <Text style={[style.Slot, { color: value === item ? "white" : "#2F65EC" }]}>{item}</Text>
                                </TouchableOpacity>

                            ))}

                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>

                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8585', fontSize: 16 }}>Noon
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8585', fontSize: 13, marginLeft: 6 }}>
                                slots Avialable</Text>
                        </View>
                        

                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                            {TimeSlot2.map((item, index) => (
                                <TouchableOpacity onPress={() => _toSelectTime(item, index)}
                                    key={index + 20}
                                    style={[style.stlslot, {
                                        backgroundColor: value === item ? "#2F65EC" : "white",
                                    }]}>
                                    <Text style={[style.Slot, { color: value === item ? "white" : "#2F65EC" }]} >{item}</Text>
                                </TouchableOpacity>
                            ))}

                        </View>

                    </View>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "baseline" }}>

                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8585', fontSize: 16 }}>Evening
                            </Text>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#8B8585', fontSize: 13, marginLeft: 6 }}>
                                slots Avialable</Text>
                        </View>

                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>


                            {TimeSlot3.map((item, index) => (
                                <TouchableOpacity onPress={() => _toSelectTime(item, index)}
                                    key={index + 50}
                                    style={[style.stlslot, {
                                        backgroundColor: value === item ? "#2F65EC" : "white",
                                    }]}>
                                    <Text style={[style.Slot, { color: value === item ? "white" : "#2F65EC" }]} >{item}</Text>
                                </TouchableOpacity>

                            ))}


                        </View>

                    </View>

                </View>






                <View style={{ marginBottom: 50 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('patient',{docData:docselect,time:timeSelect,datesel:mode})} style={style.nxtBotn}>
                        <Text style={style.nxttext}>Next</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <BottomCustom/>
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
