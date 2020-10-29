import React, {useContext} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('screen');

const RoomsScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <TouchableOpacity /*onPress={() => navigation.navigate()}*/>
          <View style={styles.roomListItemContainer}>
            <View style={{backgroundColor: '#93D10F', width: 2}} />
            <View style={styles.roomListItemView}>
              <Text style={styles.roomModule}>Online Safety</Text>
              <Text style={styles.roomTopicText}>
                What do “likes” on social networks mean to you?
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
});
