import React from 'react';
import {View, Text} from 'react-native';
import Carousel from '../component/Carousel';
import {dummyData} from '../data/Data';

const Slider = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#000'}}>
      <Carousel data={dummyData} />
    </View>
  );
};

export default Slider;
