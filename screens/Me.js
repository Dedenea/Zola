import React, { useState } from 'react';
import { Text, View, StyleSheet,Image, TextInput,KeyboardAvoidingView } from "react-native";
import { MaterialIcons,FontAwesome5 } from '@expo/vector-icons';
import RadioGroup from 'react-native-radio-buttons-group';
import {Button} from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';

const radioButtonsData = [
    {
      id: '1',
      label: 'Nam',
      value: 'male',
      color: '#2089dc',
      selected: true,
    },
    {
      id: '2',
      label: 'Nữ',
      value: 'female',
      color: '#2089dc',
      selected: false,
    },
  ];
const Me = ({navigation}) =>{
    const [radioButtons, setRadioButtons] = useState(radioButtonsData);
    const onPressRadioButton = radioButtonsArray => {
        setRadioButtons(radioButtonsArray);
      };
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate()+'/'+tempDate.getMonth()+'/'+tempDate.getFullYear();
      setText(fDate)
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
        showMode('time');
      };
    return (
        <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style={styles.image} source={require('../images/b.jpg')}/>
            </View>
            <View>
                <Image style={styles.image2} source={require('../images/a.jpg')}/>
                <View style={styles.cl}><MaterialIcons  name = "photo-camera" size = {20} color = "black" /></View>
            </View>
            <View style={styles.container3}>
                <Text style={styles.text}>H.D.Vũ</Text>
                <FontAwesome5 style={styles.icon} name = "pen" size = {14} color = "black" />
            </View>
            <View style={styles.container4}>
                <Text style={styles.text2}>Số điện thoại:</Text>
                <TextInput style={styles.textinput}/>
                <Text style={styles.text2}>Ngày sinh:</Text>
                <View style={styles.container43}>
                    <TextInput style={styles.textinput1} value={text}/>
                    <Button  onPress={showDatepicker} containerStyle={styles.button1} title="Chọn" type="outline"/>
                </View>
                {show && (<DateTimePicker testID="showDatepicker" value={date} mode={mode} display="default" onChange={onChange}/>)}
                <Text style={styles.text2}>Giới tính:</Text>
                <RadioGroup radioButtons={radioButtons} onPress={onPressRadioButton} layout="row"/>
                <Button containerStyle={styles.button} title="Chỉnh sửa"/>
                <Button containerStyle={styles.button} title="Đổi mật khẩu" type="outline" onPress={()=>navigation.navigate("ChangeP")}/>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

export default Me;

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        backgroundColor:"white",
    },
    container2:{
        width:'95%',
        marginTop:10,
        height:"20%",
        borderRadius:15,
        
        
    },
    button:{
        padding:15
    },
    image:{
        width:null,
        height:150,
        borderRadius:15
    },
    image2:{
        width:100,
        height:100,
        marginTop:-40,
        borderRadius:50,
        borderWidth:4,
        borderColor:"#fff"
    },
    container3:{
        flexDirection: "row",
        flexWrap: "wrap",  
        marginTop:10
    },
    container43:{
        flexDirection: "row",
        flexWrap: "wrap",    
    },
    text:{
        fontWeight:"bold",
        fontSize:18,
    },
    text2:{
        fontSize:16,
    },
    cl: {
        position: "absolute",
        marginTop:35,
        marginLeft:75,
        width: 25,
        height: 25,
        color: "black",
        width:25,
        height:25,
        backgroundColor:"#d9d9d9",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
    },
    icon:{
        position: "absolute",
        marginLeft:130,
        marginTop:5
    },
    container4:{
        marginTop:25,
        width:"90%"
    },
    textinput:{
        borderWidth:1,
        borderColor:"black",
        width:"100%",
        marginBottom:15,
        marginTop:5
    },
    textinput1:{
        borderWidth:1,
        borderColor:"black",
        width:"70%",
        marginBottom:15,
        marginTop:5,
    },
    button1:{
        width:"20%",
        marginLeft:32
    },
    radio:{
        fontSize: 16,
    }
});