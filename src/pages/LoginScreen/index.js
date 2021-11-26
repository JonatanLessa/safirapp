import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles/style';
import bs from '../../styles/button';
import imgStyle from '../../styles/imgStyle';

import appLogo from '../../../assets/safir-mobile2.png';

export default function LoginScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ title: 'Safir - Registro de Ponto' });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={appLogo} style={imgStyle.logo} />
        <Text style={styles.textTitle}>REGISTRO DE PONTO</Text>
        <Button
          buttonStyle={bs.button}
          title="IR PARA O REGISTRO DE PONTO"
          onPress={() => {
            navigation.navigate('RegistryScreen');
          }}
        />
        <Button
          buttonStyle={bs.button}
          title="CONSULTAR REGISTRO"
          onPress={() => {
            navigation.navigate('ShowScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
