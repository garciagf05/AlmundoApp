import React, { Component } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  ActivityIndicator,
  Text
} from 'react-native';
import splashStyles from './styles/SplashStyles';
import { Colors } from '../themes';
import { connect } from 'react-redux';

class SplashScreen extends Component {

  static navigationOptions = {
    headerShown: false
  }

  constructor(props){
    super(props);
    this.splashBackground = require('../assets/images/almundo-logo-full-color.png');
    this.loadingText = `Cargando`;
  }

  componentDidMount = async() => {
    this._goToNextScreen();
  };

  _goToNextScreen = () => {
    setTimeout(
      () => this.props.navigation.navigate('App'),
      3000
    );
  };

  render = () => {
    return (
      <SafeAreaView style={splashStyles.screenContainer}>
        <ImageBackground source={this.splashBackground}
                          style={splashStyles.splashBackground}
                          resizeMode={'contain'}>

        </ImageBackground>
        <View style={splashStyles.loaderContainer}>
          <ActivityIndicator size={'large'} color={Colors.primary}/>
          <Text style={splashStyles.loaderText}>{this.loadingText}</Text>
        </View>
      </SafeAreaView>
    );
  };
}


export default connect(null)(SplashScreen);