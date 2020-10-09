import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import LessonsScreen from './LessonsScreen';
import RoomsScreen from './RoomsScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const LessonsStack = createStackNavigator();
const RoomsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    tabBarOptions={{
      activeTintColor: '#41B7E9',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#000000',
        borderTopWidth: 0,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/img/homeIconFocused.png')
                : require('../assets/img/homeIconUnfocused.png')
            }
            style={styles.nubianLogo}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Lessons"
      component={LessonStackScreen}
      options={{
        tabBarLabel: 'Lessons',
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/img/lessonsIconFocused.png')
                : require('../assets/img/lessonsIconUnfocused.png')
            }
            style={styles.nubianLogo}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Rooms"
      component={RoomsStackScreen}
      options={{
        tabBarLabel: 'Rooms',
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/img/roomsIconFocused.png')
                : require('../assets/img/roomsIconUnfocused.png')
            }
            style={styles.nubianLogo}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused}) => (
          <Image
            source={
              focused
                ? require('../assets/img/profileIconFocused.png')
                : require('../assets/img/profileIconUnfocused.png')
            }
            style={styles.nubianLogo}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
      }}
    />
  </HomeStack.Navigator>
);

const LessonStackScreen = ({navigation}) => (
  <LessonsStack.Navigator>
    <LessonsStack.Screen name="Lessons" component={LessonsScreen} />
  </LessonsStack.Navigator>
);
const RoomsStackScreen = ({navigation}) => (
  <RoomsStack.Navigator>
    <RoomsStack.Screen name="Rooms" component={RoomsScreen} />
  </RoomsStack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);
const styles = StyleSheet.create({
  nubianLogo: {
    height: 16,
    width: 16,
    resizeMode: 'stretch',
  },
});
