import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView,
  ToastAndroid,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

import Loading from '../components/LoaderComponent';

const {height, width} = Dimensions.get('screen');

const RoomsScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('THREADS')
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            name: '',
            // add this
            latestMessage: {
              text: '',
            },
            // ---
            ...documentSnapshot.data(),
          };
        });

        setThreads(threads);

        if (loading) {
          setLoading(false);
        }
      });

    return () => unsubscribe();
  }, []);

  const LoadingOverlay = () => {
    return (
      <View style={styles.Loadingwrapper}>
        <Loading visible={loading} overlayColor="rgba(0,0,0,0.75)" />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      {loading == true ? (
        //<Loading visible={loading} overlayColor="rgba(0,0,0,0)" />
        <LoadingOverlay />
      ) : (
        <FlatList
          data={threads}
          keyExtractor={(item) => item._id}
          //ItemSeparatorComponent={() => <Divider />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Room', {thread: item})}>
              <View style={styles.roomListItemContainer}>
                <View style={{backgroundColor: '#93D10F', width: 2}} />
                <View style={styles.roomListItemView}>
                  <Text style={styles.roomModule}>Topic</Text>
                  <Text style={styles.roomTopicText}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
      {/*<ScrollView>
        <TouchableOpacity
          onPress={() =>
            ToastAndroid.show('Rooms are not ready yet!', ToastAndroid.SHORT)
          }>
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
      </ScrollView>*/}
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
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
  Loadingwrapper: {
    height: 150,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
