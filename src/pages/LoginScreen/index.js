import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import styles from "../../styles/style";
import bs from "../../styles/button";
import imgStyle from "../../styles/imgStyle";

import appLogo from "../../../assets/safir-mobile2.png"

export default function LoginScreen(){
    const navigation = useNavigation();
            
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#171d31" barStyle="light-content"/> 
            <View style={styles.container}>
                <Image
                    source={appLogo}
                    style={imgStyle.logo}
                />
                <Text style={styles.textTitle}>REGISTRO DE PONTO</Text>
                <Button
                    buttonStyle={bs.button}
                    title= "IR PARA O REGISTRO DE PONTO" 
                    onPress= {()=>{navigation.navigate('RegistryScreen')}}
                />
                <Button
                    buttonStyle={bs.button}
                    title="CONSULTAR REGISTRO"
                    onPress= {()=>{navigation.navigate('ShowScreen')}}
                />   
            </View>    
        </SafeAreaView>
    );  
}
