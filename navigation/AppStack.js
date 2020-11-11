import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/MainTabScreen';
import OnlineSafetyModule from '../screens/OnlineSafetyModule';
import ModuleIntoScreen from '../screens/ModuleIntroScreen';
import Slider from '../screens/InteractiveSlides';
import GameView from '../screens/GameScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import LessonEndTipScreen from '../screens/FinalTipScreen';

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
      <Stack.Screen
        options={{headerShown: false}}
        name="Lesson Slides"
        component={Slider}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Game"
        component={GameView}
      />
      <Stack.Screen name="Preferences" component={PreferencesScreen} />
      <Stack.Screen
        options={{headerShown: false}}
        name="LessonEnd"
        component={LessonEndTipScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
