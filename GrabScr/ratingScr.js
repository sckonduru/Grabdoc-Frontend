import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";


export default function Rating({navigation}) {
    let smilys = [
        { id: 1, smile: require('../Images1/Framebad.png'), text: 'Bad' },
        { id: 2, smile: require('../Images1/Frameavg.png'), text: 'Average' },
        { id: 3, smile: require('../Images1/Framegood.png'), text: 'Good' },
        { id: 4, smile: require('../Images1/Framevgood.png'), text: 'Very Good' },
        { id: 5, smile: require('../Images1/Frameawesome.png'), text: 'Awesome' }
    ];
    return (
        <View>
          
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#2F65EC", elevation: 10 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Image source={require('../Images/arrow.png')} style={{ height: 15, width: 15, tintColor: "white", marginLeft: 15 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, marginLeft: 10, color: "white", fontFamily: 'Poppins-SemiBold' }}>Write a Review</Text>
                </View>
                <View>
                    <Image source={require('../Images1/bell-1.png')} style={{ height: 20, width: 20, tintColor: "white", marginRight: 8 }} />
                </View>
            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                <Text style={styles.sideHead}>1.Dummy Data</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => console.log(1)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framebad.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Bad</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(2)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Frameavg.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Average</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(3)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framegood.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Good</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(4)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framevgood.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Very Good</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(5)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Frameawesome.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Awesome</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                <Text style={styles.sideHead}>2.Dummy Data</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => console.log(1)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framebad.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Bad</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(2)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Frameavg.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Average</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(3)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framegood.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Good</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(4)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framevgood.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Very Good</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(5)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Frameawesome.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Awesome</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                <Text style={styles.sideHead}>3.Dummy Data</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => console.log(1)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framebad.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Bad</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(2)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Frameavg.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Average</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(3)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framegood.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Good</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(4)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framevgood.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Very Good</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(5)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Frameawesome.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Awesome</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            <View style={{ marginHorizontal: 15, marginVertical: 5 }}>
                <Text style={styles.sideHead}>4. Over All Rating</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableOpacity onPress={() => console.log(1)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framebad.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Bad</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(2)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Frameavg.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Average</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(3)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framegood.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Good</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(4)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Framevgood.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Very Good</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log(5)}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../Images1/Frameawesome.png')} style={styles.imgsize} />
                            <Text style={styles.smallText}>Awesome</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16, marginLeft: 15 }}>Leave a feedback to us</Text>
            <TextInput placeholder="" style={{ margin: 15, borderRadius: 11, marginBottom: 100 }} />
            <TouchableOpacity>
                <View style={{ width: 352, height: 52, paddingVertical: 12, backgroundColor: '#3266ED', borderRadius: 15, alignItems: "center", alignSelf: "center" }}>
                    <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Poppins-SemiBold' }}>Submit</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    sideHead: {
        fontSize: 15,
        marginVertical: 5,
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    smallText: {
        fontSize: 8,
        fontFamily: 'Poppins-Light'
    },
    imgsize: {
        height: 28, width: 28, margin: 5
    }

});