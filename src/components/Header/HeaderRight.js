import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';

const HeaderRight = ({ theme, navigation }) => {
  const styles = StyleSheet.create({
    icon: {
      marginRight: theme.sizes.marginRightIcon
    }
  });

  const signOutAsync = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  };

  return (
    <Icon
      onPress={signOutAsync}
      name="logout"
      style={styles.icon}
      color={theme.colors.textColor}
      size={theme.sizes.defaultIconSizes}
    />
  );
};

HeaderRight.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      textColor: PropTypes.string.isRequired,
    }).isRequired,
    sizes: PropTypes.shape({
      marginRightIcon: PropTypes.number.isRequired,
      defaultIconSizes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withNavigation(withTheme(HeaderRight));
