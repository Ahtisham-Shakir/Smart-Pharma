import React, {useState} from 'react';

// Screen
import Home from '../screens/frontend/Home';
import Pharmacy from '../screens/frontend/Pharmacy';
import PharmacyDetails from '../screens/frontend/PharmacyDetails';

// Navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ant from 'react-native-vector-icons/AntDesign';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';

export default function AppNavigator() {
  const [user, setUser] = useState(false);
  const screenOptions = {
    headerShown: false,
  };

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: color => <Ant name={route.name} />,
          })}>
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="Pharmacy" component={Pharmacy} />
          <Tab.Screen name="PharmacyDetails" component={PharmacyDetails} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
