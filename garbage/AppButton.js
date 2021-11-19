import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AppButton() {

//  return (
//    <Button title="Enviar" styles={styles.buttonStyle}></Button>
//  );
//}
  return (
    <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Enviar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#deb887',
    padding: 6,
    borderRadius: 10,
  },
  buttonTextStyle: {
      fontWeight: 'bold',
  }
});