import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  viewDeviceActivationScreen: {
    marginTop: 10,
    flexDirection: "column",
    marginLeft: 50,
  },
  logo: {
    width: 250,
    resizeMode: 'contain',
  },
  waterPump: {
    marginTop: 10,
    width: 70,
    height: 70,
  },
  buttonImageIconStyle: {
    padding: 10, 
    margin: 5, 
    height: 25, 
    width: 25, 
    resizeMode: 'stretch', 
  },
});

export default styles;