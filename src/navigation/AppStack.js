import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

/* Screens */
import HomeScreen from '../screens/Home/Home';
import SettingsScreen from '../screens/Settings/Settings';
import ModalScreen from '../screens/Modal/Modal';

import theme from '../theme';

/* Top statusbar */
import HeaderLeft from '../components/Header/HeaderLeft';
import HeaderRight from '../components/Header/HeaderRight';
import HeaderGoBack from '../components/Header/HeaderGoBack';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: -0.41,
  },
  headerStyle: {
    backgroundColor: theme.colors.defaultCard,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
});

const Home = {
  screen: HomeScreen,
  navigationOptions: {
    headerTitle: 'Home',
    headerStyle: styles.headerStyle,
    headerTintColor: theme.colors.textColor,
    headerTitleStyle: styles.headerTitleStyle,
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight />,
  },
};

const Settings = {
  screen: SettingsScreen,
  navigationOptions: {
    headerTitle: 'Settings',
    headerStyle: styles.headerStyle,
    headerTintColor: theme.colors.textColor,
    headerTitleStyle: styles.headerTitleStyle,
    headerLeft: () => <HeaderGoBack />,
  },
};

const Modal = {
  screen: ModalScreen,
  navigationOptions: {
    gestureResponseDistance: { vertical: 1000 },
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
  },
};

const ModalAppStack = {
  Modal,
};

const MainAppStack = createStackNavigator(
  {
    Home,
    Settings,
  },
  {
    defaultNavigationOptions: {
      safeAreaInsets: Platform.OS === 'android' ? { top: 0 } : {},
      headerTitleAlign: 'center',
    },
  },
);

const RootNavigator = createStackNavigator({
  MainApp: {
    screen: MainAppStack,
  },
  ...ModalAppStack,
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigator;
