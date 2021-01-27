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

const OnlineSafetyModule = ({navigation}) => {
  const [lessons, setPeople] = useState([
    {name: "Stop, Don't Click Strange Links", id: '1'},
    {name: 'What should you do?: Game', id: '2'},
    /*{name: 'Understanding Fake News', id: '3'},*/
  ]);

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
                ? navigation.navigate('Online Safety Lesson')
                : navigation.navigate('Game', {level: 'TrueFalseModel'})
            }>
            <Text style={styles.item}>{item.name}</Text>
            <Icon name="arrow-forward-ios" color="#41B7E9" size={10} />
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
});

export default OnlineSafetyModule;
