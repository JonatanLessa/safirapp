import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';

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
          headerTintColor: "#f92e62"
        }}></Stack.Screen>    
        <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options={{
          headerTintColor: "#f92e62"
        }}></Stack.Screen>      
      </Stack.Navigator>
    </NavigationContainer>
  )  
}