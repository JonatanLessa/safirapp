import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    viewCheck: {
        backgroundColor: '#ffe4c4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCheck: {
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: '#deb887',
        padding: 10,
        borderRadius: 10,
    },
    buttonCheck: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '70%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
});

export default styles;