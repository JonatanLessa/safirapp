import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import styles from "../../styles/style";
import { Button } from "react-native-elements/dist/buttons/Button";
import bs from "../../styles/button"
// import imgEstilo from "../../estilos/imgEstilo";

export default function LoginScreen(){

    const navigation = useNavigation();
            
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#171d31" barStyle="light-content"/> 
            <View style={styles.container}>
                {/* <Image
                    source={require('../../../assets/safir-mobile2.PNG')}
                    style={imgEstilo.logo}
                /> */}
                <Text style={styles.textTitle}>REGISTRO DE PONTO</Text>
                <Button
                    buttonStyle={bs.button}
                    title= "IR PARA O REGISTRO DE PONTO" 
                    onPress= {()=>{navigation.navigate('RegistryScreen')}}
                    color= '#8CDB94'
                />
                <Button
                    buttonStyle={bs.button}
                    title="CONSULTAR REGISTRO"
                    onPress= {()=>{navigation.navigate('ShowScreen')}}
                    color='#8CDB94'
                />   
            </View>    
        </SafeAreaView>
    );  
}