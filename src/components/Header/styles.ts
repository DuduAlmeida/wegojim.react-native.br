import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY_600,
    height: 140,
    padding: 20,
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  content: {
    maxWidth: 1120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  button: {
  },

  text: {
    height: 46,
    fontSize: THEME.FONT_SIZE.XL,
    fontFamily: THEME.FONT_FAMILY.POPPINS.BOLD,
    color: THEME.COLORS.PRIMARY,
    display: 'flex',
    justifyContent: 'flex-start'
  }
});