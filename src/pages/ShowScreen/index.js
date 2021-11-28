import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../styles/styleShowScreen';
import bs from '../../styles/button';
import ButtonSearch from '../../Components/ButtonSearch';

export default function ShowScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Consultar Registro' });

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
        <Text>Entre com a Data</Text>
          <TextInput
            style={styles2.input}
            placeholder="ex. 01-01-2021"
            onChangeText={(key) => setDate(key)}
          />       
        <ButtonSearch
          title={"BUSCAR HORÁRIO DE ENTRADA PARA"}
          value={entryInfo}
          onPress={() => {
            SearchEntry(`ENTRY-${date}`);
          }}
        />
        <Text>Entre com a Data</Text>
          <TextInput
            style={styles2.input}
            placeholder="ex. 01-01-2021"
            onChangeText={(key) => setDate(key)}
          />       
        <ButtonSearch
          title={"BUSCAR HORÁRIO DE SAÍDA PARA"}
          value={exitInfo}
          onPress={() => {
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
