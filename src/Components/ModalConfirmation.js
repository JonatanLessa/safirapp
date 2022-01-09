import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';

export default function ModalConfirmation(props){

    const { visible, setVisible, onConfirm } = props

    return(
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
                            onPress={()=>{
                                onConfirm()
                                setVisible(false)
                            }}
                        />
                        <Button style={styles.buttonView}
                            title="Cancelar"
                            onPress={()=>{setVisible(false)}}
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity  
                style={styles.buttonStyle}
                onPress={props.onPress} >
                <Text style={{ textAlign: 'center', marginTop: 15 }}>
                    {props.title}
                 </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewText: {     
        backgroundColor: '#deb887',
        borderRadius: 20,
        elevation: 100,
        marginTop: 400,
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 20,
        paddingHorizontal: 40,
        flexDirection: "column",
    },
    textModal: {
        color: '#fff',
        fontSize: 20,
        height: 60,
    }, 
    viewButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
    },
    button: {

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