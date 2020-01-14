import {
  Dimensions,
  Platform,
} from 'react-native';

import DetectNavbar from 'react-native-detect-navbar-android';

const SO = Platform.os;
let screenWidth;
let screenHeight;
let navigationBar; 

if (SO === 'ios'){
  screenWidth = Dimensions.get('screen').width;
  screenHeight = Dimensions.get('screen').height;
} else {
  navigationBar = DetectNavbar.hasSoftKeys();
  if (!navigationBar){
    screenWidth = Dimensions.get('screen').width;
    screenHeight = Dimensions.get('screen').height;
  }else{
    screenWidth = Dimensions.get('window').width;
    screenHeight = Dimensions.get('window').height;
  }
}

const METRICS = {
  screenWidth,
  screenHeight,
}

export default METRICS;


