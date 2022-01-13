import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import btn from '../styles/button'

export default function ButtonDataPicker(props) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {  
        const currentDate = selectedDate || date;     
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = ('0' + tempDate.getDate()).slice(-2) + '-' + ('0' + (tempDate.getMonth() + 1)).slice(-2) + '-' + tempDate.getFullYear();
      
        //console.log(fDate) 
        //console.log(date)  
        props.onDateSelect(fDate)        
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return(
        <View style={styles.viewCheck}>
            <View style={styles.buttonCheck}>
                <TouchableOpacity
                    style={btn.buttonShowScreen}
                    onPress={ () => showMode('date')}>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: '#fff', fontWeight: 'bold' }}>
                        {props.title}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.textCheck}>{props.value}</Text>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />            
            )}           
        </View>
    );
}

const styles = StyleSheet.create({
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