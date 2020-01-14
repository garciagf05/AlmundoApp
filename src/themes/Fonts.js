import { StyleSheet } from 'react-native';
import Colors from './Colors';

const FONT_FAMILY = {
    montserratLight: 'Montserrat-Light',
    montserratBlack: 'Montserrat-Black',
    lato: 'Lato',
    latoBold: 'Lato-Bold',
    quickSand: 'Quicksand',
    quickSandSemiBold: 'Quicksand-SemiBold'
}

export default fonts = StyleSheet.create({
    extraSmallBlackFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.blackFont,
        fontSize: 10
    },
    smallBlackFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.blackFont,
        fontSize: 12
    },
    mediumBlackFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.blackFont,
        fontSize: 14
    },
    largeBlackFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.blackFont,
        fontSize: 16
    },
    extraLargeBlackFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.blackFont,
        fontSize: 18
    }
});