import React, {useState, useEffect} from 'react';

// Screen
import Home from '../screens/frontend/Home';
import Pharmacy from '../screens/frontend/Pharmacy';
import PharmacyDetails from '../screens/frontend/PharmacyDetails';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';

// Navigation imports
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons
import Ant from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import auth from '@react-native-firebase/auth';

export default function AppNavigator() {
  const [user, setUser] = useState(false);
  const screenOptions = {
    headerShown: false,
  };

  function onAuthStateChanged(res) {
    setUser(res);
    console.log(res);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

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
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              tabBarIcon: ({color}) => (
                <Ant name="home" size={25} color={color} />
              ),
              tabBarLabel: 'Home',
              tabBarLabelStyle: {fontSize: 12, paddingBottom: 2},
            }}
          />
          <Tab.Screen
            name="Pharmacy"
            component={Pharmacy}
            options={{
              tabBarIcon: ({color}) => (
                <Fontisto name="first-aid-alt" size={23} color={color} />
              ),
              tabBarLabel: 'Medicines',
              tabBarLabelStyle: {fontSize: 12, paddingBottom: 2},
            }}
          />
          <Tab.Screen
            name="PharmacyDetails"
            component={PharmacyDetails}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunity name="robot" size={23} color={color} />
              ),
              tabBarLabel: 'Suggest',
              tabBarLabelStyle: {fontSize: 12, paddingBottom: 2},
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
