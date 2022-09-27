import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: THEME.COLORS.PRIMARY,
        fontFamily: THEME.FONT_FAMILY.POPPINS.BOLD,
        fontSize: THEME.FONT_SIZE.XL
    },

    subtitle: {
        color: THEME.COLORS.PRIMARY,
        fontFamily: THEME.FONT_FAMILY.POPPINS.BOLD,
        fontSize: THEME.FONT_SIZE.MD
    },

    button: {
        backgroundColor: THEME.COLORS.GRAY_100,
        paddingHorizontal: 24,
        paddingVertical: 16,
        height: 55,
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 20,
    },

    googleIcon: {
        marginRight: 35,
        marginLeft: 20
    },

    buttonText: {
        fontFamily: THEME.FONT_FAMILY.INTER.REGULAR,
        alignSelf: 'center'
    }
});