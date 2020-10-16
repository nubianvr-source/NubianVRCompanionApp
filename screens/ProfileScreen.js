import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import {log} from 'react-native-reanimated';

const ProfileScreen = ({navigation}) => {
  const {colors} = useTheme();

  const {user, logout} = useContext(AuthContext);

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>
        Welcome {auth().currentUser.displayName}
      </Text>
      <Button title="Sign Out" onPress={() => logout()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
