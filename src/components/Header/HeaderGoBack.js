import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, withTheme } from 'react-native-paper';
import { withNavigation } from 'react-navigation';

const HeaderGoBack = ({ theme, navigation }) => (
  <IconButton
    onPress={() => navigation.goBack()}
    icon="arrow-left"
    color={theme.colors.textColor}
    size={theme.sizes.defaultIconSizes}
  />
);

HeaderGoBack.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired
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

export default withNavigation(withTheme(HeaderGoBack));
