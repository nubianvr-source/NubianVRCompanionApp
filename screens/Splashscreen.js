import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/NubianSplashImage.png')}
        style={styles.splashStyle}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashStyle: {
    resizeMode: 'contain',
    width: '50%',
    height: '50%',
  },
});
