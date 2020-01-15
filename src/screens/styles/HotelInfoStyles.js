import { 
    StyleSheet
 } from 'react-native';
 import { Colors, Fonts, Metrics } from '../../themes';


 export default StyleSheet.create({
    screenContainer: {
        width: Metrics.screenWidth,
        height: Metrics.screenHeight,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        flex: 1,
        backgroundColor: Colors.whiteBackground
    },
    dataContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
    },
    image: {
        width: '100%',
        height: '40%',
        resizeMode: 'cover'
    },
    addressContainer: {
        width: '100%',
        height: '15%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    pinContainer: {
        width: '15%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    address: {
        width: '85%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    addressLabel: {
        ...Fonts.mediumBlackFont,
        textAlign: 'left'
    },
    ratingContainer: {
        width: '100%',
        height: '10%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center'
    },
    ratingLabel: {
        ...Fonts.mediumBlackFont,
        textAlign: 'left'
    },  
    ratingStyle: {
        backgroundColor: Colors.whiteBackground
    },
    priceContainer: {
        width: '100%',
        height: '10%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center'
    },
    priceLabel: {
        ...Fonts.largeBlackFont,
        color: Colors.primary
    },
    buttonContainer: {
        width: '100%',
        height: '25%',
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    button: {
        width: 60,
        height: 60
    }
 });