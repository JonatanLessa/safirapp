import React, {useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";

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

const styles = StyleSheet.create ({
    viewCheck: {
        backgroundColor: '#ffe4c4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCheck: {
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: '#deb887',
        padding: 10,
        borderRadius: 10,
        //position: 'absolute',
        //width: 60,
        //height: 60,
        //justifyContent: 'center',
        //alignItems: 'center',
        //margin: 15,        
        //right: 25,
        //bottom: 25,
        //elevation: 2,
        //zIndex: 9,
        //shadowColor: '#000',
        //shadowOpacity: 0.2,

    },
    buttonCheck: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '70%'
    },
    button: {
        width: '40%'
    }
});

export default ButtonRegistryHour;