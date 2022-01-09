import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { getDatabase, ref, onValue, connectDatabaseEmulator } from 'firebase/database';

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
  //armazena dados dos objetos
  const [data, setData] = useState([]);
  //armazena a data selecionada pelo componente DataPicker
  const [date, setDate] = useState('');
  //Resgata dos dados do Realtime Database
  const getDataFromService = () => {
    const db = getDatabase();
    const reference = ref(db, 'registroPonto');

    onValue(reference, (snapshot) => {

    const datas = [];
    snapshot.forEach(data => {
      datas.push({
        id: data.key,
        data: data.val().date,
        hora: data.val().hour  
      });
    });
    
    setData(datas);  
    imprime();       
    })
  }
  //Imprime dados no console
  const imprime = () => {
    data.forEach(function(nome) {      
      if (nome.data == date) {
        console.log(nome.data)
        console.log(nome.hora)
      }
    });
  }  
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewCheck}>               
        <Text style={{ fontWeight: 'bold', margin: 10 }}>
          HORA DA ENTRADA/SAIDA
        </Text>        
        <ButtonDataPicker
          title={"SELECIONAR DATA DE ENTRADA"}
          value={date}
          onDateSelect={(selectedDate) => {
            setDate(selectedDate)
          }}
        />        
         <ButtonRegisterSearch
          title={"LISTAR"}
          value={''}
          onPress={() => {            
            getDataFromService()             
          }}               
        />
      </View>
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