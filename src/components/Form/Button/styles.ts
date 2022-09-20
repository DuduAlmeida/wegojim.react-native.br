import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import colors from "../../../themes/colors";

export const Container = styled(TouchableOpacity)`
  background-color: ${colors.white};

  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
export const ButtonText = styled.Text`
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: ${colors.gray70};
`;