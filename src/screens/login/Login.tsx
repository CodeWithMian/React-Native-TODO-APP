import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {LeftIcon} from '../../assets/constants/constants';

const Login = () => {
  return (
    <View style={style.main}>
      <View>
        <Image source={LeftIcon} style={style.img} />
        <Text style={style.h1}>Login</Text>
      </View>
      <View style={style.mainBody}>
        <Text style={style.h2}>Join us today.</Text>
        <Text style={style.p}>It's nice to see you, let's start</Text>
        <View style={style.form}>
          <Text style={style.h3}>Full Name</Text>
          <TextInput
            style={style.input}
            placeholder="Input your name here..."
            placeholderTextColor="rgba(11, 10, 17, 0.7)"
          />
          <Text style={style.h3}>Email Address</Text>
          <TextInput
            style={style.input}
            placeholder="yourname@gmail.com"
            placeholderTextColor="rgba(11, 10, 17, 0.7)"
          />
          <Text style={style.h3}>Phone</Text>
          <TextInput
            style={style.input}
            placeholder="Input your phone here..."
            placeholderTextColor="rgba(11, 10, 17, 0.7)"
          />
          <Text style={style.h3}>Password</Text>
          <TextInput
            style={style.input}
            placeholder="Input password here..."
            placeholderTextColor="rgba(11, 10, 17, 0.7)"
          />
        </View>
        <View style={style.buttons}>
          <TouchableOpacity style={style.button} activeOpacity={0.7}>
            <Text style={style.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={style.text}>Don't have an Account? Register</Text>
        </View>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  h1: {
    color: 'rgba(11, 10, 17, 1)',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter-Bold',
    lineHeight: 32,
    top: 15,
  },
  h2: {
    color: 'rgba(11, 10, 17, 1)',
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    lineHeight: 32,
    top: 70,
    left: 20,
  },
  img: {
    top: 42,
    left: 25,
    width: 15,
    height: 15,
  },
  mainBody: {
    height: 644,
  },
  p: {
    color: 'rgba(11, 10, 17, 0.7)',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
    top: 70,
    left: 20,
  },
  h3: {
    color: 'rgba(11, 10, 17, 0.7)',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  input: {
    height: 38,
    width: 335,
    borderColor: 'rgba(203, 203, 203, 1)',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    color: '#000',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginBottom: 14,
  },
  form: {
    top: 100,
    left: 20,
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
  text: {
    color: 'rgba(11, 10, 17, 0.7)',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
    left: 50,
    top: 0,
  },
});

export default Login;
