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
    },
    extraSmallWhiteFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.whiteFont,
        fontSize: 10
    },
    smallWhiteFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.whiteFont,
        fontSize: 12
    },
    mediumWhiteFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.whiteFont,
        fontSize: 14
    },
    largeWhiteFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.whiteFont,
        fontSize: 16
    },
    extraLargeWhiteFont: {
        fontFamily: FONT_FAMILY.lato,
        color: Colors.whiteFont,
        fontSize: 18
    },
    hotelCardTitle: {
        fontFamily: FONT_FAMILY.quickSand,
        fontSize: 13,
        color: Colors.blackFont,
        fontWeight: 'bold'
    },
    hotelCardPriceLabel: {
        fontFamily: FONT_FAMILY.lato,
        color: 'gray',
        fontSize: 9
    }
});