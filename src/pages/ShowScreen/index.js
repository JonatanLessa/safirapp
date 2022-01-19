import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Alert,
  } from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';

import styles from '../../styles/styleShowScreen';
import ButtonDataPicker from '../../components/ButtonDataPicker';
import ButtonRegisterSearch from '../../components/ButtonRegisterSeach';
import AuthContext from '../../context/AuthContext';

export default function ShowScreen() {
  //armazena a data selecionada pelo componente DataPicker
  const [date, setDate] = useState('');
  //armazena dados dos objetos com registro na entrada
  const [dataEntry, setDataEntry] = useState([]);
  //armazena dados dos objetos com registro na pausa
  const [dataPause, setDataPause] = useState([]);
  //armazena dados dos objetos com registro no retorno
  const [dataReturn, setDataReturn] = useState([]);
  //armazena dados dos objetos com registro na saída
  const [dataExit, setDataExit] = useState([]);
  //Resgata dos dados do Realtime Database

  const [currentUser, setCurrentUser] = useState("");

  const { getCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    getCurrentUser().then(cpf => {
      setCurrentUser(cpf);
    });
  }, []);

  const getDataFromService = () => {
    const db = getDatabase();
    const reference = ref(db, `users/${currentUser}/registro_ponto`);

    onValue(reference, (snapshot) => {
      const entryArray = [];
      const pauseArray = [];
      const returnArray = [];
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
        if (data.val().datePause == date) {
          pauseArray.push({
            id: data.key,
            data: data.val().datePause,
            hora: data.val().hour
          });
        }
      });
      snapshot.forEach(data => {
        if (data.val().dateReturn == date) {
          returnArray.push({
            id: data.key,
            data: data.val().dateReturn,
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
      setDataEntry(entryArray);      
      setDataPause(pauseArray);
      setDataReturn(returnArray);
      setDataExit(exitArray);

      alerta(entryArray.length, exitArray.length);
    })
  }
  //Alerta em caso de não registro na data
  const alerta = (entryArray, exitArray) => {
    if ((entryArray == 0) && (exitArray == 0)) {
      Alert.alert("NÃO HÁ REGISTRO NESSA DATA!")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: 'bold', margin: 10, marginTop: 50 }}>
        DATA DA ENTRADA/SAIDA
      </Text>
      <View style={styles.viewCheck}>
        <ButtonDataPicker
          title={"SELECIONAR DATA"}
          value={date}
          onDateSelect={(selectedDate) => {
            setDate(selectedDate)
          }}
        />
      </View>
      <View style={styles.viewCheck2}>
        <ButtonRegisterSearch
          title={"PESQUISAR"}
          value={''}
          onPress={() => {
            getDataFromService()
          }}
        />
      </View>
      <Text style={{ fontWeight: 'bold', margin: 10, marginTop: 10 }}>
        RESULTADO DA PESQUISA
      </Text>
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
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}> ENTRADA </Text>
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
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}> PAUSA </Text>
      </View>
      <View style={styles.viewReport3}>
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
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}> RETORNO </Text>
      </View>
      <View style={styles.viewReport4}>
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
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}> SAÍDA </Text>
      </View>
    </SafeAreaView>
  );
}