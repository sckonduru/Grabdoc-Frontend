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




const OTPScreen = ({ navigation }) => {
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
    // Pay index
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





    let [DoctorsData] = useState(
        [
            {
                id: 1,
                name: "Dr.S David",
                Speciality: "Orthopedic",
                img: require('../Images1/docter-1.png'),
                imgstr: require('../Images/star.png'),
                imgloc: require('../Images1/Frameloc.png'),
                imgvoc: require('../Images1/Framevoc.png'),
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
                img: require('../Images1/docter-1.png'),
                imgstr: require('../Images/star.png'),
                imgloc: require('../Images1/Frameloc.png'),
                imgvoc: require('../Images1/Framevoc.png'),
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
                imgstr: require('../Images/star.png'),
                img: require('../Images1/docter-1.png'),
                imgloc: require('../Images1/Frameloc.png'),
                imgvoc: require('../Images1/Framevoc.png'),
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
                imgstr: require('../Images/star.png'),
                img: require('../Images1/docter-1.png'),
                imgloc: require('../Images1/Frameloc.png'),
                imgvoc: require('../Images1/Framevoc.png'),
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
                imgstr: require('../Images/star.png'),
                imgloc: require('../Images1/Frameloc.png'),
                imgvoc: require('../Images1/Framevoc.png'),
                img: require('../Images1/docter-1.png'),
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
                imgstr: require('../Images/star.png'),
                imgloc: require('../Images1/Frameloc.png'),
                imgvoc: require('../Images1/Framevoc.png'),
                img: require('../Images1/docter-1.png'),
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
    const _toSelectTime = (item) => {
        setTimeSelect(item)
        setValue(item)

    }


    const goNextScreen = (item, val) => {
        setDocData(item)
        setTopIndex(val)

    }
    const thirdStep = (val) => {
        setTopIndex(val)

    }
    const patient_select = (id) => {
        setPatienselect(id)

    }


    const Doctorlist = ({ item }) => (


        <View key={item.id} style={{
            borderRadius: 6,
            padding: 8,
            marginHorizontal: 23,
            marginVertical: 6,
            backgroundColor: 'white'
        }}>

            <TouchableOpacity onPress={() => goNextScreen(item, 1)}>
                <View style={{ flexDirection: "row", backgroundColor: "white", }}>
                    <View>
                        <Image source={item.img} style={{ height: 82, width: 83, borderRadius: 5, margin: 5 }} />
                    </View>
                    <View style={{ margin: 5 }}>
                        <View>
                            <Text style={{ fontFamily: 'Poppins-Regular', color: '#000000', fontSize: 16 }}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }}>{item.Speciality}</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }}>{item.Experiance}</Text>
                        </View>
                        <View>
                            <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>{item.Desig}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>


            <View style={{ flexDirection: "row", backgroundColor: "white", borderBottomWidth: 0.5, paddingBottom: 5 }}>


                <Text style={[style.onoroff, { backgroundColor: item.Avilable ? 'green' : 'red' }]}>
                    {item.Avilable ? "Online" : "Offline"}
                </Text>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <View>
                        <Image source={item.imgstr} style={{ width: 14, height: 13 }} />
                    </View>
                    <View>
                        <Text style={[style.margintext, { marginLeft: 3, textAlign: "center" }]}>
                            {item.Rating}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View >

                    <TouchableOpacity>
                        <Text style={style.margintext}>
                            {item.Reviews}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: "white", marginTop: 8, marginLeft: 2 }}>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image source={item.imgvoc} style={{ height: 13, width: 9, marginRight: 3 }} />
                    </View>
                    <View>
                        <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>{item.lang}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <Image source={item.imgloc} style={{ height: 11, width: 7.7, marginRight: 3 }} />
                    </View>
                    <View>
                        <Text style={{ color: '#8B8585', fontFamily: 'Poppins-Regular', fontSize: 10 }}>{item.Location}</Text>
                    </View>
                </View>


            </View>
        </View >
    );







    {/* 00000   Hreader part    00000 */ }





    return (

        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get("window").height }}>
            <StatusBar backgroundColor={"#2F65EC"} />
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#2F65EC', alignItems: 'center', justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <TouchableOpacity>
                            <Image source={require('../Images/arrow.png')} style={{ height: 16, width: 16, marginLeft: 20, marginRight: 10, tintColor: "white" }} resizeMode="contain" />
                        </TouchableOpacity>
                        <Text style={{ color: "white", fontSize: 25, fontFamily: 'Poppins-SemiBold' }}>{topIndex == 0 ? 'Doctor' : (topIndex == 1 ? 'TimeSlot' : 'Consultation Details')}</Text>
                    </View>
                    <Image source={require('../Images1/bell-1.png')} style={{ height: 16, width: 16, marginRight: 12, tintColor: "white" }} resizeMode="contain" />
                </View>
                <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: '#2F65EC', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 10, color: "white" }}>1</Text>
                    </View>


                    <View style={{ width: '25%', height: 5, marginHorizontal: 2, backgroundColor: topIndex == 1 ? '#2F65EC' : topIndex == 0 ? '#EAECF5' : '#2F65EC' }} />
                    <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: topIndex == 1 ? '#2F65EC' : topIndex == 0 ? '#EAECF5' : '#2F65EC' }}>
                        <Text style={{ color: topIndex == 1 ? 'white' : topIndex == 0 ? 'gray' : 'white' }}>2</Text>
                    </View>
                    <View style={{ width: '25%', height: 5, marginHorizontal: 2, backgroundColor: topIndex == 2 ? '#2F65EC' : '#EAECF5' }} />
                    <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: topIndex == 2 ? '#2F65EC' : '#EAECF5' }}>
                        <Text style={{ color: topIndex == 2 ? 'white' : 'gray' }}>3</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[style.lables, { width: 105, marginLeft: 18 }]}>Search Specialities/Doctors</Text>
                    <Text style={[style.lables, { width: 55, marginLeft: 44 }]}>Select Time SLot</Text>
                    <Text style={[style.lables, { width: 45, marginLeft: 85 }]}>Confirm & Pay</Text>
                </View>







                {/* 00000   Doctor selection part    00000 */}



                {topIndex == 0 ?
                    <View style={{ flex: 1, marginBottom: 40 }}>
                        <View style={{ backgroundColor: "white", marginHorizontal: 23, marginVertical: 8, borderRadius: 8, borderWidth: 0.2, height: 41, flexDirection: "row", alignItems: "center", width: 354, alignSelf: "center" }}>
                            <Image source={require('../Images1/Framesearch.png')} style={{ width: 12, height: 13, marginHorizontal: 10 }} />
                            <TextInput placeholder="Search Orthopedic" style={{ width: '90%', fontFamily: 'Poppins-Regular', fontSize: 11 }} />
                        </View>
                        <FlatList
                            // style={styles.flatliststyle}
                            data={DoctorsData}
                            renderItem={Doctorlist}
                            keyExtractor={(index) => index.toString()}
                        />
                    </View> : (topIndex == 1 ?


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
                                    <Image source={docData.img} style={style.img1} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, color: '#000000' }} >{docData.name}</Text>
                                        <Image source={docData.imgstr}
                                            style={{ marginLeft: 20, width: 14, height: 14 }} />
                                        <Text style={{ marginLeft: 2, color: "gray" }}>{docData.Rating}</Text>
                                    </View>
                                    <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11, color: '#2F65EC' }} >{docData.Speciality}</Text>
                                    <Text style={{ fontFamily: 'Poppins-Light', fontSize: 11, color: '#2F65EC' }}>{docData.Experiance}</Text>
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
                                <TouchableOpacity onPress={() => navigation.navigate('ViewDocDetails')} style={{ height: 25, width: 100, alignItems: "center", marginLeft: 30, justifyContent: "center" }}>
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
                                <TouchableOpacity onPress={() => thirdStep(2)} style={style.nxtBotn}>
                                    <Text style={style.nxttext}>Next</Text>
                                </TouchableOpacity>
                            </View>

                        </ScrollView> :
                        <ScrollView>
                            <View >
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
                                                <Image source={docData.img} style={style.img1} />
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
                                                        {docData.name}
                                                    </Text>
                                                    <Image source={require('../Images/star.png')}
                                                        resizeMode="contain"
                                                        style={{ height: 10, width: 10, marginLeft: 15, alignSelf: "center" }} />
                                                    <Text style={{ fontFamily: 'Poppins-regular', fontSize: 10, color: "#8B8585" }}>{docData.Rating}</Text>
                                                </View>
                                                <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }} >{docData.Speciality}</Text>
                                                <Text style={{ color: '#2F65EC', fontFamily: 'Poppins-Light', fontSize: 13 }}>{docData.Experiance}</Text>
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
                                                {docData.fee}
                                            </Text>
                                        </View>

                                    </View>
                                    <View style={{ borderTopWidth: 0.5, padding: 5, flexDirection: "row", justifyContent: "space-around", }}>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Image source={require('../Images1/calender.png')}
                                                resizeMode="contain"
                                                style={{ width: 12, tintColor: '#2F65EC', height: 12, marginRight: 4 }} />
                                            <Text style={{ color: "#2F65EC", fontSize: 11, textAlign: "center" }}>{moment(date).format("DD MMM")}</Text>
                                        </View>
                                        <View style={{ width: 1, backgroundColor: '#DADADA' }} />
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                            <Image source={require('../Images/time.png')}
                                                resizeMode="contain" style={{ width: 15, height: 15, marginRight: 3, tintColor: "#2F65EC" }} />
                                            <Text style={{ color: "#2F65EC", fontSize: 11 }}>{timeSelect}</Text>
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
                                                                borderColor: '#2F65EC',
                                                                justifyContent: "space-between"
                                                            }}>
                                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                                <Image source={pat.imglady} resizeMode="center"
                                                                    style={{ width: 42, height: 38, marginHorizontal: 12, marginVertical: 14 }} />
                                                                <View>
                                                                    <View style={{ flexDirection: "row" }}>
                                                                        <View>
                                                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>{pat.patienName}</Text>
                                                                        </View>
                                                                        <View>
                                                                            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>({pat.nickName})</Text>
                                                                        </View>
                                                                    </View>
                                                                    <View>
                                                                        <Text style={{ fontFamily: 'Poppins-Light', fontSize: 13 }}>Age:{pat.Age}</Text>
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
                                    <View  >
                                        <View>
                                            <Text style={{ color: "#2F65EC", fontSize: 22, marginLeft: 25, fontFamily: 'Poppins-Medium' }}>Pay $ 50</Text>
                                        </View>
                                        {paymethods.map((payme) => {
                                            return (
                                                <TouchableWithoutFeedback onPress={() => setpaymathods(payme.id)} >
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
                                                        <View style={{width:54,height:54,backgroundColor:'white',borderRadius:27,alignItems:"center",justifyContent:"center"}}>
                                                            <Image source={require('../Images1/ckeckmark.png')} style={{ width: 40, height: 40 }} />
                                                        </View>
                                                        <Text style={{ color: "#FFFFFF", fontFamily: 'Poppins-Medium', textAlign: "center", marginHorizontal: 5, fontSize: 25 }}>Payment Successfull!</Text>
                                                    </View>
                                                </View>
                                            </Modal>
                                        </View>

                                    </View >
                                }

                            </View>
                        </ScrollView>
                    )}
            </View>

        </KeyboardAvoidingView>
    );

}
export default OTPScreen;

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
