import React, {useContext, useState} from 'react';
import {View, Text, Button, StyleSheet, StatusBar, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileScreen = ({navigation}) => {
  const {colors} = useTheme();

  const {user, logout} = useContext(AuthContext);

  const theme = useTheme();

  const [achievementsRow1, setAchievementsRow1] = useState([
    {
      name: 'Leader',
      image: require('../assets/img/slides.png'),
      key: '1',
    },
    {
      name: 'Gamer',
      image: require('../assets/img/interactiveVideo.png'),
      key: '2',
    },
    {
      name: 'Lover',
      image: require('../assets/img/reflections.png'),
      key: '3',
    },
    {
      name: 'Analyst',
      image: require('../assets/img/questionmark.png'),
      key: '4',
    },
    {
      name: 'Superstar',
      image: require('../assets/img/immersive.png'),
      key: '5',
    },
  ]);
  const [achievementsRow2, setAchievementsRow2] = useState([
    {
      name: 'Leader',
      image: require('../assets/img/slides.png'),
      key: '1',
    },
    {
      name: 'Gamer',
      image: require('../assets/img/interactiveVideo.png'),
      key: '2',
    },
    {
      name: 'Lover',
      image: require('../assets/img/reflections.png'),
      key: '3',
    },
    {
      name: 'Analyst',
      image: require('../assets/img/questionmark.png'),
      key: '4',
    },
    {
      name: 'Superstar',
      image: require('../assets/img/immersive.png'),
      key: '5',
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.userInfoView}>
        <TouchableOpacity style={styles.userImageView}>
          <Image
            source={require('../assets/img/defualtUserImage.png')}
            style={styles.userImage}
          />
        </TouchableOpacity>
        <Text style={styles.textHighlightBold}>
          {auth().currentUser.displayName}
        </Text>
        <Text style={styles.text}>
          Your home feed is empty. Find a lesson you’re interested in to start
          to build your feed.
        </Text>
        <View style={styles.infoViewHorizontal}>
          <Image
            source={require('../assets/img/lessonsCompleteIcon.png')}
            style={styles.lessonsCompleteIcon}
          />
          <Text style={styles.textGreenRegular}>
            You have completed <Text style={styles.textGreenMedium}>6</Text>{' '}
            lessons
          </Text>
        </View>
      </View>
      <View style={styles.achievementsView}>
        <Text style={styles.achievementsHeader}>Achievements</Text>
        <View style={styles.achievementsRowFlex}>
          {achievementsRow1.map((item) => {
            return (
              <View key={item.key} style={styles.achievementFragment}>
                <Image source={item.image} style={styles.achievementIcons} />
                <Text style={styles.textHighlightNormal}>{item.name}</Text>
              </View>
            );
          })}
        </View>
        <View style={styles.achievementsRowFlex}>
          {achievementsRow2.map((item) => {
            return (
              <View key={item.key} style={styles.achievementFragment}>
                <Image source={item.image} style={styles.achievementIcons} />
                <Text style={styles.textHighlightNormal}>{item.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.infoViewHorizontal}>
        <Image
          source={require('../assets/img/sosIcon.png')}
          style={styles.sosIcon}
        />
        <Text style={styles.text}>
          Got a problem?{' '}
          <Text style={styles.textHighlightBold}>Speak to a counsellor</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  userInfoView: {
    marginHorizontal: 45,
    marginTop: 30,
    alignItems: 'center',
  },
  achievementsView: {
    marginHorizontal: 18,
    marginTop: 2,
    marginBottom: 25,
    alignItems: 'center',
    backgroundColor: '#C2C9C91A',
  },
  achievementsRowFlex: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
  },
  achievementFragment: {
    alignItems: 'center',
    margin: 15,
  },
  infoViewHorizontal: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  textHighlightBold: {
    fontSize: 13,
    fontFamily: 'Rubik-Medium',
    color: '#41B7E9',
    marginVertical: 5,
  },
  textHighlightNormal: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#41B7E9',
  },
  lessonsCompleteIcon: {width: 21, height: 21, marginRight: 10},
  text: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  achievementsHeader: {
    fontSize: 15,
    fontFamily: 'Rubik-Medium',
    color: '#BABABA',
    marginTop: 15,
    marginBottom: 5,
  },
  textGreenRegular: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#93D10F',
  },
  textGreenMedium: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#93D10F',
  },
  achievementIcons: {
    height: 16,
    width: 16,
    marginBottom: 5,
  },
  sosIcon: {
    height: 13,
    width: 16,
    marginRight: 10,
  },
  userImageView: {
    borderRadius: 40,
    alignItems: 'center',
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
