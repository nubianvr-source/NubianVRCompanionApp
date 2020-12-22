import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({navigation: {navigate}}) => {
  const {user, logout} = useContext(AuthContext);
  //const [loadLevel, setLoadLevel] = useState('TheHunter');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/nubianLogo.png')}
        style={styles.nubianLogo}
      />
      <View style={styles.emptyfeedView}>
        <Text style={styles.text}>
          {
            'Welcome to the beta release of the Nubian Life Skills App.\n \nPlease note that the app is still in development and we greatly appreciate any feedback that can be provided to improve it.\n \n Please place all your bugs, issues & reccomendations in the chat room of the same name and we will get to work on it. You can find it by tapping the button below. Thank you and enjoy.'
          }
        </Text>
      </View>
      <TouchableOpacity
        style={styles.goToLessonBtn}
        onPress={() => navigate('Rooms')}>
        <Text style={styles.highlightedText}>
          Go to Rooms
          <Icon name="arrow-forward-ios" color="#41B7E9" size={10} />
        </Text>
      </TouchableOpacity>
      {/*<TouchableOpacity
        style={styles.goToLessonBtn}
        onPress={() => navigate('Game', {level: 'OnlineSafetyStoryGame'})}>
        <Text style={styles.highlightedText}>
          Go Narrative Game Model
          <Icon name="arrow-forward-ios" color="#41B7E9" size={10} />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.goToLessonBtn}
        onPress={() => navigate('LessonEnd')}>
        <Text style={styles.highlightedText}>
          Test
          <Icon name="arrow-forward-ios" color="#41B7E9" size={10} />
        </Text>
      </TouchableOpacity>*/}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
  goToLessonBtn: {
    margin: 10,
  },
  nubianLogo: {
    height: 45,
    width: 30,
    resizeMode: 'stretch',
  },
  highlightedText: {
    fontSize: 12,
    color: '#41B7E9',
    fontFamily: 'Rubik-Medium',
    textAlign: 'center',
  },
  emptyfeedView: {
    marginLeft: 45,
    marginRight: 45,
    marginTop: 25,
    marginBottom: 15,
  },
});
