import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

import HomeScreen from './HomeScreen';
import LessonsScreen from './LessonsScreen';
import RoomsScreen from './RoomsScreen';
import ProfileScreen from './ProfileScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import OnlineSafetyModule from './OnlineSafetyModule';

const HomeStack = createStackNavigator();
const LessonsStack = createStackNavigator();
const RoomsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ModuleOnlineSafety = createStackNavigator();

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
        borderBottomWidth: 8,
      },
      labelStyle: {
        fontFamily: 'Rubik-Medium',
        fontSize: 13,
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
      component={ModuleOnlineSafetyScreen}
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

const ModuleOnlineSafetyScreen = ({navigation}) => (
  <ModuleOnlineSafety.Navigator
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
    <ModuleOnlineSafety.Screen
      name="Life Skills Curriculum"
      component={OnlineSafetyModule}
      options={{
        headerRight: () => (
          <Image
            source={require('../assets/img/lifeskillstabicon.png')}
            style={styles.lessonsTabImage}
          />
        ),
      }}
    />
  </ModuleOnlineSafety.Navigator>
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
    <RoomsStack.Screen
      name="Rooms"
      component={RoomsScreen}
      /* options={{
       headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create Room')}>
            <Icon
              name="new-message"
              color="#41b7e9"
              size={15}
              style={styles.profileTabImage}
            />
          </TouchableOpacity>
        ),
      }}*/
    />
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
          <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
            <Image
              source={require('../assets/img/settingsBtnIcon.png')}
              style={styles.profileTabImage}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </ProfileStack.Navigator>
);
const styles = StyleSheet.create({
  nubianLogo: {
    height: 20,
    width: 20,
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
  },
});
