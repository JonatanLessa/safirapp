import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import btn from '../styles/button'

export default function ModalConfirmation(props) {
    const { visible, setVisible, onConfirm } = props

    return (
        <View>
            <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={visible}
            >
                <View style={styles.viewText}>
                    <Text style={styles.textModal}> CONFIRMA REGISTRO PARA {props.valueDate} ÀS {props.valueHour}</Text>
                    <View style={styles.viewButton}>
                        <Button
                            title="SIM"
                            onPress={() => {
                                onConfirm()
                                setVisible(false)
                            }}
                        />
                        <Button
                            title="Cancelar"
                            onPress={() => { setVisible(false) }}
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={btn.buttonRegistry}
                onPress={props.onPress} >
                <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 15, fontWeight: 'bold', color: '#fff' }}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewText: {
        backgroundColor: '#BCD0C5',
        borderRadius: 7,
        borderWidth: 2,
        borderColor: '#2CAF1D',
        elevation: 100,
        marginTop: 400,
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 20,
        paddingHorizontal: 40,
        flexDirection: "column",
    },
    textModal: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18,
        height: 60,
    },
    viewButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
    },
});
