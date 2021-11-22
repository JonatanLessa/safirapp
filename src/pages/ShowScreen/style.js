import { StyleSheet } from 'react-native';


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#ffe4c4',
        alignItems: 'center',
        justifyContent: 'center',
      },
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
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    buttonBack:{
        backgroundColor: '#deb887',
        padding: 6,
        borderRadius: 10,
    } 
});

export default styles;