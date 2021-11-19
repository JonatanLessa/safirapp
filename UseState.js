import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";

const ButtonState = () => {

    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const incrementar = () => {
        const updateCounter = counter + 1
        //setCounter(counter => {
        //    console.log(counter);
        //    return counter + 1;
        //});
        setCounter(updateCounter);

        //STATE UPDATE
        console.log(updateCounter)
    }// no useEffect posso definir funções e chama-las no final delimitando as situações
    useEffect(() => {
        //console.log(`Inicialização...`);
        const getValue = () => {
            return 23;
        }

        setCounter(getValue());
    },
    []);//usado na chamada de uma API, só uma vez...

    useEffect(() => {
        console.log(`Counter: ${counter}`);
    },
    [counter]);

    useEffect(() => {
        console.log(`Counter2: ${counter2}`);
    },
    [counter2]);
//<Button style={styles.button2} title="Incrementar" onPress={()=>{incrementar()}}></Button>
    return (
        <View style={styles.buttonStyle2}>
            <Text style={styles.buttonTextStyle2}>{counter}</Text>
            <View style={styles.buttonView2}>                
                <Button style={styles.button2} title="Incrementar" onPress={()=>{setCounter(counter + 1)}}></Button>
                <Button style={styles.button2} title="Decrementar" onPress={()=>{setCounter(counter - 1); setCounter2(counter2 - 1)}}></Button>
            </View>
            <StatusBar style= "auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle2: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonTextStyle2: {
        fontWeight: 'bold',
        fontSize: 60
    },
    buttonView2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%'
    },
    button2: {
        width: '40%'
    }
  });

  export default ButtonState;