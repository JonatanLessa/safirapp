import React, { useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');

  function handleSubmit(){
    alert(peso);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}> SAFIR</Text>
      <Text style={styles.descricao}>Sistema Automatizado para Fruticultura Irrigada</Text>

      <TextInput 
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (kg)"
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >

        <Text style={styles.buttonText}>Testar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{//grupo de estilos
    flex:1,
    backgroundColor: '#ffe4c4',
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  titulo:{
    textAlign: 'center',
    marginTop: 225,
    fontSize: 50,
    color: '#d2691e'
  },
  descricao:{
    fontSize: 20,
    color: '#a52a2a',
    textAlign: 'center'
  },
  input:{
    backgroundColor: '#a52a2a',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#f0ffff',
    fontSize: 23,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#7fffd4',
    padding: 10,
  },
  buttonText:{
    color: '#f0f8ff',
    fontSize: 25,
  }
});