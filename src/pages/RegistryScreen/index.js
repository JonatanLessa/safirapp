import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

import styles from '../../styles/style';
import bs from '../../styles/button';

import ButtonRegisterSearch from '../../Components/ButtonRegisterSeach';

export default function RegistryScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Registrar Ponto' });

  const greetings = () => {
    return `Olá ${'Marcelo'}!`;
  };
 
  const [entryTime, setEntryTime] = useState(0); 
  const [exitTime, setExitTime] = useState(0); 
  
  const StoreEntry = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  const StoreExit = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>{greetings()}</Text>
        <Text>Registre aqui os seus horários:</Text>
       <ButtonRegisterSearch
          title={"HORÁRIO INICIAL"}
          value={entryTime}
          onPress={() => {setEntryTime(moment().format('DD-MM-YYYY hh:mm:ss a'));
            {
              StoreEntry(
                `ENTRY-${moment().format('DD-MM-YYYY').toString()}`,
                moment().format('hh:mm:ss a').toString(),
              );
            }                
          }}            
        />                 
        <ButtonRegisterSearch
          title={"HORÁRIO FINAL"}
          value={exitTime}
          onPress={() => {setExitTime(moment().format('DD-MM-YYYY hh:mm:ss a'));
            {
              StoreExit(
                `EXIT-${moment().format('DD-MM-YYYY').toString()}`,
                moment().format('hh:mm:ss a').toString(),
              );
            }                
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
