import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import btn from '../styles/button'

export default function ButtonRegisterSearch(props)  {
  return (
    <View style={styles.viewCheck}>
      <View style={btn.buttonCheck}>
        <TouchableOpacity  
            style={btn.buttonSearchShowScreen}
            onPress={props.onPress} >
            <Text style={{  textAlign: 'center', marginTop: 15, color: '#555', fontWeight: 'bold'  }}>
                {props.title}
            </Text>
        </TouchableOpacity>
        <Text style={styles.textCheck}>{props.value}</Text> 
      </View>
    </View>    
  );  
};

const styles = StyleSheet.create({
    viewCheck: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textCheck: {
        fontWeight: 'bold',
        fontSize: 20,
      }, 
});
