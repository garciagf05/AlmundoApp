import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';
import {
  Rating
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HotelsApi from '../services/api/HotelsApi'
import hotelInfoStyles from './styles/HotelInfoStyles';
import { Colors, Fonts, Metrics } from '../themes';
import { connect } from 'react-redux';

class HotelInfoScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('hotelName')
  })

  constructor(props){
    super(props);
    this.hotelId = this.props.navigation.getParam('hotelId');
    this.state = {
      hotelInfo: undefined
    }
  }

  componentDidMount = () => {
    this._getHotelInfo();
  };

  _getHotelInfo = () => {
    HotelsApi.getHotelInfo(this.hotelId)
    .then((response) => {
      if (response.status === 200){
        this.setState({ hotelInfo: response.data.hotel });
        console.log(this.state.hotelInfo);
      }
    })
    .catch((error) => { console.log(error) });
  };

  _linkToGoogleMaps = () => {
    Linking
    .openURL(`https://www.google.com/maps/search/?api=1&query=${this.state.hotelInfo.latitude},${this.state.hotelInfo.longitude}`)
    .catch(error => console.log(`G-Maps Error ${error}`))
  };

  render = () => {
    return (
      <SafeAreaView style={hotelInfoStyles.screenContainer}>
        {
          !this.state.hotelInfo ?
            <View style={hotelInfoStyles.loadingContainer}>
              <ActivityIndicator size={"large"}
                                  color={Colors.primary}/>
              <Text>{'Cargando Información'}</Text>
            </View>
          : // When object is assigned
          <View style={hotelInfoStyles.dataContainer}>
            <Image source={ {uri: this.state.hotelInfo.images[0] }}
                    style={hotelInfoStyles.image}/>
            <View style={hotelInfoStyles.addressContainer}>
              <View style={hotelInfoStyles.pinContainer}>
                <Icon
                  name={'map-marker'}
                  size={30}
                  color={Colors.blackFont}
                />
              </View>
              <View style={hotelInfoStyles.address}>
                <Text style={hotelInfoStyles.addressLabel}>{`${this.state.hotelInfo.address} - ${this.state.hotelInfo.city}, ${this.state.hotelInfo.state}, ${this.state.hotelInfo.country}`}</Text>
              </View>
            </View>
            <View style={hotelInfoStyles.ratingContainer}>
              <Text style={hotelInfoStyles.ratingLabel}>{'Calificación de: '}</Text>
              <Rating
                imageSize={24}
                readonly
                startingValue={parseInt(this.state.hotelInfo.stars || '0')}
                style={hotelInfoStyles.ratingStyle}
              />
            </View>
            <View style={hotelInfoStyles.priceContainer}>
              <Text style={hotelInfoStyles.ratingLabel}>{'Precio por noche: '}</Text>
              <Text style={hotelInfoStyles.priceLabel}>{`COP ${parseInt(this.state.hotelInfo.price || '0').toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`}</Text>
            </View>
            <View style={hotelInfoStyles.buttonContainer}>
              <TouchableOpacity style={hotelInfoStyles.button}
                                activeOpacity={0.8}
                                onPress={this._linkToGoogleMaps}>
                <Icon
                    name={'google-maps'}
                    size={60}
                    color={Colors.primary}
                  />
              </TouchableOpacity>
            </View>
          </View>
        }
      </SafeAreaView>
    );
  };
}

function mapStateToProps(state){
  return {
    hotels: state.hotel.hotelsList
  }
}

export default connect(mapStateToProps)(HotelInfoScreen)