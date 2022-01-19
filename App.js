import React, { useContext }  from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/pages/LoginScreen';
import RegistryScreen from './src/pages/RegistryScreen';
import ShowScreen from './src/pages/ShowScreen';
import DeviceActivationScreen from './src/pages/DeviceActivationScreen';
import AuthContext, { AuthContextProvider } from './src/context/AuthContext';

import _app from './src/config/firebaseconfig'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const LogoutButton = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <MaterialIcons.Button
      name="logout"
      size={20}
      iconStyle={{marginLeft: 15}}
      backgroundColor="rgba(0, 0, 0, 0)"
      color="#000"
      onPress={handleLogout}
    />
  )
}

const ProtectedRoutes = () => {
  const logoutButtonOptions = { headerRight: () => <LogoutButton /> }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Registro') {
            iconName = focused ? 'finger-print-outline' : 'finger-print';
          }
          else if (route.name === 'Relatório') {
            iconName = focused ? 'reader-outline' : 'reader';
          }
          else if (route.name === 'Dispositivos') {
            iconName = focused ? 'flash-outline' : 'flash';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
          tabBarActiveTintColor: '#8CDB94',
          tabBarInactiveTintColor: '#000',
      })}
    >
      <Tab.Screen name="Registro" component={RegistryScreen} options={logoutButtonOptions} />
      <Tab.Screen name="Relatório" component={ShowScreen} options={logoutButtonOptions} />
      <Tab.Screen name="Dispositivos" component={DeviceActivationScreen} options={logoutButtonOptions} />
    </Tab.Navigator>
  )
}

const LoginRoute = () => {
  return (
    <Stack.Navigator tabBarShowLabel={false} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  )
}

const Routes = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {authenticated ? <ProtectedRoutes /> : <LoginRoute />}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>

      <Toast />
    </>
  );
}
