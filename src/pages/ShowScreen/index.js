import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  FlatList,
  Alert,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { getDatabase, ref, onValue } from 'firebase/database';

import app from '../../config/firebaseconfig';

import styles from '../../styles/styleShowScreen';
import bs from '../../styles/button';
import ButtonDataPicker from '../../Components/ButtonDataPicker';
import ButtonRegisterSearch from '../../Components/ButtonRegisterSeach';


export default function ShowScreen() {
  const navigation = useNavigation();
  
  useEffect (()=> {
    navigation.setOptions({ title: 'CONSULTAR PONTO' });
  },[]);
  //armazena a data selecionada pelo componente DataPicker
  const [date, setDate] = useState('');
  //armazena dados dos objetos com registro na entrada
  const [dataEntry, setDataEntry] = useState([]);
  //armazena dados dos objetos com registro na saída
  const [dataExit, setDataExit] = useState([]);  
  //Resgata dos dados do Realtime Database
  const getDataFromService = () => {
    const db = getDatabase();
    const reference = ref(db, 'registroPonto');

    onValue(reference, (snapshot) => {

    const entryArray = [];
    const exitArray = [];
    //Encontra objetos com a data de entrada e saída selecionada pelo DataPicker e add nos arrays
    snapshot.forEach(data => {
      if( data.val().dateEntry == date) {
        entryArray.push({
          id: data.key,
          data: data.val().dateEntry,
          hora: data.val().hour  
        });
      }
    });
    snapshot.forEach(data => {
      if( data.val().dateExit == date) {
        exitArray.push({
          id: data.key,
          data: data.val().dateExit,
          hora: data.val().hour  
        });
      }
    });
    //Armazena 
    setDataEntry(entryArray);  
    setDataExit(exitArray);
        
    alerta(entryArray.length, exitArray.length);       
    })
  }
  //Alerta em caso de não registro na data
  const alerta = (entryArray, exitArray) => {  
    if((entryArray == 0) && (exitArray == 0)) {             
     Alert.alert("NÃO EXISTE REGISTRO PARA ESSA DATA! ")  
    }   
  }  
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewCheck}>               
        <Text style={{ fontWeight: 'bold', margin: 10 }}>
          HORA DA ENTRADA/SAIDA
        </Text>        
        <ButtonDataPicker
          title={"SELECIONAR DATA"}
          value={date}
          onDateSelect={(selectedDate) => {
            setDate(selectedDate)
          }}
        />        
         <ButtonRegisterSearch
          title={"LISTAR REGISTROS"}
          value={''}
          onPress={() => {            
            getDataFromService()             
          }}               
        />        
      </View>
      <Text> REGISTRO DE ENTRADAS: </Text>
      <FlatList 
          data={dataEntry}         
          renderItem={(obj)=>{
            if( obj.item.data == date){ 
              return(              
                <Text> {obj.item.data} às {obj.item.hora}</Text>
              )
            } 
          }}
      />
      <Text> REGISTRO DE SAÍDAS: </Text>
      <FlatList 
          data={dataExit}         
          renderItem={(obj)=>{
            if( obj.item.data == date ) {
              return(              
                <Text> {obj.item.data} às {obj.item.hora}</Text>
              )
            }
          }}
      />
      <View style={{ paddingBottom: 100 }}>
        <Button
          buttonStyle={bs.buttonBack2}
          title="VOLTAR "
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </SafeAreaView>
  );
}
/*
//Imprime dados no console
  const imprime = (entryArray, exitArray) => {
    dataEntry.forEach(function(nome) {      
      if (nome.data == date) {
        console.log("Entrada")
        console.log(nome.data)
        console.log(nome.hora)
      }
    });
    dataExit.forEach(function(nome) {      
      if (nome.data == date) {
        console.log("Saída")
        console.log(nome.data)
        console.log(nome.hora)
      }
    });    
  }  
  */