import React, {useEffect} from 'react';
//Import Firebase modules to be used for saving the users notification token
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
//Import StackNavigator
import {createStackNavigator} from '@react-navigation/stack';
//Importing Screens
import HomeScreen from '../screens/MainTabScreen';
import OnlineSafetyModule from '../screens/OnlineSafetyModule';
import ModuleIntoScreen from '../screens/ModuleIntroScreen';
import Slider from '../screens/InteractiveSlides';
import GameView from '../screens/GameScreen';
import PreferencesScreen from '../screens/PreferencesScreen';
import LessonEndTipScreen from '../screens/FinalTipScreen';
import CreateRoomsScreen from '../screens/CreateRoomScreen';
import RoomsChatScreen from '../screens/RoomsChatScreen';
import PollsRoom from '../screens/PollsScreen';
import SplashScreen from '../screens/Splashscreen';
import Loader from '../components/LoaderComponent';

const Stack = createStackNavigator();

async function saveTokenToDatabase(token) {
  // Since we are in the App Stack we know the user is signed in at this point.
  const userId = auth().currentUser.uid;

  console.log('savetoken', token);
  // Add the token to the users datastore
  await firestore()
    .collection('USERS')
    .doc('userTokens')
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
}
const AppStack = ({navigation}) => {
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then((token) => {
        return saveTokenToDatabase(token);
      });

    // Listen to whether the token changes
    return messaging().onTokenRefresh((token) => {
      saveTokenToDatabase(token);
    });
  }, []);
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
      <Stack.Screen name="Create Room" component={CreateRoomsScreen} />
      <Stack.Screen name="Polls" component={PollsRoom} />
      <Stack.Screen
        name="Room"
        component={RoomsChatScreen}
        options={({route}) => ({
          title: route.params.thread.name,
        })}
      />
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
