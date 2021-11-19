import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import styles from "./style";

const ButtonRegistryHour = ()=> {

    const [entryTime, setEntryTime] =  useState(0);
    const [exitTime, setExitTime] = useState(0);
   //<Button style={styles.button} title="HORÁRIO INICIAL" onPress={()=>{setEntryTime(new Date().toLocaleString())}}></Button>
    return (
        <View style={styles.viewCheck}>            
            <View style={styles.buttonCheck}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{setEntryTime(new Date().toLocaleString())}}>
                    <Text> HORÁRIO INICIAL </Text>
                </TouchableOpacity>
                <Text style={styles.textCheck}>{entryTime}</Text>
            </View>
            <View style={styles.buttonCheck}>
                <Button style={styles.button} title="HORÁRIO FINAL" onPress={()=>{setExitTime(new Date().toLocaleString())}}></Button>
                <Text style={styles.textCheck}>{exitTime}</Text>
            </View>         
            <StatusBar style= "auto" />
        </View>
    );
}

export default ButtonRegistryHour;