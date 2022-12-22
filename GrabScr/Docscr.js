import React, { useEffect, useState } from "react";
import {
    View, KeyboardAvoidingView, Platform, Dimensions, TouchableOpacity,
    Text, Image, TextInput, FlatList, Button,
    StyleSheet
} from "react-native";
import moment from "moment/moment";
import DateTimePicker from '@react-native-community/datetimepicker';




const docterTime = (props) => {
    const [TimeSlot, setTimeSlot] = useState([])
    const [TimeSlot2, setTimeSlot2] = useState([])
    const [TimeSlot3, setTimeSlot3] = useState([])
    const [timeSelect, setTimeSelect] = useState([])
    // let { screenTitle } = props
    const [topIndex, setTopIndex] = useState(0)
    const [docData, setDocData] = useState([])
    const [docData2, setDocData2] = useState([])
    // const [OTP, setOTP] = useState('')
    const [value, setValue] = useState('');
    // date picker sets
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    // color
    const [bgColor, setBgColor] = useState(false)

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
        setTimeSlot(createTimeslots('08:00AM', '11:30AM'));
        setTimeSlot2(createTimeslots('12:00PM', '04:00PM'));
        setTimeSlot3(createTimeslots('04:00PM', '09:00PM'));
    }, []);
    const [patientArray] = useState([

        {
            id: 1,
            patienName: "rajendra",
            nickName: "mySelf",
            Age: "22",
            img: { URL: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000' },
        },
        {
            id: 2,
            patienName: "phanendra",
            nickName: "dad",
            Age: "24",
            img: { URL: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000' },
        }
    ]);
    const Pdata = ({ item }) => (
        <View style={{ borderWidth: 1, borderColor: "blue", borderRadius: 10, margin: 10, padding: 10, flexDirection: "row", backgroundColor: "#E7F2F8" }}>
            <Image source={item.img} style={{ height: 20, width: 20 }} />
            <View>
                <Text style={{ fontSize: 20 }}>{item.patienName}(<Text style={{ fontSize: 20 }}>{item.nickName}</Text>)</Text>
                <Text style={{ fontSize: 20 }}>{item.Age}</Text>
            </View>
        </View>
    )



    const [DoctorsData] = useState(
        [
            {
                id: 1,
                name: "Dr.S David",
                Speciality: "Orthopedic",
                img: { URL: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000' },
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: true,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu",
                fee: "$ 50"
            },
            {
                id: 2,
                name: "Dr.S srinu",
                Speciality: "Orthopedic",
                img: { URL: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000' },
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: true,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu",
                fee: "$ 50"
            },
            {
                id: 3,
                name: "Dr.S Srikanth",
                Speciality: "Orthopedic",
                img: { URL: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000' },
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: false,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu",
                fee: "$ 50"
            },
            {
                id: 4,
                name: "Dr.S Narender",
                Speciality: "Orthopedic",
                img: { URL: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000' },
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: true,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu",
                fee: "$ 50"
            },
            {
                id: 5,
                name: "Dr.S Raju",
                Speciality: "Orthopedic",
                img: { URL: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000' },
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: true,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu",
                fee: "$ 50"
            },
            {
                id: 6,
                name: "Dr.S Sathish",
                Speciality: "Orthopedic",
                img: { URL: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000' },
                Experiance: "7 years Experiance",
                Desig: "MNAMS,D.N.B Orthopedics,M.B.BS",
                Avilable: false,
                Rating: "4.9",
                Reviews: "Reviews",
                lang: "English,Telugu,Tamil,Hindi",
                Location: "Private hospital in Chennai.Tamil Nadu",
                fee: "$ 50"
            },


        ]
    )
    const _toSelectTime = (item, val) => {
        setTimeSelect(item)
        setValue(item)

    }


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

    const Doctorlist = ({ item }) => (


        <View style={{ margin: 5, padding: 5 }}>

            <TouchableOpacity onPress={() => goNextScreen(item, 1)}>
                <View style={{ flexDirection: "row", backgroundColor: "white", }}>
                    <View>
                        <Image source={item.img} style={{ height: 75, width: 75, borderRadius: 5, margin: 5 }} />
                    </View>
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                        <Text style={{ fontWeight: "bold" }}>{item.Speciality}</Text>
                        <Text style={{ fontWeight: "bold" }}>{item.Experiance}</Text>
                        <Text style={{ fontWeight: "bold" }}>{item.Desig}</Text>
                    </View>
                </View>
            </TouchableOpacity>


            <View style={{ flexDirection: "row", backgroundColor: "white", borderBottomWidth: 0.5, paddingBottom: 5 }}>


                <Text style={[style.text, { backgroundColor: item.Avilable ? 'green' : 'red' }]}>
                    {item.Avilable ? "Online" : "Offline"}
                </Text>

                <TouchableOpacity>
                    <Text style={style.margintext}>
                        {item.Rating}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={style.margintext}>
                        {item.Reviews}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "white", padding: 5 }}>
                <View>
                    <Text>{item.lang}</Text>
                </View>
                <View>
                    <Text>{item.Location}</Text>
                </View>


            </View>
        </View >
    );


    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <View style={{ flex: 1 }}>
                <View style={{ height: 60, width: '100%', flexDirection: 'row', backgroundColor: 'blue', alignItems: 'center' }}>
                    <Image source={require('../Images/left.png')} style={{ height: 30, width: 30, margin: 5, tintColor: "white" }} resizeMode="contain" />
                    <Text style={{ color: "white", fontSize: 25 }}>{topIndex == 0 ? 'Doctor' : (topIndex == 1 ? 'TimeSlot' : 'Consultation Details')}</Text>


                </View>
                <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 10 }}>1</Text>
                    </View>


                    <View style={{ width: '25%', height: 5, marginHorizontal: 2, backgroundColor: topIndex == 1 ? 'green' : topIndex == 0 ? '#EAECF5' : 'green' }} />
                    <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: topIndex == 1 ? 'green' : topIndex == 0 ? '#EAECF5' : 'green' }}>
                        <Text>2</Text>
                    </View>
                    <View style={{ width: '25%', height: 5, marginHorizontal: 2, backgroundColor: topIndex == 2 ? 'green' : '#EAECF5' }} />
                    <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: topIndex == 2 ? 'green' : '#EAECF5' }}>
                        <Text>3</Text>
                    </View>
                </View>
                {topIndex == 0 ?
                    <View style={{ flex: 1 }}>
                        <View>
                            {/* if possible add icon here */}
                            <TextInput placeholder="Search Orthopedic" style={{ backgroundColor: "white", margin: 5, borderRadius: 10, paddingLeft: 10, borderWidth: 0.2, height: 40 }} />
                        </View>
                        <FlatList
                            // style={styles.flatliststyle}
                            data={DoctorsData}
                            renderItem={Doctorlist}
                            keyExtractor={(index) => index.toString()}
                        />
                    </View> : (topIndex == 1 ?
                        <View style={{ margin: 5 }}>

                            <View >
                                <View style={{ backgroundColor: "white", margin: 5, padding: 5, borderWidth: 0.15, borderRadius: 10, marginVertical: 20 }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View>
                                            <Image source={docData.img} style={style.img1} />
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text >{docData.name}</Text>
                                                <Text style={{ marginLeft: 20, color: "gray" }}>{docData.Rating}</Text>
                                            </View>
                                            <Text >{docData.Speciality}</Text>
                                            <Text >{docData.Experiance}</Text>
                                            <Text>Video Consultation</Text>
                                        </View>
                                        <TouchableOpacity >
                                            <Text style={{ marginLeft: 40, color: "blue" }}>View Details</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "center" }}>


                                    <TouchableOpacity onPress={showDatepicker}>
                                        <Image source={require('../Images/calendar.png')} style={{ height: 20, width: 20, tintColor: "blue", margin: 5 }} />
                                    </TouchableOpacity>

                                    <View style={{ borderWidth: 0.10, borderRadius: 5, width: 100, height: 20, textAlign: "center", alignItems: "center", margin: 5 }}>
                                        <Text style={{ color: "blue", }}>{moment(date).format("DD MMM")}</Text>

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


                                <View>
                                    <View>
                                        <Text>Morning          Avialable</Text>

                                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                            {TimeSlot.map((item, index) => (
                                                <TouchableOpacity onPress={() => _toSelectTime(item, index)}  >
                                                    <Text style={[style.Slot, { backgroundColor: value === item ? "blue" : "white" }, { color: value === item ? "white" : "gray" }]}>{item}</Text>
                                                </TouchableOpacity>

                                            ))}

                                        </View>

                                    </View>
                                    <View>
                                        <Text>Noon    Available</Text>

                                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                            {TimeSlot2.map((item, index) => (
                                                <TouchableOpacity onPress={() => _toSelectTime(item, index)}>
                                                    <Text style={[style.Slot, { backgroundColor: value === item ? "blue" : "white" }, { color: value === item ? "white" : "gray" }]}>{item}</Text>
                                                </TouchableOpacity>
                                            ))}

                                        </View>

                                    </View>
                                    <View>
                                        <Text>Evening Available</Text>
                                        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>


                                            {TimeSlot3.map((item, index) => (
                                                <TouchableOpacity onPress={() => _toSelectTime(item, index)} >
                                                    <Text style={[style.Slot, { backgroundColor: value === item ? "blue" : "white" }, { color: value === item ? "white" : "gray" }]}>{item}</Text>
                                                </TouchableOpacity>

                                            ))}


                                        </View>

                                    </View>

                                </View>





                            </View>
                            <View>
                                <TouchableOpacity onPress={() => thirdStep(2)}>
                                    <Text style={style.nxtBotn}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </View> :
                        <View>
                            <View style={style.consulDoc}>

                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <Image source={docData.img} style={style.img1} />
                                    </View>
                                    <View>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text >{docData.name}</Text>
                                            <Text style={{ marginLeft: 20, color: "gray" }}>{docData.Rating}</Text>
                                        </View>
                                        <Text >{docData.Speciality}</Text>
                                        <Text >{docData.Experiance}</Text>
                                        <View style={{ flexDirection: "row", marginVertical: 5 }}>
                                            <Image source={require('../Images/video-camera.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                            <Text>Video Consultation</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity >
                                        <Text style={{ marginLeft: 30, color: "blue" }}>View Details</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ margin: 3 }}>
                                    <Text>Consultation fee  <Text style={{ color: "blue" }}>{docData.fee}</Text></Text>
                                </View>
                                <View style={{ borderTopWidth: 0.5, padding: 5, flexDirection: "row", justifyContent: "space-around", }}>
                                    <View style={{ borderRightWidth: 1, width: '40%' }}>
                                        <Text style={{ color: "blue", textAlign: "center" }}>{moment(date).format("DD MMM")}</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                        <Image source={require('../Images/time.png')} style={{ width: 15, height: 15, marginRight: 3, tintColor: "blue" }} />
                                        <Text style={{ color: "blue" }}>{timeSelect}</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={{ color: "blue", fontSize: 20, margin: 5 }}>Appointment for?</Text>
                            <View style={{ height: 300 }}>
                                <View>
                                    <FlatList
                                        data={patientArray}
                                        keyExtractor={(item) => (item.id)}
                                        renderItem={Pdata}
                                    />
                                </View>
                                <TouchableOpacity>
                                <Text style={{ color: "blue", fontSize: 20, margin: 5 }}>+AddPatient</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity>
                                <View style={{ alignItems: "center", justifyContent: "center", height: 50, width: '100%', backgroundColor: "blue", borderRadius: 10, }}>
                                    <Text style={{ color: "white" }} >Confirm & pay</Text>
                                </View>
                            </TouchableOpacity>

                        </View>)}
            </View>

        </KeyboardAvoidingView>
    );

}
export default docterTime;

const style = StyleSheet.create({
    head: {
        fontWeight: "bold",
        padding: 10,
        fontSize: 25,

        color: "white"
    },
    text: {

        paddingHorizontal: 7,
        borderRadius: 4,
        marginHorizontal: 15
    },
    margintext: {
        marginHorizontal: 20
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
        height: 75,
        width: 75,
        borderRadius: 5,
        marginHorizontal: 5

    },
    Slot: {
        borderWidth: 1,
        margin: 5,
        padding: 5,
        borderRadius: 5,


    },
    nxtBotn: {
        color: "white",
        fontSize: 20,
        borderWidth: 1,
        width: '100%',
        borderColor: "blue",
        backgroundColor: "blue",
        textAlign: "center",
        paddingTop: 12,
        paddingBottom: 12,

        borderRadius: 10
    },
    consulDoc: {
        backgroundColor: "white",
        margin: 5,

        borderWidth: 0.5,
        borderRadius: 10
    }
})