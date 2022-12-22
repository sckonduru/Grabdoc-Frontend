import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fifthsrc from "./GrabScr/fifthsrc";
import AppointmentsSrc from "./GrabScr/Appointment";
import OTPScreen from "./GrabScr/DocScr (2)";
import MedicalRecords from "./GrabScr/medicalRecod";

const Tab = createBottomTabNavigator();

export default function MyBottom() {
  return (
    <Tab.Navigator screenOptions={
      {tabBarActiveTintColor:"red",
    tabBarInactiveTintColor:"blue"}
    
    }>
      <Tab.Screen name="Consult" component={OTPScreen} options={{headerShown:false, }}/>
      <Tab.Screen name="Appointments" component={AppointmentsSrc} options={{headerShown:false, }}/>
        <Tab.Screen name="Records" component={MedicalRecords} options={{headerShown:false, }} />

    </Tab.Navigator>
  )
}