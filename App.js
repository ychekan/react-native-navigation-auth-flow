/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

import theme from './src/theme';

const Navigation = createAppContainer(AppNavigator);

const App = () => (
  <PaperProvider theme={theme}>
    <Navigation />
  </PaperProvider>
);

export default App

