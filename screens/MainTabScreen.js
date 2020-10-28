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
  <HomeStack.Navigator
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
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
);

const LessonStackScreen = ({navigation}) => (
  <LessonsStack.Navigator
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
    <LessonsStack.Screen
      name="Life Skills Curriculum"
      component={LessonsScreen}
      options={{
        headerRight: () => (
          <Image
            source={require('../assets/img/lifeskillstabicon.png')}
            style={styles.lessonsTabImage}
          />
        ),
      }}
    />
  </LessonsStack.Navigator>
);
const RoomsStackScreen = ({navigation}) => (
  <RoomsStack.Navigator
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
    <RoomsStack.Screen name="Rooms" component={RoomsScreen} />
  </RoomsStack.Navigator>
);
const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
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
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerRight: () => (
          <Image
            source={require('../assets/img/settingsBtnIcon.png')}
            style={styles.profileTabImage}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);
const styles = StyleSheet.create({
  nubianLogo: {
    height: 16,
    width: 16,
    resizeMode: 'stretch',
  },
  lessonsTabImage: {
    height: 30,
    width: 33,
    marginRight: 10,
    resizeMode: 'stretch',
  },
  profileTabImage: {
    height: 20,
    width: 20,
    marginRight: 10,
    resizeMode: 'stretch',
  },
});
