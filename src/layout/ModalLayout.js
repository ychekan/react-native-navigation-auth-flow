import React from 'react';
import {
  Dimensions, View, StyleSheet
} from 'react-native';
import { withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Layout from './Layout';

const ModalLayout = ({
  theme, children
}) => {
  const styles = StyleSheet.create({
    sheet: {
      flex: 1,
      top: Dimensions.get('window').height,
      left: 0,
      right: 0,
      justifyContent: 'flex-end',
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: theme.sizes.defaultIconSizes,
    },
    layoutBlock: {
      backgroundColor: 'transparent'
    },
    offsetTop: {
      top: 50 || Dimensions.get('window').height <= theme.sizes.breakPoint
        ? theme.sizes.bigMargin
        : theme.sizes.biggerMargin
    },
  });

  return (
    <Layout style={styles.layoutBlock}>
      <View style={[StyleSheet.absoluteFill, styles.offsetTop]}>
        <View style={styles.sheet}>
          {children}
        </View>
      </View>
    </Layout>
  );
};

ModalLayout.propTypes = {
  theme: PropTypes.shape({
    sizes: PropTypes.shape({
      bigMargin: PropTypes.number.isRequired,
      largePadding: PropTypes.number.isRequired,
      biggerMargin: PropTypes.number.isRequired,
      breakPoint: PropTypes.number.isRequired,
    }).isRequired,
    colors: PropTypes.shape({
      black: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withNavigation(withTheme(ModalLayout));