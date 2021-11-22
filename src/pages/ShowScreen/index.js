import React from "react";
import { View, Text, Button, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import ButtonSearchEntry from "../../Components/buttonSearchEntry";
import ButtonSearchExit from "../../Components/buttonSearchExit";


export default function ShowScreen () {

    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.viewCheck}> 
            <Text> Hora da ENTRADA/SAIDA </Text>    
            <ButtonSearchEntry></ButtonSearchEntry>
            <ButtonSearchExit></ButtonSearchExit>           
        </View>
        <View style={styles.buttonBack}>
          <Button title= "VOLTAR " onPress={()=>{navigation.navigate('LoginScreen')}}></Button>
        </View>
        </SafeAreaView>    
        
    );
    
}



