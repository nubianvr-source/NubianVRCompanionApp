import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const Loader = (props) => {
  const {visible} = props;
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(0,0,0,0.75)"
      source={require('../lottie/lottieloading.json')}
      animationStyle={styles.lottie}
      speed={1}
    />
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
  loaderWrapper: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Loader;
