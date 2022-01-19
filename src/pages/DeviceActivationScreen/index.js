import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';

import { getDatabase, ref, set, onValue } from 'firebase/database';

import styles from '../../styles/styleShowScreen';
import bs from '../../styles/button';
import waterPump from '../../../assets/water-pump01.png';
import sprinkler from '../../../assets/sprinkler.png';
import imgStyle from '../../styles/imgStyle';

export default function DeviceActivationScreen() {
    const navigation = useNavigation();
    const [state, setState] = useState();
    const [read, setRead] = useState();

    const [deviceOn1, setDeviceOn1] = useState(false)
    const toggleDeviceOn1 = () => setDeviceOn1(!deviceOn1)

    const [deviceOn2, setDeviceOn2] = useState(false)
    const toggleDeviceOn2 = () => setDeviceOn2(!deviceOn2)

    const [deviceOn3, setDeviceOn3] = useState(false)
    const toggleDeviceOn3 = () => setDeviceOn3(!deviceOn3)

    useEffect(() => {
        navigation.setOptions({ title: 'ATIVAÇÃO DE DISPOSITIVOS' });
        getDataFromService();
        return () => {
            setRead({});
        };
    }, []);

    useEffect(() => {
        if (read == 0) {
            setState(1);
        } else {
            setState(0);
        }
    }, [read]);

    const getDataFromService = () => {
        const db = getDatabase();
        const reference = ref(db, 'bombaDAgua');

        onValue(reference, (snapshot) => {
            setRead(snapshot.val().estado);
        });
    }

    const addStateDevice = (type) => {
        console.log(type);
        console.log(state);
        const db = getDatabase();
        const reference = ref(db, type);
        set(reference, {
            "estado": state
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewDeviceActivationScreen}>
                <View>
                    <View>
                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}> BOMBA D'ÁGUA: </Text>
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -55 }}>
                        <Image source={waterPump} style={imgStyle.waterPump} />
                        <Button
                            buttonStyle={deviceOn1 ? bs.buttonDeviceOn : bs.buttonDeviceOff}
                            title={deviceOn1 ? 'ON' : 'OFF'}
                            onPress={() => {
                                addStateDevice("bombaDAgua")
                                toggleDeviceOn1()
                            }}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}> REGISTRO SETOR 01: </Text>
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -55 }}>
                        <Image source={sprinkler} style={imgStyle.waterPump} />
                        <Button
                            buttonStyle={deviceOn2 ? bs.buttonDeviceOn : bs.buttonDeviceOff}
                            title={deviceOn2 ? 'ON' : 'OFF'}
                            onPress={() => {
                                addStateDevice("registro01")
                                toggleDeviceOn2()
                            }}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}> REGISTRO SETOR 02: </Text>
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -55 }}>
                        <Image source={sprinkler} style={imgStyle.waterPump} />
                        <Button
                            buttonStyle={deviceOn3 ? bs.buttonDeviceOn : bs.buttonDeviceOff}
                            title={deviceOn3 ? 'ON' : 'OFF'}
                            onPress={() => {
                                addStateDevice("registro02")
                                toggleDeviceOn3()
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}