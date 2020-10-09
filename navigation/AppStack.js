import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/MainTabScreen';
import OnlineSafetyModule from '../screens/OnlineSafetyModule';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTintColor: '#41B7E9',
        headerTitleStyle: {
          fontSize: 16,
          fontFamily: 'Rubik-Medium',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Online Safety Module"
        component={OnlineSafetyModule}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
