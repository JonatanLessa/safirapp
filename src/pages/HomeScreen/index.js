import React from "react";
import { Text, View, Button, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import ButtonRegistryHour from "../RegistraHoras";
import styles from "./style";


export default function HomeScreen() {

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
          <ButtonRegistryHour></ButtonRegistryHour>
        </View>
        <View style={styles.container}>
          <Button title= "VOLTAR " onPress={()=>{navigation.navigate('LoginScreen')}}></Button>
        </View>
        <StatusBar style="auto" /> 
      </SafeAreaView>      
      );
  }