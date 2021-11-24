import  React , { useState } from "react";
import {Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import styles from "../Components/buttonStyles";
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonEntry = () => {

    const [entryTime, setEntryTime] =  useState(0);

    const StoreEntry = (key, value) => {
        AsyncStorage.setItem(key, value)
    }

    return (
        
        <View style={styles.viewCheck}>
            <View style={styles.buttonCheck}>
                <TouchableOpacity 
                style={styles.buttonStyle} 
                onPress={()=>{setEntryTime(moment().format('DD-MM-YYYY hh:mm:ss a'));
                {StoreEntry(moment().format('DD-MM-YYYY').toString(), moment().format('hh:mm:ss a').toString())}}}>                         
                    <Text style={{textAlign:'center', marginTop: 15}}> HORÁRIO INICIAL </Text>
                </TouchableOpacity>
                <Text style={styles.textCheck}>{entryTime}</Text>                             
            </View>               
        </View>
    );
}

export default ButtonEntry;