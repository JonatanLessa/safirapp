import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import ButtonEntry from "../../Components/buttonEntry";
import ButtonExit from "../../Components/butonExit";
import styles from "./style";


export default function RegistryScreen() {

    const navigation = useNavigation();
  
    const name = 'Evanilson';
  
    const greetings = () => {
      return `Olá ${name}!`;
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>{greetings()}</Text>
          <Text>REGISTRE AQUI SEUS HORÁRIOS</Text>
          <ButtonEntry></ButtonEntry>
          <ButtonExit></ButtonExit>  
        </View>
        <View style={styles.buttonBack}>
          <Button title= "VOLTAR " onPress={()=>{navigation.navigate('LoginScreen')}}></Button>
        </View>
        <StatusBar style="auto" /> 
      </SafeAreaView>      
      );
  }
  