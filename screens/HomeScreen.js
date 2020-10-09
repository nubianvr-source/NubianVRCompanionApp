import React, {useContext} from 'react';
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

const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/nubianLogo.png')}
        style={styles.nubianLogo}
      />
      <View style={styles.emptyfeedView}>
        <Text style={styles.text}>
          Your home feed is empty. Find a lesson you’re interested in to start
          to build your feed.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Lessons')}>
        <Text style={styles.highlightedText}>
          Go to Lesson
          <Icon name="arrow-forward-ios" color="#41B7E9" size={10} />
        </Text>
      </TouchableOpacity>
      {/*<Button title="Logout" onPress={() => logout()} />*/}
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
