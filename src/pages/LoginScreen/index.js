import React, {useState} from 'react';
import {
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

export default function LoginScreen() {
  const [cpf, setCpf] = useState(null);

  return (
    <SafeAreaView style={layoutStyles.container}>
      <View style={layoutStyles.container}>
        <Image source={appLogo} style={imgStyle.logo} />

        <Text> Insira seu CPF para continuar: </Text>
        <TextInput
          onChangeText={setCpf}
          keyboardType="numeric"
          style={styles.input}
          value={cpf}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
});
