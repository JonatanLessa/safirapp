import  React , { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import styles from "../Components/buttonStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonSearchEntry = () => {

    const [entryInfo, setEntryInfo] = useState(null)

    const [date, setDate] = useState('')    

    const SearchEntry = async (key) => {
        const value = await AsyncStorage.getItem(key)
        setEntryInfo(value)
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
                    onPress={()=>{SearchEntry(date)}}>               
                    <Text style={{textAlign:'center', marginTop: 15}}>BUSCAR HORÁRIO DE ENTRADA PARA</Text>                    
                </TouchableOpacity> 
                <Text style={styles.textCheck}>{entryInfo}</Text>
            </View>                     
        </View>
    );
}

export default ButtonSearchEntry;