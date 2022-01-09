import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import moment from 'moment';

import app from '../../config/firebaseconfig';
import { getDatabase, ref, set, push } from 'firebase/database';

import styles from '../../styles/style';
import bs from '../../styles/button';

import ModalConfirmation from '../../Components/ModalConfirmation';

export default function RegistryScreen() {
  const navigation = useNavigation();
  
  useEffect (()=> {
    navigation.setOptions({ title: 'REGISTRAR PONTO' });
  },[]);  

  const greetings = () => {
    return `Olá ${'Marcelo'}!`;
  };
 
  const [date, setDate] = useState(''); 
  const [hour, setHour] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);

  const addData = () => {
      setDate(moment().format('DD-MM-YYYY').toString());
      setHour(moment().format('hh:mm:ss a').toString());           
  }

  const addDate = () => {
    const db = getDatabase();
    const reference = ref(db, 'registroPonto');
    push(reference, {
      "date" : date,
      "hour" : hour
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>{greetings()}</Text>
        <Text>Registre aqui os seus horários:</Text>        
        <ModalConfirmation
            title={"REGISTRAR ENTRADA"}
            valueDate={date}
            valueHour={hour}
            visible={visibleModal}
            setVisible={setVisibleModal}
            onConfirm={(addDate)}
            onPress={()=>{
              setVisibleModal(true)
              addData()
            }}
        />  
        <ModalConfirmation
            title={"REGISTRAR SAÍDA"}
            valueDate={date}
            valueHour={hour}
            visible={visibleModal}
            setVisible={setVisibleModal}
            onConfirm={(addDate)}
            onPress={()=>{
              setVisibleModal(true)
              addData()
            }}
        />    
      </View>
      <Button
        buttonStyle={bs.buttonBack}
        title="VOLTAR"
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />
      <StatusBar style="auto" />      
    </SafeAreaView>
  );
}
