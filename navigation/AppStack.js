import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/MainTabScreen';
import OnlineSafetyModule from '../screens/OnlineSafetyModule';
import ModuleIntoScreen from '../screens/ModuleIntroScreen';
import Slider from '../screens/InteractiveSlides';

const Stack = createStackNavigator();

const AppStack = ({navigation}) => {
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
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Online Safety Module"
        component={OnlineSafetyModule}
      />
      <Stack.Screen name="Online Safety Lesson" component={ModuleIntoScreen} />
      <Stack.Screen name="Lesson Slides" component={Slider} />
    </Stack.Navigator>
  );
};

export default AppStack;
