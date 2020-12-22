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

const FinalTipScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={require('../assets/img/TipScreenImage.png')}
          style={styles.tipLogoStyle}
        />
      </View>

      <View style={styles.view}>
        <Text style={styles.headerTitle}>Lesson Complete</Text>
      </View>
      <View style={styles.baseView}>
        <TouchableOpacity
          style={styles.enrollBtn}
          onPress={() => navigation.navigate('Online Safety Module')}>
          <Text style={styles.enrollTxt}>Next Lesson</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.enrollBtn}
          onPress={() => navigation.navigate('Online Safety Lesson')}>
          <Text style={styles.enrollTxt}>Finish Lesson</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageView: {
    alignItems: 'center',
  },
  headerTitle: {
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
  },
  enrollBtn: {
    backgroundColor: '#41B7E9',
    marginHorizontal: 75,
    marginTop: 20,
    marginBottom: 20,
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
    width: 300,
    height: 300,
    marginTop: 40,
  },
});

export default FinalTipScreen;
