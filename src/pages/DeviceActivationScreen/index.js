import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image,
  SafeAreaView, 
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';

import app from '../../config/firebaseconfig';

import styles from '../../styles/styleShowScreen';
import bs from '../../styles/button';
import waterPump from '../../../assets/water-pump01.png'; 
import sprinkler from '../../../assets/sprinkler.png';
import imgStyle from '../../styles/imgStyle'; 


export default function DeviceActivationScreen() {
  const navigation = useNavigation();
  
  useEffect (()=> {
    navigation.setOptions({ title: 'ATIVAÇÃO DE DISPOSITIVOS' });
  },[]);
  
    
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={{  fontWeight: 'bold', marginTop: 180,}}> ESCOLHA O DISPOSITIVO: </Text>                
        </View>
        <View style={styles.viewDeviceActivationScreen}>           
            <View style={{ alignItems: "flex-start", flexDirection: "column", marginTop: 40 }}>
                <View>
                    <Text> BOMBA D'ÁGUA: </Text> 
                </View>                     
                <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -40  }}>             
                    <Image source={waterPump} style={imgStyle.waterPump}/> 
                    <Button
                        buttonStyle={bs.buttonBack}
                        title="ATIVAR "
                        onPress={() => navigation.navigate('LoginScreen')}
                    />
                </View>
            </View> 
            <View style={{ alignItems: "flex-start", flexDirection: "column",  }}>
                <View>
                    <Text> REGISTRO SETOR 01: </Text> 
                </View>                     
                <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -40  }}>             
                    <Image source={sprinkler} style={imgStyle.waterPump}/> 
                    <Button
                        buttonStyle={bs.buttonBack}
                        title="ATIVAR "
                        onPress={() => navigation.navigate('LoginScreen')}
                    />
                </View>
            </View> 
            <View style={{ alignItems: "flex-start", flexDirection: "column",  }}>
                <View>
                    <Text> REGISTRO SETOR 02: </Text> 
                </View>                     
                <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -40  }}>             
                    <Image source={sprinkler} style={imgStyle.waterPump}/> 
                    <Button
                        buttonStyle={bs.buttonBack}
                        title="ATIVAR "
                        onPress={() => navigation.navigate('LoginScreen')}
                    />
                </View>
            </View> 
            
        </View>     
        <View style={{ marginBottom: 200, marginTop: -150 }}>
                <Button
                    buttonStyle={bs.buttonBack2}
                    title="VOLTAR "
                    onPress={() => navigation.navigate('LoginScreen')}
                />
            </View>   
    
    </SafeAreaView>
  );
}
/*
<View>
            <Text style={{  fontWeight: 'bold', marginTop: 20,}}> ESCOLHA O DISPOSITIVO: </Text>                
        </View>
            <View style={{ alignItems: "flex-start", flexDirection: "column", justifyContent: "space-between",}}>
                <View>  
                    <Text> REGISTRO SETOR 01: </Text> 
                </View>           
                <View style={{ alignItems: "center", flexDirection: "row", marginRight: 50, marginTop: 100 }}>                 
                    <Image source={sprinkler} style={imgStyle.waterPump}/> 
                    <Button
                        buttonStyle={bs.buttonBack}
                        title="ATIVAR "
                        onPress={() => navigation.navigate('LoginScreen')}
                    /> 
                </View>
            </View>
            <View style={{ alignItems: "flex-start", flexDirection: "column", justifyContent: "space-between",}}>
                <View>
                    <Text> REGISTRO SETOR 02: </Text>   
                </View>               
                <View style={{ alignItems: "center", flexDirection: "row", marginRight: 50, marginTop: 100}}>
                    <Image source={sprinkler} style={imgStyle.waterPump}/>
                    <Button
                        buttonStyle={bs.buttonBack}
                        title="ATIVAR "
                        onPress={() => navigation.navigate('LoginScreen')}
                    /> 
                </View>                       
            </View>            



<View>
      <Image source={sprinkler} style={imgStyle.logo}/>
      </View>
      <Text> REGISTRO SETOR 01: </Text>
      <View>
      <Image source={sprinkler} style={imgStyle.logo}/>
      </View>
      <Text> REGISTRO SETOR 02: </Text>*/