import { 
    StyleSheet
 } from 'react-native';
 import { Colors, Fonts, Metrics } from '../../themes';

 export default StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        marginBottom: 10,
        elevation: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center'
    },
    image: {
        width: '100%',
        height: '65%',
        resizeMode: 'stretch'
    },
    descriptionContainer: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: Colors.whiteBackground
    },
    nameRatingContainer: {
        width: '65%',
        height: '100%',
        padding: 7,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        alignContent: 'center'
    },
    priceContainer: {
        width: '35%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center'
    },
    hotelName: {
        ...Fonts.hotelCardTitle,
    },
    ratingStyle: {
        backgroundColor: Colors.whiteBackground
    },
    priceLabel: {
        ...Fonts.hotelCardPriceLabel
    },
    price: {
        ...Fonts.smallBlackFont,
        color: Colors.primary
    }
 });