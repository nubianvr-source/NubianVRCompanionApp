import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Image,
} from 'react-native';

const ModuleIntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/lessonsCompleteIcon.png')}
        style={styles.tipLogoStyle}
      />
      <View style={styles.view}>
        <Text style={styles.headerTitle}>Final Tip</Text>
      </View>
      <View style={styles.baseView}>
        <Text style={styles.text}>
          Display the final tip for the current lesson here.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.enrollBtn}
        onPress={() => navigation.navigate('Online Safety Lesson')}>
        <Text style={styles.enrollTxt}>Finish Lesson</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    color: '#fff',
    marginVertical: 20,
  },

  text: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  textHedear: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#fff',
    marginBottom: 20,
  },

  view: {
    alignItems: 'center',
    marginHorizontal: 35,
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: '#000',
  },
  baseView: {
    alignItems: 'stretch',
    marginHorizontal: 35,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: '#141414',
  },
  enrollBtn: {
    backgroundColor: '#41B7E9',
    marginHorizontal: 75,
    marginTop: 30,
    marginBottom: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },

  enrollTxt: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#fff',
  },

  tipLogoStyle: {
    resizeMode: 'contain',
    width: 47,
    height: 47,
  },
});

export default ModuleIntroScreen;
