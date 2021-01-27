import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const Loader = (props) => {
  const {visible, overlayColor, enableBackdrop} = props;
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor={overlayColor}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
