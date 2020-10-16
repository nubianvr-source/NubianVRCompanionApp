import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';

const RoomsScreen = ({navigation}) => {
  const {colors} = useTheme();
  const {user, logout} = useContext(AuthContext);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Rooms Screen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
