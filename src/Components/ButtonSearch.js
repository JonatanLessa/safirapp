import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default function ButtonSearch(props)  { 

  return (
    <View style={styles.viewCheck}>
      <View style={styles.buttonCheck}>
        <TouchableOpacity  
            style={styles.buttonStyle}
            onPress={props.onPress} >
            <Text style={{ textAlign: 'center', marginTop: 15 }}>
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
    buttonStyle: {
      marginTop: 25,
      backgroundColor: '#8CDB94',
      width: 280,
      height: 50,
      borderRadius: 5,
    },
    buttonCheck: {
      flexDirection: 'column',
      justifyContent: 'center',
      width: '70%',
    },
    textCheck: {
        fontWeight: 'bold',
        fontSize: 20,
      }, 
});