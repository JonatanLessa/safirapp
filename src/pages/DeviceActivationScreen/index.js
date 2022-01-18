import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image,
  SafeAreaView, 
  } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';

import app from '../../config/firebaseconfig';
import { getDatabase, ref, set, onValue } from 'firebase/database';
//import init from 'react_native_mqtt';
//import uuid from 'react-native-uuid';

import styles from '../../styles/styleShowScreen';
import bs from '../../styles/button';
import waterPump from '../../../assets/water-pump01.png'; 
import sprinkler from '../../../assets/sprinkler.png';
import imgStyle from '../../styles/imgStyle'; 
import { async } from '@firebase/util';


export default function DeviceActivationScreen() {
    const navigation = useNavigation();
    const [state, setState] = useState();

    useEffect (()=> {
        navigation.setOptions({ title: 'ATIVAÇÃO DE DISPOSITIVOS' });
    },[]);   

    useEffect (()=> {
        getDataFromService();
        return()=> {
            setState({});
        };
    },[]);  

    const fState = () => {
        if( state == 0 ) {
            setState(1);
        } else {
            setState(0);
        }
    }

    const getDataFromService = () => {
        const db = getDatabase();
        const reference = ref(db, 'bombaDAgua');
    
        onValue(reference, (snapshot) => {
    
        console.log(snapshot.val().estado); 
        console.log("---------------");
        setState(snapshot.val().estado);    
        //return x = snapshot.val().estado;    
        });
    }
  
    const addStateDevice = (type) => {
    console.log(type);
    console.log(state);
    const db = getDatabase();
    const reference = ref(db, type);
        set(reference, {
            "estado" : state
        });
    }
    
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
                        //onConfirm = {()=> getDataFromService()}
                        onPress={() => {
                            addStateDevice("bombaDAgua")
                            fState()
                            //addStateDevice("bombaDAgua")
                        }}
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
                        onPress={() => {
                            setState(true)
                            addStateDevice("registro01")
                        }}
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
                        onPress={() => {
                            setState(true)
                            addStateDevice("registro02")
                        }}
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

    
*/