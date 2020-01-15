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
        backgroundColor: Colors.appBackground
    },
    flatListContainer: {
        width: Metrics.screenWidth/1.1,
        height: Metrics.screenHeight -60,
    },
 });