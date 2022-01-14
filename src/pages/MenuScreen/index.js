import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles/style';
import btn from '../../styles/button';
import imgStyle from '../../styles/imgStyle';

import appLogo from '../../../assets/safir-mobile2.png';

export default function MenuScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Safir - Registro de Ponto' });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={appLogo} style={imgStyle.logo} />
        <Text style={styles.textTitle}>REGISTRO DE PONTO</Text>
        <Button
          buttonStyle={btn.buttonShowScreen}
          title="REGISTRO DE PONTO"
          onPress={() => {
            navigation.navigate('RegistryScreen');
          }}
        />
        <Button
          buttonStyle={btn.buttonShowScreen}
          title="CONSULTAR REGISTRO"
          onPress={() => {
            navigation.navigate('ShowScreen');
          }}
        />
        <Button
          buttonStyle={btn.buttonShowScreen}
          title="ATIVAÇÃO DE DISPOSITIVOS"
          onPress={() => {
            navigation.navigate('DeviceActivationScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
}
