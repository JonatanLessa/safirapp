import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    viewCheck: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textCheck: {
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonStyle: {
        marginTop: 25,
        backgroundColor: '#8CDB94',
        width: 280,
        height:50,
        borderRadius: 5,
    },
    buttonCheck: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '70%'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius:8,
        padding: 10,
        margin: 5,
        marginLeft: 0,
        marginTop: 15,
        width: 280,
    },
    // button: {
    //     backgroundColor: '#8CDB94',
    //     padding: 10,
    //     borderRadius: 10,
    //     borderWidth: 1,
    //     borderColor: '#000',
    //     width: 300,
    //     margin: 10,
    //     marginTop: 20
    // }
});

export default styles;