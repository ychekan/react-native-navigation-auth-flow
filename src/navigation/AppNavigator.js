import { createSwitchNavigator } from 'react-navigation';

import AppStack from './AppStack';
import AuthStack from './AuthStack';

import AuthLoadingScreen from '../screens/AuthLoading/AuthLoading';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
