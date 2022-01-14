import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuScreen from './src/pages/MenuScreen';
import RegistryScreen from './src/pages/RegistryScreen';
import ShowScreen from './src/pages/ShowScreen';
import DeviceActivationScreen from './src/pages/DeviceActivationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuScreen">
        <Stack.Screen         
          name="MenuScreen" 
          component={MenuScreen}
          options={{
            headerTintColor: "#000"
          }}>
        </Stack.Screen>

        <Stack.Screen
          name="RegistryScreen" 
          component={RegistryScreen}
          options={{
            headerTintColor: "#000"
          }}>
        </Stack.Screen>      

        <Stack.Screen 
          name="ShowScreen" 
          component={ShowScreen}
          options={{
            headerTintColor: "#000"
          }}>
        </Stack.Screen>

        <Stack.Screen 
          name="DeviceActivationScreen" 
          component={DeviceActivationScreen}
          options={{
            headerTintColor: "#000"
          }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )  
}
