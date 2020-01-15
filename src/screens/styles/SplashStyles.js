import { 
    StyleSheet
 } from 'react-native';
 import { Fonts, Metrics } from '../../themes';


 export default StyleSheet.create({
    screenContainer: {
        width: Metrics.screenWidth,
        height: Metrics.screenHeight,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    splashBackground: {
        width: 200,
        height: 200
    },
    loaderContainer: {
        width: '100%',
        height: 75,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    loaderText: {
        ...Fonts.smallBlackFont
    }
 });