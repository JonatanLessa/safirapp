import  React , { useState } from "react";
import {Text, View, TouchableOpacity } from 'react-native';
import styles from "../Components/buttonStyles";
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonExit = () => {

    const [exitTime, setExitTime] = useState(0);

    const StoreExit = (key, value) => {
        AsyncStorage.setItem(key, value)
    }

    return (
        
        <View style={styles.viewCheck}>
            <View style={styles.buttonCheck}>
                <TouchableOpacity 
                style={styles.buttonStyle} 
                onPress={()=>{setExitTime(moment().format('DD-MM-YYYY hh:mm:ss a'));
                {StoreExit(moment().format('DD-MM-YYYY').toString(), moment().format('hh:mm:ss a').toString())}}}>                         
                    <Text style={{textAlign:'center', marginTop: 15}}> HORÁRIO FINAL </Text>
                </TouchableOpacity>
                <Text style={styles.textCheck}>{exitTime}</Text>                             
            </View>               
        </View>
    );
}

export default ButtonExit;