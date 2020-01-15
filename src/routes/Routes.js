import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BackButton from '../components/BackButton'
import SplashScreen from '../screens/SplashScreen'; 
import ListScreen from '../screens/ListScreen';
import HotelInfoScreen from '../screens/HotelInfoScreen';
import { Colors, Fonts, Metrics } from '../themes' 

const splashNavigator = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none'
  }
);

const appNavigator = createStackNavigator(
  {
    List: { screen: ListScreen },
    HotelInfo: { screen: HotelInfoScreen }
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTitleAlign: 'center',
      headerTitleStyle: { ...Fonts.extraLargeWhiteFont },
      headerLeft: () => <BackButton />,      
    }
  }
);

const router = createSwitchNavigator(
  {
    Splash: splashNavigator,
    App: appNavigator
  },
  {
    initialRouteName: 'Splash',
  }
);

export default createAppContainer(router);
