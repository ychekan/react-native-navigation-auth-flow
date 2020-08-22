import React, { Component } from 'react';
import {
  View, ActivityIndicator, StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { withTheme } from 'react-native-paper';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync()
      .then(() => {});
  }

  bootstrapAsync = async () => {
    const { navigation } = this.props;

    const user = await AsyncStorage.getItem('user');

    // await AsyncStorage.getItem('user').then((user) => {
    //
    // });

    navigation.navigate(user ? 'App' : 'Auth');
  }

  render() {
    const { theme } = this.props;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.defaultCard} />
      </View>
    );
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      defaultCard: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(withNavigation(AuthLoading));
