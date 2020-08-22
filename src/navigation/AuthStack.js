import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import SignInScreen from '../screens/SignIn/SignIn';
import RegisterScreen from '../screens/Register/Register';

const SignIn = {
  screen: SignInScreen,
  headerMode: 'none',
  navigationOptions: {
    headerShown: false,
    gestureEnabled: false,
  },
};

const Register = {
  screen: RegisterScreen,
  headerMode: 'none',
  navigationOptions: {
    headerShown: false,
    gestureEnabled: false,
  },
};

const AuthStack = createStackNavigator(
  {
    SignIn,
    Register,
  },
  {
    defaultNavigationOptions: {
      safeAreaInsets: Platform.OS === 'android' ? { top: 0 } : {},
      headerTitleAlign: 'center',
      headerMode: 'none'
    },
  },
);

export default AuthStack;
