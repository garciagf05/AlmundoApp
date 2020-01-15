import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text
} from 'react-native';
import {
  Rating
} from 'react-native-elements';
import { withNavigation }  from 'react-navigation';
import hotelCardStyles from './styles/HotelCardStyles';

class HotelCard extends React.Component {

  constructor(props){
    super(props);
  }

  _goToHotelInfoScreen = () => {
    this.props.navigation.navigate('HotelInfo', {
      hotelId: this.props.data._id,
      hotelName: this.props.data.name
    })
  };

  render = () => {
    return (
      <TouchableOpacity style={hotelCardStyles.container}
                        activeOpacity={0.8}
                        onPress={this._goToHotelInfoScreen}>
        <Image source={{uri: this.props.data.images[0]}}
              style={hotelCardStyles.image} />
        <View style={hotelCardStyles.descriptionContainer}>
          <View style={hotelCardStyles.nameRatingContainer}>
            <Text style={hotelCardStyles.hotelName}>{this.props.data.name}</Text>
            <Rating
              imageSize={16}
              readonly
              startingValue={parseInt(this.props.data.stars || '0')}
              style={hotelCardStyles.ratingStyle}
            />
          </View>
          <View style={hotelCardStyles.priceContainer}>
            <Text style={hotelCardStyles.priceLabel}>{'Precio Por Noche'}</Text>
            <Text style={hotelCardStyles.price}>{`COP ${parseInt(this.props.data.price || '0').toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
}

export default withNavigation(HotelCard);
