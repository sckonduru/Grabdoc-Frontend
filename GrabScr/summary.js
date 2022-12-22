import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";


export default function SummaryScreen({ navigation }) {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#2F65EC",  elevation: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Image source={require('../Images/arrow.png')} style={{ height: 15, width: 15, marginLeft:15,tintColor: "white" }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginLeft: 10, color: "white" ,fontFamily:'Poppins-SemiBold'}}>Summary</Text>
                </View>
                <View>
                    <Image source={require('../Images1/bell-1.png')} style={{ height: 16, width: 16, tintColor: "white",marginRight:8 }} />
                </View>
            </View>
            <Text style={{ margin: 10,fontFamily:'Poppins-Regular',fontSize:14,color:'#8B8585'}}>
                Bachelor of Medicine, Bachelor of Surgery (Latin: Medicinae Baccalaureus, Baccalaureus Chirurgiae; abbreviated in many ways, most commonly MBBS, but also MB ChB, BMBS, MB BCh, MB BChir and BM BCh), is the primary medical degree awarded by medical schools in countries that follow the tradition of the United Kingdom. The historical degree nomenclature states that they are two separate undergraduate degrees. In practice, however, they are usually combined as one and conferred together, and may also be awarded at graduate-level medical schools.

                In most medical schools in China and some medical schools in Australia and UK, primary medical degree is awarded as Bachelor of Medicine (MB, also BM, BMed).[1] These Medical graduates with an MB degree can still practice surgery.

                In the North American model, the equivalent medical degree is awarded as Doctor of Medicine (MD) or Doctor of Osteopathic Medicine (DO)[2]—the latter in the United States only, and this is undertaken by graduates.[3] Medical graduates with an MBBS or MB are formally allowed to list their completed degree as 'MD.'
            </Text>
        </View>
    )
}