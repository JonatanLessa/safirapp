import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';

import { getDatabase, ref, push } from 'firebase/database';

import styles from '../../styles/style';

import ModalConfirmation from '../../components/ModalConfirmation';

export default function RegistryScreen() {
  const greetings = () => {
    return `Olá ${'Maria'}!`;
  };

  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [visibleModalEntry, setVisibleModalEntry] = useState(false);
  const [visibleModalExit, setVisibleModalExit] = useState(false);

  const addData = () => {
    setDate(moment().format('DD-MM-YYYY').toString());
    setHour(moment().format('hh:mm:ss a').toString());
  }

  const addDate = (type) => {
    console.log(type);
    const db = getDatabase();
    const reference = ref(db, 'registroPonto');
    push(reference, {
      [type]: date,
      "hour": hour
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{greetings()}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Registre aqui os seus horários:</Text>

      <View style={styles.registryContainer}>
        <ModalConfirmation
          title={"ENTRADA"}
          valueDate={date}
          valueHour={hour}
          visible={visibleModalEntry}
          setVisible={setVisibleModalEntry}
          onConfirm={() => addDate("dateEntry")}
          onPress={() => {
            setVisibleModalEntry(true)
            addData()
          }}
        />
        <ModalConfirmation
          title={"SAÍDA"}
          valueDate={date}
          valueHour={hour}
          visible={visibleModalExit}
          setVisible={setVisibleModalExit}
          onConfirm={() => addDate("dateExit")}
          onPress={() => {
            setVisibleModalExit(true)
            addData()
          }}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
