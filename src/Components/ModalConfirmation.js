import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import btn from '../styles/button'
import styles2 from '../styles/imgStyle'
// import Entry from '../../../assets/entry.png'
// import Exit from '../../../assets/exit.png'

export default function ModalConfirmation(props) {

    const { visible, setVisible, onConfirm } = props

    return (
        <View>
            <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={visible}
                style={{}}
            >
                <View style={styles.viewText}>
                    <Text style={styles.textModal}>CONFIRMA REGISTRO PARA {props.valueDate} ÀS {props.valueHour}</Text>
                    <View style={styles.viewButton}>
                        <Button style={styles.buttonView}
                            title="SIM"
                            onPress={() => {
                                onConfirm()
                                setVisible(false)
                            }}
                        />
                        <Button style={styles.buttonView}
                            title="Cancelar"
                            onPress={() => { setVisible(false) }}
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={btn.buttonRegistryEntry}
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
    buttonView: {
        borderRadius: 20,

    },
    viewCheck: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        marginTop: 25,
        backgroundColor: '#8CDB94',
        width: 280,
        height: 50,
        borderRadius: 5,
    },
    buttonCheck: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '70%',
    },
    textCheck: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});