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
                <Text style={styles.textTitle}>REGISTRO DE PONTO</Text>
                <Button title= "IR PARA O REGISTRO DE PONTO" onPress={()=>{navigation.navigate('RegistryScreen')}}></Button>   
            </View>   
            <View style={styles.container}>
                <Button title= "CONSULTAR REGISTRO DE PONTO" onPress={()=>{navigation.navigate('ShowScreen')}}></Button>   
            </View>   
        </SafeAreaView>
    );  
}