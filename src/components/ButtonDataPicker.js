import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

import btn from '../styles/button'

export default function ButtonDataPicker(props) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (_, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = ('0' + tempDate.getDate()).slice(-2) + '-' + ('0' + (tempDate.getMonth() + 1)).slice(-2) + '-' + tempDate.getFullYear();

        props.onDateSelect(fDate)
    };

    return (
        <View style={styles.viewCheck}>
            <View style={styles.viewDate}>
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
            <View style={btn.buttonDateSelect}>
                <TouchableOpacity
                    style={btn.buttonDateShow}
                    onPress={() => setShow(true)}>
                    <Text style={{ textAlign: 'center', marginTop: 15, color: '#fff', fontWeight: 'bold' }}>
                        {props.title}
                    </Text>
                </TouchableOpacity>
            </View>           
        </View>
    );
}

const styles = StyleSheet.create({
    viewCheck: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCheck: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    viewDate: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#E5E5E5',
        width: 282,
        height: 50,
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
});
