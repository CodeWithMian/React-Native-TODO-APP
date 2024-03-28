import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  DarkSideThree,
  LightSideOne,
  LightSideTwo,
  Taski,
} from '../../assets/constants/constants';

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
      <View style={style.buttons}>
        <TouchableOpacity style={style.button} activeOpacity={0.7}>
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonRegister} activeOpacity={0.7}>
          <Text style={style.registerText}>Register</Text>
        </TouchableOpacity>
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
    top: 220,
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
    fontFamily: 'Inter-Bold',
    lineHeight: 32,
    top: 10,
  },
  p: {
    color: 'rgba(11, 10, 17, 0.7)',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 28,
    top: 10,
    fontFamily: 'Inter-Light',
  },
  buttons: {
    width: 335,
    height: 312,
    justifyContent: 'center',
    left: 25,
    top: 80,
    gap: 15,
  },
  button: {
    width: 335,
    height: 48,
    backgroundColor: 'rgba(126, 187, 79, 1)',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
  },
  buttonRegister: {
    width: 335,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(126, 187, 79, 1)',
  },
  registerText: {
    color: 'rgba(126, 187, 79, 1)',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
  },
});

export default OnBoarding;
