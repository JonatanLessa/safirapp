import React, { useContext }  from 'react';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/pages/LoginScreen';
import RegistryScreen from './src/pages/RegistryScreen';
import ShowScreen from './src/pages/ShowScreen';
import DeviceActivationScreen from './src/pages/DeviceActivationScreen';
import AuthContext, { AuthContextProvider } from './src/context/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const renderProtectedContent = () => {
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
      <Tab.Screen name="Registro" component={RegistryScreen} />
      <Tab.Screen name="Relatório" component={ShowScreen} />
      <Tab.Screen name="Dispositivos" component={DeviceActivationScreen} />
    </Tab.Navigator>
  )
}

const renderLoginScreen = () => {
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
      {authenticated ? renderProtectedContent() : renderLoginScreen()}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}
