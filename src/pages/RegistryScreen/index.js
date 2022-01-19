import React, { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';

import { getDatabase, ref, push } from 'firebase/database';

import styles from '../../styles/style';

import ModalConfirmation from '../../components/ModalConfirmation';
import AuthContext from '../../context/AuthContext';

export default function RegistryScreen() {
  const greetings = () => {
    return `Olá ${currentUser}!`;
  };

  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [visibleModalEntry, setVisibleModalEntry] = useState(false);  
  const [visibleModalPause, setVisibleModalPause] = useState(false);
  const [visibleModalReturn, setVisibleModalReturn] = useState(false);
  const [visibleModalExit, setVisibleModalExit] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const { getCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    getCurrentUser().then(cpf => {
      setCurrentUser(cpf);
    });
  }, []);

  const addData = () => {
    setDate(moment().format('DD-MM-YYYY').toString());
    setHour(moment().format('hh:mm:ss a').toString());
  }

  const addDate = (type) => {
    const db = getDatabase();
    const reference = ref(db, `users/${currentUser}/registro_ponto`);
    push(reference, {
      [type]: date,
      "hour": hour
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{greetings()}</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Registre aqui os seus horários:</Text>
      <View>
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
            title={"PAUSA"}
            valueDate={date}
            valueHour={hour}
            visible={visibleModalPause}
            setVisible={setVisibleModalPause}
            onConfirm={() => addDate("datePause")}
            onPress={() => {
              setVisibleModalPause(true)
              addData()
            }}
          />
        </View>
        <View style={styles.registryContainer}>
          <ModalConfirmation
            title={"RETORNO"}
            valueDate={date}
            valueHour={hour}
            visible={visibleModalReturn}
            setVisible={setVisibleModalReturn}
            onConfirm={() => addDate("dateReturn")}
            onPress={() => {
              setVisibleModalReturn(true)
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
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
