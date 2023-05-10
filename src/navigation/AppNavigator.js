import React from 'react';

// Screen
import Home from '../screens/frontend/Home';
import Pharmacy from '../screens/frontend/Pharmacy';
import PharmacyDetails from '../screens/frontend/PharmacyDetails';

// Navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function AppNavigator() {
  const screenOptions = {
    headerShown: false,
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pharmacy" component={Pharmacy} />
        <Stack.Screen name="PharmacyDetails" component={PharmacyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
