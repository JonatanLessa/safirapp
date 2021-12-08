import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet,
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dataBase from '../../config/firebaseconfig';
import { collection, getDocs } from "firebase/firestore";

import styles from '../../styles/styleShowScreen';
import bs from '../../styles/button';
import ButtonDataPicker from '../../Components/ButtonDataPicker';

export default function ShowScreen() {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(dataBase, "users");
  
  useEffect (()=> {
    navigation.setOptions({ title: 'CONSULTAR PONTO' });
  },[]);
/*
  useEffect (() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
*/
  const [entryInfo, setEntryInfo] = useState(null);
  const [exitInfo, setExitInfo] = useState(null);

  const [date, setDate] = useState('');

  const SearchEntry = async (key) => {
    const value = await AsyncStorage.getItem(key);
    setEntryInfo(value);
  };

  const SearchExit = async (key) => {
    const value = await AsyncStorage.getItem(key);
    setExitInfo(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewCheck}>     
          
        <Text style={{ fontWeight: 'bold', margin: 10 }}>
          HORA DA ENTRADA/SAIDA
        </Text> 
               
        <ButtonDataPicker
          title={"SELECIONAR DATA DE ENTRADA"}
          value={entryInfo}
          onDateSelect={(selectedDate) => {
            setDate(selectedDate)
            SearchEntry(`ENTRY-${date}`);
          }}
        />                
        <ButtonDataPicker
          title={"SELECIONAR DATA DE SAÍDA"}
          value={exitInfo}
          onDateSelect={(selectedDate) => {
            setDate(selectedDate)
            SearchExit(`EXIT-${date}`);
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

const styles2 = StyleSheet.create({

  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    marginLeft: 0,
    marginTop: 15,
    width: 280,
  },
});
/* 
        <Text>Entre com a Data</Text>
          <TextInput
            style={styles2.input}
            placeholder="ex. 01-01-2021"
            onChangeText={(key) => setDate(key)}
          />       
        <ButtonRegisterSearch
          title={"BUSCAR HORÁRIO DE SAÍDA PARA"}
          value={exitInfo}
          onPress={() => {
            SearchExit(`EXIT-${date}`);
          }}
        />


        {users.map((user) => {
          return (
            <Text>Nome:{user.data}</Text>
         )
        })} 
         
          */