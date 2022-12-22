import React from "react";
import { View, Text, Image, TouchableOpacity, } from "react-native";

export default function DoctorDetails({ navigation }) {


  return (
    <View>
      <View style={{
        flexDirection: "row",
        backgroundColor: "#2F65EC",
        justifyContent: "space-between",
        marginBottom: 10
      }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "flex-start", height: 70 }}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Image source={require('../Images/left.png')} style={{ width: 20, height: 20, tintColor: "white", marginLeft: 15, marginTop: 9 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 25, color: "white", fontFamily: 'Poppins-SemiBold' }}> Doctor Profile </Text>
          </View>
          <View>
            <Image source={require('../Images/bell.png')} style={{ width: 20, height: 20, tintColor: "white", marginTop: 9, marginLeft: 140 }} />
          </View>
        </View>
      </View>
      <View style={{ position: "relative", top: -40, marginHorizontal: 20, }}>
        <View style={{ flexDirection: "row", backgroundColor: "white", justifyContent: "space-between", padding: 10, height: 80, alignItems: "center", borderRadius: 10, elevation: 15 }}>
          <View>
            <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#000000' }}>Dr.Sree</Text>
            <Text style={{ color: "#2F65EC", fontFamily: 'Poppins-Light' }}>Orthopedic</Text>
          </View>
          <Image source={require('../Images1/docter-1.png')} style={{ height: 60, width: 60, }} />


        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{ height: 100, width: 100, borderRadius: 10, backgroundColor: "white", justifyContent: "center", alignItems: "center", }}>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>Patients</Text>
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#2F65EC' }}>100+</Text>
        </View>
        <View style={{ height: 100, width: 100, borderRadius: 10, backgroundColor: "white", justifyContent: "center", alignItems: "center", }}>

          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>Experiance</Text>
          <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#2F65EC' }}>10years</Text>
        </View>
        <View style={{ height: 100, width: 100, borderRadius: 10, backgroundColor: "white", justifyContent: "center", alignItems: "center", }}>

          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>Rating</Text>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={require('../Images/star.png')} style={{width:11,height:11}}/>
            <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 13, color: '#2F65EC' }}>4.9</Text>
          </View>
        </View>
      </View>
      <View style={{ margin: 10, padding: 10 }}>
        <Text style={{  fontFamily:'Poppins-Regular',fontSize:16 }}>About Doctor</Text>
        <Text style={{  fontFamily:'Poppins-Regular',fontSize:10 }}>A physician (American English), medical practitioner (Commonwealth English), medical doctor, or simply doctor, is a health professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury, and other physical and mental impairments. Physicians may focus their practice on certain disease categories, types of patients, and methods of treatment—known as specialities—or they may assume responsibility for the provision of continuing and comprehensive medical care to individuals, families, and communities—known as general practice.[2] Medical practice properly requires both a detailed knowledge of the academic disciplines, such as anatomy and physiology, underlying diseases and their treatment—the science of medicine—and also a decent competence in its applied practice—the art or craft of medicine.

          Both the role of the physician and the meaning of the word itself vary around the world. Degrees and other qualifications vary widely, but there are some common elements, such as medical ethics requiring that physicians show consideration, compassion, and benevolence for their patients.</Text>
      </View>
    </View>
  )
}