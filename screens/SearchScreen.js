import React from "react";
import { Text, View, StyleSheet,TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const SearchScreen = ({navigation}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <TextInput placeholder="Nhập tên/số điện thoại cần tìm" style={styles.textinput}/>
                <AntDesign style={styles.icon} name="search1" size={24} color="black" />
            </View>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor:"white",
    },
    textinput:{
        borderWidth:1,
        borderColor:"black",
        width:"80%",
        marginBottom:15,
        marginTop:15,
        marginLeft:"10%",
        marginRight:"10%",
        borderRadius:10,
        borderColor:"#a6a6a6"
    },
    icon:{
        position: "absolute",
        marginLeft:"83%",
        marginTop:15
    },
});