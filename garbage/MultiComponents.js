import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from "react-native";

const Cat = (props) => {
    return (
        <Text> Oi, eu sou {props.name}</Text>
    );
}

const Animais = () => {
    return (
        <View style={styles.container}>
            <Cat name="Lili"></Cat>
            <Cat name="Gabi"></Cat>
            <Cat name="Lulu"></Cat>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
});

export default Animais;