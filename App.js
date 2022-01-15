import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/pages/LoginScreen';
import RegistryScreen from './src/pages/RegistryScreen';
import ShowScreen from './src/pages/ShowScreen';
import DeviceActivationScreen from './src/pages/DeviceActivationScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home';
            } 
            else if (route.name === 'Registry') {
              iconName = focused ? 'finger-print-outline' : 'finger-print';
            }
            else if (route.name === 'Report') {
              iconName = focused ? 'reader-outline' : 'reader';
            }
            else if (route.name === 'Devices') {
              iconName = focused ? 'flash-outline' : 'flash';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#8CDB94',
          tabBarInactiveTintColor: '#000',
        })}
      >
        <Tab.Screen name="Home" component={LoginScreen} />
        <Tab.Screen name="Registry" component={RegistryScreen} />
        <Tab.Screen name="Report" component={ShowScreen} />
        <Tab.Screen name="Devices" component={DeviceActivationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}