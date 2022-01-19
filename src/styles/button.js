import { StyleSheet } from 'react-native';

const styleButton = StyleSheet.create({ 
  buttonDeviceOn: { //DeviceActivationScreen
    backgroundColor: '#8CDB94',
    padding: 15,
    borderRadius: 100,
    borderLeftWidth: 5,
    borderLeftColor: '#2FA822',
    borderRightWidth: 1,
    borderRightColor: '#2FA822',
    borderBottomWidth: 5,
    borderBottomColor: '#2FA822',
    width: 80,
    margin: 80,
  },
  buttonDeviceOff: { //DeviceActivationScreen
    backgroundColor: '#FD0201',
    padding: 15,
    borderRadius: 100,
    borderLeftWidth: 5,
    borderLeftColor: '#CF0100',
    borderRightWidth: 1,
    borderRightColor: '#CF0100',
    borderBottomWidth: 5,
    borderBottomColor: '#CF0100',
    width: 80,
    margin: 80,
  },
  buttonRegistry: { // ButtonModalConfirmation
    width: 150,
    height: 220,
    backgroundColor: '#8CDB94',
    borderColor: '#999',
    borderWidth: 1,
    margin: 5,
    borderRadius: 5
  },
  buttonDateShow: { // ButtonDataPicker
    marginTop: 10,
    backgroundColor: '#77787C',
    borderColor: '#E5E5E5',
    borderWidth: 2,
    width: 173,
    height: 50,
    borderRadius: 5,
  },
  buttonDateSelect: { // ButtonDataPicker
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  buttonCheck: { //ButtonRegisterScreen
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  buttonSearchShowScreen: { //ButtonRegisterScreen
    marginTop: 10,
    backgroundColor: '#72CBF5',
    borderColor: '#E5E5E5',
    borderWidth: 2,
    width: 100,
    height: 50,
    borderRadius: 5,
  }, 
});

export default styleButton;
