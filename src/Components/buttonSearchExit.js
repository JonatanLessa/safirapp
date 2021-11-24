import  React , { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import styles from "../Components/buttonStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonSearchExit = () => {

    const [exitInfo, setExitInfo] = useState(null)

    const [date, setDate] = useState('')    

    const SearchExit = async (key) => {
        const value = await AsyncStorage.getItem(key)
        setExitInfo(value)
    }

    return (
        
        <View style={styles.viewCheck}>
            <View style={styles.buttonCheck}>
                <Text>Entre com a Data</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder='ex. 01-01-2021'
                    onChangeText={(key)=>setDate(key)}/>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={()=>{SearchExit(date)}}>               
                    <Text style={{textAlign:'center', marginTop:15}}>BUSCAR HORÁRIO DE ENTRADA PARA</Text>                    
                </TouchableOpacity> 
                <Text style={styles.textCheck}>{exitInfo}</Text>
            </View>                     
        </View>
    );
}

export default ButtonSearchExit;