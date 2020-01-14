import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../screens/SplashScreen'; 

const splashNavigator = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  }
);

const router = createSwitchNavigator(
  {
    Splash : splashNavigator,
  },
  {
    initialRouteName: 'Splash',
  }
);

export default createAppContainer(router);
