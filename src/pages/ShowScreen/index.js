import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from "react-native-elements/dist/buttons/Button";

import ButtonSearchEntry from "../../Components/buttonSearchEntry";
import ButtonSearchExit from "../../Components/buttonSearchExit";

import styles from "../../styles/styleShowScreen";
import bs from "../../styles/button";

export default function ShowScreen () {
    const navigation = useNavigation();
    navigation.setOptions({title: "Consultar Registro"});
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewCheck}> 
                <Text style={{fontWeight:'bold', margin: 10}}>HORA DA ENTRADA/SAIDA</Text>    
                <ButtonSearchEntry></ButtonSearchEntry>
                <ButtonSearchExit></ButtonSearchExit>           
            </View>
            <View style={{paddingBottom:100}} >
                <Button
                    buttonStyle={bs.buttonBack2}
                    title= "VOLTAR "
                    onPress={()=>{navigation.navigate('LoginScreen')}}
                
                />
            </View>
        </SafeAreaView>    
    );
}
