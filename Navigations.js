import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MyBottom from "./bottomTabs";
import AddPatientDetails from "./GrabScr/addPatient";
import Consultingdoctor from "./GrabScr/consult";
import DoctorDetails from "./GrabScr/DocDetails";
import OTPScreen from "./GrabScr/DocScr (2)";
import EditProfile from "./GrabScr/editProfile";
import Fifthsrc from "./GrabScr/fifthsrc";
import FourScr from "./GrabScr/FourScreen";
import LoggingScreen from "./GrabScr/LogInScreen";
import MedicalRecords from "./GrabScr/medicalRecod";
import Patientselection from "./GrabScr/patientselect";
import Rating from "./GrabScr/ratingScr";
import Review from "./GrabScr/reviewScr";
import SummaryScreen from "./GrabScr/summary";
import Timeslots from "./GrabScr/Timeslots";
import Verificationscreen from "./GrabScr/verificationgrab";
import VedioScrONE from "./GrabScr/vfScr";
import VedioScrSEC from "./GrabScr/vsScr";


const Stack = createStackNavigator();


export default function NavigatonsSrc() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name="Login" component={LoggingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Verification" component={Verificationscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={FourScr} options={{ headerShown: false }} />
                <Stack.Screen name="draw" component={Fifthsrc} options={{ headerShown: false }} />
                <Stack.Screen name="time" component={OTPScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ViewDocDetails" component={DoctorDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Addpatient" component={AddPatientDetails} options={{ headerShown: false }} />
                <Stack.Screen name="editprifileScr" component={EditProfile} options={{ headerShown: false }} />
                <Stack.Screen name="bottomTabs" component={MyBottom} options={{ headerShown: false }} />
                <Stack.Screen name="vcScreen1" component={VedioScrONE} options={{ headerShown: false }} />
                <Stack.Screen name="vcScreen2" component={VedioScrSEC} options={{ headerShown: false }} />
                <Stack.Screen name="uploadfiles" component={MedicalRecords} options={{ headerShown: false }} />
                <Stack.Screen name="ratingScr" component={Rating} options={{ headerShown: false }} />
                <Stack.Screen name="reviewScr" component={Review} options={{ headerShown: false }} />
                <Stack.Screen name="summaryScr" component={SummaryScreen} options={{ headerShown: false }} />
                <Stack.Screen name="consulting" component={Consultingdoctor} options={{ headerShown: false }} />
                <Stack.Screen name="timesolts" component={Timeslots} options={{ headerShown: false }} />
                <Stack.Screen name="patient" component={Patientselection} options={{ headerShown: false }} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}