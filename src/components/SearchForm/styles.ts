import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 60,
        marginBottom: 30,
        width: '100%'
    },
    input: {
        backgroundColor: THEME.COLORS.GRAY_600,
        padding: 16,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        fontSize: THEME.FONT_SIZE.MD,
        outlineWidth: 0,
        flexGrow: 1,
        color: THEME.COLORS.GRAY_200
        
    },
    searchButton: {
        padding: 16,
        backgroundColor: THEME.COLORS.BLACK,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
    },
});
