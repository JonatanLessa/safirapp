import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';

import { getDatabase, ref, onValue, connectDatabaseEmulator } from 'firebase/database';

import app from '../../config/firebaseconfig';

import styles from '../../styles/styleShowScreen';
import ButtonDataPicker from '../../Components/ButtonDataPicker';
import ButtonRegisterSearch from '../../Components/ButtonRegisterSeach';
import { CONSTANTS } from '@firebase/util';

export default function ShowScreen() {

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
        if (data.val().dateEntry == date) {
          entryArray.push({
            id: data.key,
            data: data.val().dateEntry,
            hora: data.val().hour
          });
        }
      });
      snapshot.forEach(data => {
        if (data.val().dateExit == date) {
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
    if ((entryArray == 0) && (exitArray == 0)) {
      Alert.alert("NÃO EXISTE REGISTRO PARA ESSA DATA! ")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: 'bold', margin: 10, marginTop: 50 }}>
        HORA DA ENTRADA/SAIDA
      </Text>
      <View style={styles.viewCheck}>
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
      <View style={styles.viewReport}>
        <FlatList
          data={dataEntry}
          renderItem={(obj) => {
            if (obj.item.data == date) {
              return (
                <Text style={{ fontWeight: 'bold' }}>
                  {obj.item.data} às {obj.item.hora}
                </Text>
              )
            }
          }}
        />
        <Text style={{ color: '#fff', fontWeight: 'bold' }}> ENTRADA </Text>
      </View>
      <View style={styles.viewReport2}>
        <FlatList
          data={dataExit}
          renderItem={(obj) => {
            if (obj.item.data == date) {
              return (
                <Text style={{ fontWeight: 'bold' }}>
                  {obj.item.data} às {obj.item.hora}
                </Text>
              )
            }
          }}
        />
        <Text style={{ color: '#fff', fontWeight: 'bold' }}> SAÍDA </Text>
      </View>
    </SafeAreaView>
  );
}
