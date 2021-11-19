import { StyleSheet } from 'react-native';


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
        //position: 'absolute',
        //width: 60,
        //height: 60,
        //justifyContent: 'center',
        //alignItems: 'center',
        //margin: 15,        
        //right: 25,
        //bottom: 25,
        //elevation: 2,
        //zIndex: 9,
        //shadowColor: '#000',
        //shadowOpacity: 0.2,

    },
    buttonCheck: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '70%'
    },
    button: {
        width: '40%'
    }
});

export default styles;