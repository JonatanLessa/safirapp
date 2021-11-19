import React, { useState} from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

export default function App(){
  return(
    //SafeAreaView no Iphone não deixa o texto em cima ou embaixo status bar
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#00008b' barStyle="light-content" />
      
      <view> </view>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#00008b'
  }
})
