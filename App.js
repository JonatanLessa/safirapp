import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import RegistryScreen from './src/pages/RegistryScreen';
import ShowScreen from './src/pages/ShowScreen';
import DeviceActivationScreen from './src/pages/DeviceActivationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
//
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen         
        name="LoginScreen" 
        component={LoginScreen}
        options={{
          headerTintColor: "#000"
        }}></Stack.Screen>    
        <Stack.Screen 
        name="RegistryScreen" 
        component={RegistryScreen}
        options={{
          headerTintColor: "#000"
        }}></Stack.Screen>      
        <Stack.Screen 
        name="ShowScreen" 
        component={ShowScreen}
        options={{
          headerTintColor: "#000"
        }}></Stack.Screen>
        <Stack.Screen 
        name="DeviceActivationScreen" 
        component={DeviceActivationScreen}
        options={{
          headerTintColor: "#000"
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )  
}