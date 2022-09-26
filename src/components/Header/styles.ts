import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../../themes/colors";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.gray60};
  padding: ${getStatusBarHeight(true) + 17}px 13px 17px;
`;

export const Icon = styled(Feather)`
  color: ${colors.gray30};
`;

export const BackButton = styled.Pressable`
  min-width: 32px;
`;

export const LogoutButton = styled.Pressable`
  min-width: 32px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: "Rubik_500Medium";
  color: ${colors.primary};
  margin: auto;
`;
