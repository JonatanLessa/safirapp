import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import ButtonEntry from "../../Components/buttonEntry";
import ButtonExit from "../../Components/butonExit";
import styles from "../../styles/style";
import { Button } from "react-native-elements/dist/buttons/Button";
import bs from "../../styles/button"

export default function RegistryScreen() {

    const navigation = useNavigation();
  
    const greetings = () => {
      return `Olá ${'Marcelo'}!`;
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>{greetings()}</Text>
          <Text>Registre aqui os seus horários:</Text>
          <ButtonEntry></ButtonEntry>
          <ButtonExit></ButtonExit>  
        </View>
        <Button
          buttonStyle={bs.buttonBack}
          title= "VOLTAR"
          onPress={()=>{navigation.navigate('LoginScreen')}}
        />
        <StatusBar style="auto" /> 
      </SafeAreaView>      
      );
  }
  