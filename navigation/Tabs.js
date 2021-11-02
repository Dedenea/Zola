import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet,Pressable, Alert} from 'react-native';
import ChatTab from '../screens/ChatTab';
import GroupTab from '../screens/GroupTab';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchScreen from "../screens/SearchScreen";
import AddressLLScreen from "../screens/AddressLLScreen";
const Tab=createBottomTabNavigator();
const Tabs = ({navigation}) =>{
    const choiceLogout=()=>{
        Alert.alert('Bạn có muốn thoát hay không?','',[
            {
                text:'Thoát',
                onPress:()=>{navigation.navigate("Login")}
            },
            {
                text:'Hủy',
                onPress:()=>{console.log('No Logout')}
            }
        ])
    }
    return (
        <Tab.Navigator initialRouteName="ChatTab" screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarLabelStyle: { fontSize: 12, fontWeight:'bold' },
            tabBarActiveTintColor:'#2089dc',
            tabBarInactiveTintColor:'#cccccc',
            tabBarIndicatorStyle:{
            backgroundColor:'#fff',
            height:5
        },
        tabBarShowIcon:true,
        }}>
            <Tab.Screen name="Search" component={SearchScreen}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Tìm",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>,
                        headerRight:() =><Pressable onPress={choiceLogout}><MaterialCommunityIcons name = "logout" style={{marginRight:15}} size = {25} color = "black" /></Pressable>,
                        tabBarIcon: ({color}) => <Ionicons name="search" color={color} size={30}/> }}/>
            <Tab.Screen name="ChatTab" component={ChatTab}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Chat",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>,
                        headerRight:() =><Pressable onPress={choiceLogout}><MaterialCommunityIcons name = "logout" style={{marginRight:15}} size = {25} color = "black" /></Pressable>, 
                        tabBarIcon: ({color}) => <Ionicons name="chatbubbles" color={color} size={30}/> }}/>
            <Tab.Screen name="GroupTab" component={GroupTab}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Nhóm",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>,
                        headerRight:() =><Pressable onPress={choiceLogout}><MaterialCommunityIcons name = "logout" style={{marginRight:15}} size = {25} color = "black" /></Pressable>, 
                        tabBarIcon: ({color}) => <MaterialCommunityIcons name="account-group" color={color} size={30}/> }}/>
            <Tab.Screen name="AddressLL" component={AddressLLScreen}
                        options={{ title:"Zola",headerTitleStyle: { color: '#2089dc',fontWeight:'bold',fontSize:40,marginLeft:20},tabBarLabel: "Danh bạ",
                        headerLeft:() =><Pressable onPress={()=>navigation.navigate("Me")}><Ionicons name = "md-menu-sharp" style={{marginLeft:5}} size = {30} color = "black" /></Pressable>, 
                        headerRight:() =><Pressable onPress={choiceLogout}><MaterialCommunityIcons name = "logout" style={{marginRight:15}} size = {25} color = "black" /></Pressable>,
                        tabBarIcon: ({color}) => <FontAwesome name="address-book" color={color} size={30}/> }}/>
        </Tab.Navigator>
        
    )
}
export default Tabs;
const styles = StyleSheet.create({});

