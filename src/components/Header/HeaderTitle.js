import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from 'react-native-paper';

const HeaderTitle = ({ theme, title }) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: theme.sizes.titleFontSize,
      textTransform: 'capitalize',
      color: theme.colors.textColor,
      fontWeight: 'bold',
    }
  });

  return (
    <Text style={styles.title}>{title}</Text>
  );
};

HeaderLeft.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      textColor: PropTypes.string.isRequired,
    }).isRequired,
    sizes: PropTypes.shape({
      titleFontSize: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default withTheme(HeaderTitle);
