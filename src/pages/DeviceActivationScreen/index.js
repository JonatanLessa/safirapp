import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements/dist/buttons/Button';

import styles from '../../styles/styleShowScreen';
import bs from '../../styles/button';
import waterPump from '../../../assets/water-pump01.png';
import sprinkler from '../../../assets/sprinkler.png';
import imgStyle from '../../styles/imgStyle';

export default function DeviceActivationScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: 'ATIVAÇÃO DE DISPOSITIVOS' });
    }, []);

    const [deviceOn1, setDeviceOn1] = useState(false)
    const toggleDeviceOn1 = () => setDeviceOn1(!deviceOn1)

    const [deviceOn2, setDeviceOn2] = useState(false)
    const toggleDeviceOn2 = () => setDeviceOn2(!deviceOn2)

    const [deviceOn3, setDeviceOn3] = useState(false)
    const toggleDeviceOn3 = () => setDeviceOn3(!deviceOn3)

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.viewDeviceActivationScreen}>
                <View>
                    <View>
                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}> BOMBA D&apos;ÁGUA: </Text>
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -40 }}>
                        <Image source={waterPump} style={imgStyle.waterPump} />
                        <Button
                            buttonStyle={deviceOn1 ? bs.buttonDeviceOn : bs.buttonDeviceOff}
                            title={deviceOn1 ? 'ON' : 'OFF'}
                            onPress={toggleDeviceOn1}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}> REGISTRO SETOR 01: </Text>
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -40 }}>
                        <Image source={sprinkler} style={imgStyle.waterPump} />
                        <Button
                            buttonStyle={deviceOn2 ? bs.buttonDeviceOn : bs.buttonDeviceOff}
                            title={deviceOn2 ? 'ON' : 'OFF'}
                            onPress={toggleDeviceOn2}
                        />
                    </View>
                </View>
                <View>
                    <View>
                        <Text style={{ fontSize: 11, fontWeight: 'bold' }}> REGISTRO SETOR 02: </Text>
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", marginRight: 20, marginTop: -40 }}>
                        <Image source={sprinkler} style={imgStyle.waterPump} />
                        <Button
                            buttonStyle={deviceOn3 ? bs.buttonDeviceOn : bs.buttonDeviceOff}
                            title={deviceOn3 ? 'ON' : 'OFF'}
                            onPress={toggleDeviceOn3}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
