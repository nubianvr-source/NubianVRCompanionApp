import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  Image,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';

const PreferencesScreen = ({navigation}) => {
  const [lessons, setPeople] = useState([
    {
      name: 'Sign Out',
      image: require('../assets/img/logoutIcon.png'),
      id: '1',
    },
  ]);
  const {user, logout} = useContext(AuthContext);

  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id}
        data={lessons}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.listView}
            onPress={() =>
              item.id == 1
                ? logout()
                : ToastAndroid.show(
                    'Lesson not available yet',
                    ToastAndroid.SHORT,
                  )
            }>
            {}
            <Image source={item.image} style={styles.icons} />
            <Text style={styles.item}> {item.name}</Text>
            {/*<Icon name="arrow-forward-ios" color="#41B7E9" size={10} />*/}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  item: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Rubik-Regular',
    color: '#fff',
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
  icons: {
    width: 15,
    height: 15,
    marginRight: 15,
  },
});

export default PreferencesScreen;
