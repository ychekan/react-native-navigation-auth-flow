import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';

const Layout = ({ theme, children, layoutStyle, barStyle }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.defaultBackground,
    },
    safeArea: {
      flex: 1,
    }
  });
  return (
    <View style={[styles.container, layoutStyle]}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={
          barStyle === 'light-content'
            ? theme.colors.darkThemeBackground
            : theme.colors.lightThemeBackground
        }
      />
      <SafeAreaView
        style={styles.safeArea}
        forceInset={{ top: 'never', bottom: 'never' }}
      >
        {children}
      </SafeAreaView>
    </View>
  );
};

Layout.propTypes = {
  theme: PropTypes.shape({
    sizes: PropTypes.shape({
      defaultMarginTop: PropTypes.number.isRequired,
    }).isRequired,
    colors: PropTypes.shape({
      defaultBackground: PropTypes.string.isRequired,
      darkThemeBackground: PropTypes.string.isRequired,
      lightThemeBackground: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
  layoutStyle: PropTypes.shape({}),
  barStyle: PropTypes.string,
};

Layout.defaultProps = {
  barStyle: 'light-content',
  layoutStyle: {},
};

export default withTheme(Layout);
