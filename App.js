import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/pages/LoginScreen';
import MenuScreen from './src/pages/MenuScreen';
import RegistryScreen from './src/pages/RegistryScreen';
import ShowScreen from './src/pages/ShowScreen';
import DeviceActivationScreen from './src/pages/DeviceActivationScreen';

import { AuthContextProvider } from './src/context/AuthContext';

const Stack = createNativeStackNavigator();

const screenOptions = { headerTintColor: "#000" }

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
              ...screenOptions
            }}>
          </Stack.Screen>

          <Stack.Screen
            name="MenuScreen"
            component={MenuScreen}
            options={screenOptions}>
          </Stack.Screen>

          <Stack.Screen
            name="RegistryScreen"
            component={RegistryScreen}
            options={screenOptions}>
          </Stack.Screen>

          <Stack.Screen
            name="ShowScreen"
            component={ShowScreen}
            options={screenOptions}>
          </Stack.Screen>

          <Stack.Screen
            name="DeviceActivationScreen"
            component={DeviceActivationScreen}
            options={screenOptions}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  )  
}
