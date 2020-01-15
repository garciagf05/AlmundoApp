import { 
    StyleSheet
 } from 'react-native';
 import { Colors, Fonts, Metrics } from '../../themes';


 export default StyleSheet.create({
    container: {
        width: Metrics.screenWidth/1.15,
        height: 40,
        borderWidth: 0.5,
        marginVertical: 10,
        borderColor: Colors.clearBorder,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: Colors.whiteBackground
    },
    textInput: {
        width: '75%',
        paddingVertical: 0,
        height: 30,
        ...Fonts.mediumBlackFont
    }
 });