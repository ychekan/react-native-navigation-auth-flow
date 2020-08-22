import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, withTheme } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

const HeaderLeft = ({ theme, navigation }) => (
  <IconButton
    onPress={() => navigation.navigate('Settings')}
    icon="menu"
    color={theme.colors.textColor}
    size={theme.sizes.defaultIconSizes}
  />
);

HeaderLeft.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      textColor: PropTypes.string.isRequired,
    }).isRequired,
    sizes: PropTypes.shape({
      defaultIconSizes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withNavigation(withTheme(HeaderLeft));
