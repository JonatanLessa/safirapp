import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";


export default function LoginScreen(){

    const navigation = useNavigation();
            
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#171d31" barStyle="light-content"/> 
            <View style={styles.container}>
                <Text style={styles.textTitle}>FAZENDA PARAISO</Text>
                <Button title= "INICIO" onPress={()=>{navigation.navigate('HomeScreen')}}></Button>   
            </View>   
        </SafeAreaView>
    );  
}