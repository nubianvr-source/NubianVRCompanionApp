import React, {useContext, useState, useEffect, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import database from '@react-native-firebase/database';
import {
  TourGuideProvider, // Main provider
  TourGuideZone, // Main wrapper of highlight component
  TourGuideZoneByPosition, // Component to use mask on overlay (ie, position absolute)
  useTourGuideController, // hook to start, etc.
} from 'rn-tourguide';
import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('screen');

const HomeScreen = ({navigation: {navigate}}) => {
  const {user, logout} = useContext(AuthContext);

  //const [loadLevel, setLoadLevel] = useState('TheHunter');

  return (
    <TourGuideProvider {...{borderRadius: 16}}>
      <HomeContent />
    </TourGuideProvider>
  );
};

const HomeContent = () => {
  const {canStart, start, stop, eventEmitter} = useTourGuideController();
  const [isfisrtTime, setIsfirstTime] = useState(null);
  const navigation = useNavigation();

  const getFirstTimeRunningAppData = async () => {
    try {
      const value = await AsyncStorage.getItem('@firstTime');
      if (value !== null) {
        // value previously stored
        console.log('Value accessed:', value);
        if (value == 'yes') {
          setIsfirstTime(value);
        } else {
          return;
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setRunningAppFirstTimeData = async (value) => {
    try {
      await AsyncStorage.setItem('@firstTime', value);
      console.log('Value Stored: ', value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  React.useEffect(() => {
    getFirstTimeRunningAppData();
    //check if this is the first time running the app
    if (canStart) {
      if (isfisrtTime == 'yes') {
        start(3);
        console.log('Started');
      } else {
        return;
      }
    }
  }, [canStart, isfisrtTime]);

  React.useEffect(() => {
    eventEmitter.on('start', () => console.log('start'));
    eventEmitter.on('stop', () => {
      console.log('start');
      setRunningAppFirstTimeData('no');
    });
    eventEmitter.on('stepChange', () => console.log('stepChange'));
    return () => eventEmitter.off('*', null);
  }, []);

  const [content, setContent] = useState([
    {name: 'Birth Control Methods: How Well Do They Work?', id: '1'},
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const TestPush = () => {
    let userProfile = [];
    let pushToken = [];
    database()
      .ref('users/')
      .once('value', (snapshot) => {
        let userProfileData = snapshot.val();
        let userProfileItems = Object.keys(userProfileData).map((key) => {
          console.log(userProfileData);
          return userProfileData[key];
        });
        userProfileItems.map((user) => {
          userProfile.push(user.id);
        });
      });
    //let promises = [];
    for (let i = 0; i < userProfile.length; i++) {
      let userId = userProfile[i];
      database()
        .ref(`users/${userId}/userToken/userToken/token`)
        .once('value', (tokenSnapshot) => {
          let userData = tokenSnapshot.val();
          let userItem = Object.keys(userData).map((key) => {
            console.log(tokenSnapshot);
            return userData[key];
          });
          userItem.map((item) => pushToken.push(item));
          return true;
        });
      //promise.push(promise);
    }
  };
  return (
    /*<View style={styles.container}>
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
      <TourGuideZone zone={3} shape={'rectangle_and_keep'}>
        <TouchableOpacity
          style={styles.goToLessonBtn}
          onPress={() => navigation.navigate('Rooms')}>
          <Text style={styles.highlightedText}>
            Go to Rooms
            <Icon name="arrow-forward-ios" color="#41B7E9" size={10} />
          </Text>
        </TouchableOpacity>
      </TourGuideZone>

      <TouchableOpacity style={styles.goToLessonBtn} onPress={() => TestPush()}>
        <Text style={styles.highlightedText}>
          Go to Splash
          <Icon name="arrow-forward-ios" color="#41B7E9" size={10} />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
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
  </TouchableOpacity>
    </View>*/
    <View style={styles.container}>
      <Modal
        animationIn="slideInUp"
        hasBackdrop={true}
        backdropOpacity={1.0}
        isVisible={modalVisible}
        onRequestClose={() => {}}>
        <ScrollView style={styles.scrollView} stickyHeaderIndices={[0]}>
          <View style={styles.modalHeader}>
            <View style={{alignItems: 'flex-end', marginRight: 5}}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.roomModule}>Close</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.modalViewTextHeader}>Condoms</Text>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require('../assets/img/openCondom.png')}
                style={styles.moduleBanner}
              />
              <Text style={styles.modalScrollText}>
                {
                  'Male condoms are one of the most popular methods of birth control. They’re common, convenient, and inexpensive. Their average price is $1 each, and they’re readily available at most convenience stores, supermarkets, and pharmacies.\n \nSome health clinics frequently distribute them for free. Some bars and other venues also do this. You can even find them in some vending machines.\n \nBoth male and female condoms prevent pregnancy by physically containing semen. During intercourse, they block sperm from entering the vagina. You can also use them during oral or anal sex. They’re the only forms of birth control that can also help protect you from sexually transmitted infections (STIs), such as HIV.\n \nMale birth control options include condoms and vasectomy. Condoms are a reversible, temporary form of contraception. Vasectomy can sometimes be reversed, but it’s considered permanent.'
                }
              </Text>
              <View style={styles.doubleImageHolder}>
                <Image
                  source={require('../assets/img/wearCondomMale.png')}
                  style={styles.module}
                />
                <Image
                  source={require('../assets/img/wearCondomFemale.png')}
                  style={styles.module}
                />
              </View>
              <Text style={styles.modalTextHeader}>
                What types of condoms are available?
              </Text>
              <Text style={styles.modalScrollText}>
                {
                  'The two main types of condoms are male and female condoms. A male condom is a sheath that covers the penis. A female condom is a sheath that’s inserted into the vagina. Male condoms are more popular and widely available.'
                }
              </Text>
            </View>
          </View>
        </ScrollView>
      </Modal>
      <FlatList
        data={content}
        keyExtractor={(item) => item.id}
        //ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => (
          //call modal here in touchable opacity
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.roomListItemContainer}>
              <View style={styles.roomListItemView}>
                <Text style={styles.roomModule}>
                  Sexual and Reproductive Health
                </Text>
                <View style={styles.homeListImageView}>
                  <Image
                    source={require('../assets/img/birthControlImage.png')}
                    style={styles.moduleBanner}
                  />
                </View>

                <Text style={styles.homeTopicText}>{item.name}</Text>
                <Text style={styles.homeSubText}>
                  Some birth control methods work better than others. The chart
                  on the following page compares how well different birth
                  control methods work.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  roomListItemContainer: {
    flexDirection: 'row',

    marginVertical: 10,
  },
  roomListItemView: {
    backgroundColor: '#C2C9C91A',
  },
  homeListImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roomModule: {
    color: '#BABABA',
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
  },
  homeTopicText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 10,
    marginBottom: 5,
  },
  homeSubText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 5,
    marginBottom: 20,
  },
  moduleBanner: {
    resizeMode: 'contain',
    width: width - 20,
    height: height - 500,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 2,
  },
  scrollView: {
    backgroundColor: '#000',
    flex: 1,
    width: '100%',
  },
  modalScrollText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Rubik-Regular',
    textAlign: 'left',
    lineHeight: 20,
  },
  modalHeader: {
    backgroundColor: '#000',
  },
  modalViewTextHeader: {
    fontSize: 18,
    fontFamily: 'Rubik-Regular',
    color: '#41B7E9',
    textAlign: 'center',
    marginBottom: 20,
  },
  doubleImageHolder: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  module: {
    resizeMode: 'contain',
    width: '50%',
    height: 120,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  modalTextHeader: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Rubik-Regular',
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 10,
  },
});
