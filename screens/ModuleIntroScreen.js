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
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModuleIntroScreen = ({navigation}) => {
  const [sections, setPeople] = useState([
    {
      name: 'Lesson Slides',
      image: require('../assets/img/slides.png'),
      key: '1',
    },
    {
      name: 'Interactive Videos',
      image: require('../assets/img/interactiveVideo.png'),
      key: '2',
    },
    {
      name: 'Reflections',
      image: require('../assets/img/reflections.png'),
      key: '3',
    },
    {
      name: 'Questions & Answers',
      image: require('../assets/img/questionmark.png'),
      key: '4',
    },
    {
      name: 'Virtual Reality Experiences',
      image: require('../assets/img/immersive.png'),
      key: '5',
    },
    {
      name: 'Minigames',
      image: require('../assets/img/minigames.png'),
      key: '6',
    },
  ]);

  return (
    <ScrollView style={styles.scrollView}>
      <Image
        source={require('../assets/img/moduleBanner.png')}
        style={styles.moduleBanner}
      />
      <View style={styles.view}>
        <Text style={styles.headerTitle}>This is the Lesson Title</Text>
        <Text style={styles.subtitle}>Module Subtitle</Text>
      </View>
      <View style={styles.baseView}>
        <Text style={styles.text}>
          This will contain the lesson overview. A simple summary of what to
          expect throughout the course. Also, to excite learners to want to
          learn this topic. Lifelong learning for the win.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.enrollBtn}
        onPress={() => navigation.navigate('Lesson Slides')}>
        <Text style={styles.enrollTxt}>Enroll</Text>
      </TouchableOpacity>
      {sections.map((item) => {
        return (
          <View key={item.key} style={styles.sectionsView}>
            <Image source={item.image} style={styles.sectionsLogo} />
            <Text style={styles.sectionsText}>{item.name}</Text>
          </View>
        );
      })}
      <View style={styles.listView}>
        <Text style={styles.textHedear}>Objectives</Text>
        <Text style={styles.text}>1. Introduction to Online Safety</Text>
        <Text style={styles.text}>2. Reasons for Online Safety</Text>
        <Text style={styles.text}>3. Risks of Online Safety</Text>
        <Text style={styles.text}>4. How To: Audit Your Online Presence</Text>
        <Text style={styles.text}>5. How To: Secure Your Online Presence</Text>
        <Text style={styles.text}>6. Reflection: What’s next from here</Text>
      </View>
      <TouchableOpacity style={styles.enrollBtnInvert}>
        <Text style={styles.enrollTxtInvert}>Enroll</Text>
      </TouchableOpacity>
    </ScrollView>
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
  },
  subtitle: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#41B7E9',
    marginTop: 5,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#fff',
    marginBottom: 10,
  },
  textHedear: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#fff',
    marginBottom: 20,
  },
  listView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 35,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: '#000',
  },
  view: {
    alignItems: 'stretch',
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
    backgroundColor: '#000',
  },
  enrollBtn: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#41B7E9',
    marginHorizontal: 35,
    marginTop: 10,
    marginBottom: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enrollBtnInvert: {
    backgroundColor: '#41B7E9',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#41B7E9',
    marginHorizontal: 35,
    marginTop: 10,
    marginBottom: 30,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionsView: {
    marginHorizontal: 35,
    backgroundColor: '#C2C9C91A',
    height: 30,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sectionsText: {
    fontSize: 12,
    fontFamily: 'Rubik-Regular',
    color: '#fff',
    marginLeft: 10,
  },
  sectionsLogo: {
    height: 15,
    width: 15,
  },
  enrollTxt: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#41B7E9',
  },
  enrollTxtInvert: {
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#fff',
  },
  scrollView: {
    backgroundColor: '#000',
  },
  moduleBanner: {
    resizeMode: 'stretch',
    height: 230,
  },
});

export default ModuleIntroScreen;
