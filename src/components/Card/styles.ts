import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        height: 60,
        width: '100%',
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    text: {
        fontFamily: THEME.FONT_FAMILY.INTER.BOLD,
        fontSize: THEME.FONT_SIZE.MD
    }
});