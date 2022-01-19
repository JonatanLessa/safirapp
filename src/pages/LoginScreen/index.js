import React, { useContext, useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

import layoutStyles from '../../styles/styleLoginScreen';
import imgStyle from '../../styles/styleLoginScreen';

import appLogo from '../../assets/safir-mobile2.png';

import AuthContext from '../../context/AuthContext';

import { validate } from 'gerador-validador-cpf';
import Toast from 'react-native-toast-message';

export default function LoginScreen({ navigation }) {
  const [cpf, setCpf] = useState(null);

  const { handleLogin } = useContext(AuthContext)

  const onLogin = () => {
    if (validate(cpf)) {
      handleLogin(navigation, cpf)
    } else {
      Toast.show({
        type: 'error',
        text1: 'CPF Inválido',
        position: 'bottom'
      });
    }
  }

  return (
    <SafeAreaView style={layoutStyles.container}>
      <View style={layoutStyles.centerLayout}>
        <Image source={appLogo} style={imgStyle.logo} />
        <Text> Insira seu CPF para continuar: </Text>
        <TextInput
          onChangeText={setCpf}
          keyboardType="numeric"
          style={layoutStyles.input}
          value={cpf}
        />
        <Button
          title="Entrar"
          onPress={onLogin}
        />
      </View>
    </SafeAreaView>
  );
}
