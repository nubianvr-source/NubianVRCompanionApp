import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextBox from '../components/TextBox';
import firestore from '@react-native-firebase/firestore';
import Loader from '../components/LoaderComponent';

const {height, width} = Dimensions.get('screen');

const CreateRoomsScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  const [roomName, setRoomName] = useState('');
  const [roomNameEmptyError, setRoomNameEmptyError] = useState(null);
  const [roomNameEmptyWarningIcon, setRoomNameEmptyWarningIcon] = useState(
    null,
  );
  const [loading, isLoading] = useState(false);

  const checkTextBoxInput = () => {
    if (!roomName.trim()) {
      setRoomNameEmptyError('Please enter a Room name ');
      setRoomNameEmptyWarningIcon('warning');
      return;
    }
    //Other checks can be be performed here to prevent obsene room names

    //FireStore Query comes here
    console.log(roomName);
    createNewRoom();
  };

  const createNewRoom = () => {
    isLoading(true);
    firestore()
      .collection('THREADS')
      .add({
        name: roomName,
        latestMessage: {
          text: `You have joined the room ${roomName}.`,
          createdAt: new Date().getTime(),
        },
      })
      .then((docRef) => {
        docRef.collection('MESSAGES').add({
          text: `You have joined the room ${roomName}.`,
          createdAt: new Date().getTime(),
          system: true,
        });
      })
      .then(() => {
        isLoading(false);
        navigation.navigate('Rooms');
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Loader visible={loading} />
      <TextBox
        placeholder="Room Name"
        textInputHeaderDisplayText="Create a new Room"
        keyboardType="default"
        autoCapitalize="words"
        onChangeText={(room) => {
          setRoomName(room);
          setRoomNameEmptyError(null);
          setRoomNameEmptyWarningIcon(null);
        }}
        errorDisplayText={roomNameEmptyError}
        iconType={roomNameEmptyWarningIcon}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => checkTextBoxInput()}>
        <Text style={styles.loginBtnText}>Create Room</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateRoomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  roomListItemContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  roomListItemView: {
    backgroundColor: '#C2C9C91A',
    width: width - 20,
  },
  roomModule: {
    color: '#BABABA',
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
  },
  roomTopicText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  textboxContainer: {
    maxHeight: 150,
  },
  loginBtn: {
    marginRight: 35,
    marginLeft: 35,
    marginTop: 45,
    height: 44,
    backgroundColor: '#41B7E9',
    borderRadius: 2,
  },
  loginBtnText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Rubik-Medium',
    textAlign: 'center',
    marginTop: 14,
  },
});
