import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LessonsScreen = ({navigation}) => {
  const [lessons, setPeople] = useState([
    {name: 'Online Safety', id: '1'},
    {name: 'Mental Health', id: '2'},
    {name: 'Sexual and Reproductive Health', id: '3'},
    {name: 'Citizenship and Leadership', id: '4'},
  ]);

  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id}
        data={lessons}
        renderItem={({item}) =>
          item.id == 1 ? (
            <TouchableOpacity
              style={styles.listView}
              onPress={() =>
                item.id == 1
                  ? navigation.navigate('Online Safety Module')
                  : ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT)
              }>
              <Text style={styles.itemAvailable}>{item.name}</Text>
              <Icon name="arrow-forward-ios" color="#41B7E9" size={10} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.listView}
              onPress={() =>
                item.id == 1
                  ? navigation.navigate('Online Safety Module')
                  : ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT)
              }>
              <Text style={styles.itemUnavailable}>{item.name}</Text>
              <View style={styles.comingSoonView}>
                <Text style={styles.comingSoonText}>Coming Soon</Text>
              </View>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  itemAvailable: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Rubik-Regular',
    color: '#fff',
  },
  itemUnavailable: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Rubik-Regular',
    color: '#4c4c4c',
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: '#000',
  },
  comingSoonView: {
    backgroundColor: '#C2C9C91A',
    height: 24,
    width: 70,
    justifyContent: 'center',
  },
  comingSoonText: {
    color: '#93D10F',
    fontSize: 10,
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
});

export default LessonsScreen;
