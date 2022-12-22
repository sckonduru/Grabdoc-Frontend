import React, { useEffect, useState } from "react";
import {
    View, TouchableOpacity,
    Text, Image, TextInput, FlatList,
    StyleSheet,
    ScrollView,
    StatusBar
} from "react-native";
import moment from "moment/moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import BottomCustom from "./custombottom";

export default function Consultingdoctor({ navigation }) {


    const [DoctorsData] = useState(
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

    const Doctorlist = ({ item }) => (


        <View key={item.id} style={{
            borderRadius: 6,
            padding: 8,
            marginHorizontal: 23,
            marginVertical: 6,
            backgroundColor: 'white'
        }}>

            <TouchableOpacity  onPress={() => navigation.navigate('timesolts',{docter:item})}>
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


    return (
        <View style={{height:'100%'}}>
            <StatusBar backgroundColor={'#2F65EC'}/>
            <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#2F65EC', alignItems: 'center', justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <TouchableOpacity>
                        <Image source={require('../Images/arrow.png')} style={{ height: 16, width: 16, marginLeft: 20, marginRight: 10, tintColor: "white" }} resizeMode="contain" />
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 25, fontFamily: 'Poppins-SemiBold' }}>Doctor</Text>
                </View>
                <Image source={require('../Images1/bell-1.png')} style={{ height: 16, width: 16, marginRight: 12, tintColor: "white" }} resizeMode="contain" />
            </View>
            <View style={{ width: '100%', height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: '#2F65EC', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 10, color: "white" }}>1</Text>
                </View>


                <View style={{ width: '25%', height: 1, marginHorizontal: 2, backgroundColor: '#C5C5C5' }} />
                <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EDEDED', borderWidth: 1, borderColor: '#C5C5C5' }}>
                    <Text style={{ color: '#C5C5C5' }}>2</Text>
                </View>
                <View style={{ width: '25%', height: 1, marginHorizontal: 2, backgroundColor: '#C5C5C5' }} />
                <View style={{ width: 30, height: 30, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EDEDED', borderWidth: 1, borderColor: '#C5C5C5' }}>
                    <Text style={{ color: '#C5C5C5' }}>3</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <Text style={[style.lables, { width: 105, marginLeft: 18,color:'#235BE5' }]}>Search Specialities/Doctors</Text>
                <Text style={[style.lables, { width: 55, marginLeft: 44 }]}>Select Time SLot</Text>
                <Text style={[style.lables, { width: 45, marginLeft: 85 }]}>Confirm & Pay</Text>
            </View>

            <View style={{ backgroundColor: "white", marginHorizontal: 23, marginVertical: 8, borderRadius: 8, borderWidth: 0.2, height: 41, flexDirection: "row", alignItems: "center", width: 354, alignSelf: "center" }}>
                <Image source={require('../Images1/Framesearch.png')} style={{ width: 12, height: 13, marginHorizontal: 10 }} />
                <TextInput placeholder="Search Orthopedic" style={{ width: '90%', fontFamily: 'Poppins-Regular', fontSize: 11 }} />
            </View>
            <View style={{ height: 470 }}>
                <FlatList
                    // style={styles.flatliststyle}
                    data={DoctorsData}
                    renderItem={Doctorlist}
                    keyExtractor={(item) => item.id}
                />

            </View>

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
