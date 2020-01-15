import { 
    StyleSheet
 } from 'react-native';
 import { Colors, Fonts, Metrics } from '../../themes';


 export default StyleSheet.create({
    loadingContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    loadingLabel: {
        ...Fonts.smallBlackFont
    },
 });