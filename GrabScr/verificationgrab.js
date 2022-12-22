import React, { Component, useRef } from "react";
import { View, Text, Image, TextInput, Button, SafeAreaView, StyleSheet, Pressable, TouchableOpacity } from "react-native";

export default function Verificationscreen({ navigation }) {

  return (
    <View >
      <View style={style.viewst}>
        <Text style={style.verify}>Verification</Text>
      </View>
      <Image source={require('../Images1/otpimg.png')} style={{ height: 230, marginLeft: 82, width: 213 }} resizeMode="contain" />
      <View style={{ marginHorizontal: 55, height: '23%' }}>
        <Text style={{ fontSize: 20, color: "#818286", textAlign: "center" }}>Enter the <Text style={{ fontSize: 20, fontWeight: "bold" }}>OTP

        </Text> code from the phone we just sent to you.
        </Text>
        <View style={{ flex: 0.6, flexDirection: "row", justifycontent: "center", marginLeft: 30 }}>
          <View style={{ height: 90 }}>
            <TextInput placeholder=""
              //ref={"nameref"}
              style={{
                borderBottomWidth: 0.5,
                margin: 10,
                textAlign:"center"
              }}
              keyboardType="numeric"
              maxLength={1}

            />
          </View >
          <View style={{ height: 90 }}><TextInput placeholder=""
            //ref={"nameref"}
            style={{
              borderBottomWidth: 0.5,
                textAlign:"center",
                margin: 10,
            }}
            keyboardType="numeric"
            maxLength={1}
          />
          </View>
          <View style={{ height: 90 }}><TextInput placeholder=""
            //ref={"nameref"}
            style={{
              borderBottomWidth: 0.5,
              margin: 10,
              textAlign:"center"

            }}
            keyboardType="numeric"
            maxLength={1}
          />
          </View>
          <View style={{ height: 90 }}><TextInput placeholder=""
            //ref={"nameref"}
            style={{
              borderBottomWidth: 0.5,
              margin: 10,
              textAlign:"center"

            }} maxLength={1}
            keyboardType="numeric"
          />
          </View>
        </View>


      </View>
      <View style={{ flexDirection: "row",justifyContent:"center" }}>
        <Text style={{ fontSize: 16 }}>
          Don't recevie the OTP ? 
        </Text>
        <TouchableOpacity >

          <Text style={{ color: "blue",marginLeft:4, fontSize: 16, fontWeight: "bold" }}>
            Resend OTP
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Details')} style={{height:50,width:326,backgroundColor:"#2F65EC",borderRadius:12,justifyContent:"center",alignSelf:"center",marginTop:30 }}>
        <Text style={{textAlign:"center",color:"white",fontSize:20,fontFamily: 'Poppins-SemiBold'}}>Verify & Proceed</Text>
        </TouchableOpacity>
      <Image source={require('../Images1/heartline-1.png')}
        style={{ height: 70, width: '90%', marginTop: 45 }} resizeMode="contain" />
    </View>

  )
}
const style = StyleSheet.create({
  viewst: {
    flexDirection: "row",
    justifyContent: "center"
  }
  ,
  verify: {
    color: "#064C9F",
    height: 38, width: 157,
    fontSize: 25,
    marginTop: '13%',
    fontFamily: 'Poppins-SemiBold', textAlign: "center"

  },

})