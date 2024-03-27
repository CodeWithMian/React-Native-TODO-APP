import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DarkSideThree,
  LightSideOne,
  LightSideTwo,
  Taski,
} from '../../assets/constants/constants';
import Inter from '../../assets/fonts/Inter-ExtraBold.ttf';

const OnBoarding = () => {
  return (
    <View style={style.backgroundColor}>
      <View style={style.img}>
        <Image source={Taski} />
      </View>
      <View style={style.icons}>
        <Image source={LightSideOne} />
        <Image source={DarkSideThree} style={style.margin} />
        <Image source={LightSideTwo} />
      </View>
      <View style={style.taski}>
        <View style={style.TaskiHeading}>
          <Text style={style.h1}>Start With Taski</Text>
          <Text style={style.p}>
            Join us now and get your daily things right
          </Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  backgroundColor: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  color: {
    color: 'black',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 84,
  },
  icons: {
    width: 285,
    height: 211,
    top: 221,
    left: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    marginTop: -33,
    marginBottom: -33,
  },
  taski: {
    width: 335,
    height: 208,
    top: 230,
    left: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TaskiHeading: {
    width: 282,
    height: 56,
  },
  h1: {
    // fontWeight: 'bold',
    color: '#0B0A11',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Inter-ExtraBold',
    lineHeight: 32,
    top: 10,
  },
  p: {
    color: 'rgba(11, 10, 17, 0.7)',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 18,
    top: 10,
  },
});

export default OnBoarding;
