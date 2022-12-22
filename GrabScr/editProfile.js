import React from "react";
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView,StyleSheet } from "react-native";

export default function EditProfile({ navigation }) {
    return (
        <ScrollView>
            <View >
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#2F65EC", padding: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Image source={require('../Images/arrow.png')} style={{ height: 15, width: 15, tintColor: "white" }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, marginLeft: 10, color: "white",fontFamily:'Poppins-SemiBold' }}>Edit Profile</Text>
                    </View>
                    <View>
                        <Image source={require('../Images1/bell-1.png')}resizeMode="contain" style={{ height: 20, width: 20, tintColor: "white" }} />
                    </View>
                </View>
                <View>
                    <ImageBackground source={require('../Images1/bluebg.png')} resizeMode="stretch" style={{ height: 120, width: '100%' }} >
                        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <Image source={require('../Images1/flashdoc.png')}resizeMode="contain" style={{ height: 106, width: 106,marginTop:20,borderRadius:53, backgroundColor:'white' }} />

                        </View>
                    </ImageBackground>
                </View>
                <View style={{ marginHorizontal: 15 }}>
                    <View>
                        <Text style={styles.textfield}>First name</Text>
                        <TextInput placeholder="" style={{ backgroundColor: "white", borderRadius: 11 }} />
                    </View>
                    <View>
                        <Text style={styles.textfield}>Second name</Text>
                        <TextInput placeholder="" style={{ backgroundColor: "white", borderRadius: 11 }} />
                    </View>
                    <View>
                        <Text style={styles.textfield}>Gender</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <TouchableOpacity>
                                <Text style={{ borderWidth: 0, borderRadius: 5, padding: 5, paddingHorizontal: 15,backgroundColor:"white" }}>Female</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Text style={{ borderWidth: 0, borderRadius: 8, padding: 5, paddingHorizontal: 25,backgroundColor:"white" }}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Text style={{ borderWidth: 0, borderRadius: 8, padding: 5, paddingHorizontal: 23,backgroundColor:"white" }}>Other</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text  style={styles.textfield}>Date Of Birth</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", borderRadius: 8, backgroundColor: "white", width: 150 }}>
                                <TextInput placeholder="dd/mm/yy" style={{ backgroundColor: "white", borderRadius: 10, width: 120 }} />
                                <TouchableOpacity>
                                    <Image source={require('../Images/calendar.png')}resizeMode="contain" style={{ height: 15, width: 15, tintColor: "#2F65EC",marginLeft:5 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text  style={styles.textfield}>Email</Text>
                        <TextInput placeholder="" style={{ backgroundColor: "white", borderRadius: 11 }} keyboardType="email-address" />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <View>
                            <Text  style={styles.textfield}>Height(in CM)</Text>
                            <TextInput placeholder="" style={{ backgroundColor: "white", borderRadius: 11, width: 140 }} keyboardType="number-pad" />
                        </View>
                        <View>
                            <Text  style={styles.textfield}>Weight(in KG)</Text>
                            <TextInput placeholder="" style={{ backgroundColor: "white", borderRadius: 11, width: 140 }} keyboardType="number-pad" />
                        </View>

                    </View>
                    <View>
                        <Text  style={styles.textfield}>Blood Group</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", margin: 3 }}>
                            <TouchableOpacity>
                                <Text style={{ borderWidth: 0.22, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}>O+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Text style={{ borderWidth: 0.22, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}>O-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Text style={{ borderWidth: 0.22, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}>A+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Text style={{ borderWidth: 0.22, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}>A-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>

                                <Text style={{ borderWidth: 0.22, borderRadius: 5, paddingVertical: 5, paddingHorizontal: 10 }}>B+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{  backgroundColor: "#3266ED", justifyContent: "center", alignItems: "center", marginTop: 15, borderRadius: 10, marginBottom: 30,height:52,width:355,alignSelf:"center" }}>
                            <Text  style={{fontFamily:'Poppins-SemiBold',color:'white',fontSize:20}} >Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    textfield:{
         margin: 5,fontFamily:'Poppins-Regular' ,color:'#8B8585',fontSize:16
    }
})