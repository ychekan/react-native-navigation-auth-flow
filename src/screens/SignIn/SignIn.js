import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import SignInView from './SignInView';

class SignIn extends Component {

  signInAsync = () => {
    const { navigation } = this.props;

    AsyncStorage.setItem('userToken', 'auth_user_in_app').then(() => {
      navigation.navigate('App');
    });
  };

  onRegistration = () => {
    const { navigation } = this.props;

    navigation.navigate('Register');
  };

  render() {
    const { navigation } = this.props;

    return (
      <SignInView
        signInAsync={this.signInAsync}
        onRegistration={() => navigation.navigate('Register')}
        onHome={() => navigation.navigate('Home')}
      />
    );
  }
}

export default SignIn;
