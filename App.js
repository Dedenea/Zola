import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import VerificationScreen from './screens/VerificationScreen';
import PerInforRegis from './screens/PerInforRegis';
import Tabs from './navigation/Tabs';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Me from './screens/Me';
import SearchScreen from './screens/SearchScreen';
import AddressLLScreen from './screens/AddressLLScreen';
import ChangePass from './screens/ChangePass';
import ChatOneOne from './screens/ChatOneOne';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitleAlign:'center',title:"ĐĂNG KÍ SỐ ĐIỆN THOẠI",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
        <Stack.Screen name="Verification" component={VerificationScreen} options={{headerTitleAlign:'center',title:"XÁC NHẬN SỐ ĐIỆN THOẠI",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
        <Stack.Screen name="PerInforRegis" component={PerInforRegis} options={{headerTitleAlign:'center',title:"THÔNG TIN NGƯỜI DÙNG",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false,headerStyle:{height:100}}}/>
        <Stack.Screen name="Me" component={Me} options={{title:"Thông tin cá nhân",headerTitleStyle: { color: '#2089dc'}}}/>      
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>    
        <Stack.Screen name="AddressLL" component={AddressLLScreen} options={{headerShown:false}}/> 
        <Stack.Screen name="ChangeP" component={ChangePass} options={{headerTitleAlign:'center',title:"ĐỔI MẬT KHẨU",headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"}}}/>   
        <Stack.Screen name="ChatOneOne" component={ChatOneOne} options={({route})=>({ title: route.params.name,headerTitleAlign:'center',headerTintColor:"#fff",headerStyle:{backgroundColor:"#2089dc"} })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
