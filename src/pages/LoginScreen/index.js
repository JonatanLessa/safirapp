import React, {useContext, useState} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import layoutStyles from '../../styles/style';
import imgStyle from '../../styles/imgStyle';

import appLogo from '../../../assets/safir-mobile2.png';

import AuthContext from '../../context/AuthContext';

export default function LoginScreen({ navigation }) {
  const [cpf, setCpf] = useState(null);

  const { handleLogin } = useContext(AuthContext)

  return (
    <SafeAreaView style={layoutStyles.container}>
      <View style={styles.centerLayout}>
        <Image source={appLogo} style={imgStyle.logo} />

        <Text> Insira seu CPF para continuar: </Text>
        <TextInput
          onChangeText={setCpf}
          keyboardType="numeric"
          style={styles.input}
          value={cpf}
        />

        <Button
          title="Entrar"
          onPress={() => handleLogin(navigation, cpf)}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  centerLayout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  }
});
