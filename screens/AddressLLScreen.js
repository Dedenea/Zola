import React from "react";
import { Text, View, StyleSheet } from "react-native";


const AddressLLScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>AddressLL Tab</Text>
            </View>
        </View>
    )
}

export default AddressLLScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
    },
    container2:{
        width:'80%',
        marginTop:50
    },
    button:{
        padding:15
    },
    image:{
        width:150,
        height:150,
        
    },
});