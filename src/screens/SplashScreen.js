import React, { Component } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  ActivityIndicator,
  Text
} from 'react-native';
import StoragePermission from '../services/permissions/StoragePersmission';
import splashStyles from './styles/SplashStyles';
import { Colors } from '../themes';
import { connect } from 'react-redux';

class SplashScreen extends Component {

  static navigationOptions = {
    headerShown: false
  }

  constructor(props){
    super(props);
    this.storagePermission = new StoragePermission();
    this.splashBackground = require('../assets/images/almundo-logo-full-color.png');
    this.loadingText = `Cargando`;
  }

  componentDidMount = async() => {
    await this.storagePermission.handleStoragePermission()
    .then((granted) => {
      console.log(granted);
      this._removeHotelList();
      this._goToNextScreen();
    })
    .catch((error) => {
      console.log(error);
      this._goToNextScreen();
    });
  };

  _removeHotelList = () => {
    this.props.dispatch({
      type: 'REMOVE_HOTEL_LIST',
      payload: {}
    });
  };

  _goToNextScreen = () => {
    this.props.navigation.navigate('App');
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

function mapStateToProps(state){
  return {
    hotels: state.hotel.hotelsList
  }
}

export default connect(mapStateToProps)(SplashScreen);