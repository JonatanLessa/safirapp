import { StyleSheet } from 'react-native';
import { withBadge } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  viewCheck: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textCheck: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewReport: {
    flexDirection: 'row',
    backgroundColor: '#72CBF5',
    width: 280,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  viewReport2: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#F65859',
    width: 280,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  viewDeviceActivationScreen: {
    marginTop: 10,
    flexDirection: "column",
    marginLeft: 50,
  },
});

export default styles;
