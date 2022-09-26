import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import colors from "../../../themes/colors";

interface ContainerProps {
  statusColor: string;
}

interface ButtonTextProps {
  justifyContent: "center" | "space-between";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ statusColor }) => {
    if (statusColor === "primary") return colors.primary;

    return colors.white;
  }};

  width: 100%;
  padding: 0 20px;
  margin: 5px auto;
  border-radius: 4px;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 60px;
`;
export const ButtonText = styled.Text<ButtonTextProps>`
  font-family: "Rubik_500Medium";
  font-size: 16px;
  color: ${colors.gray70};
  width: 100%;

  ${({ justifyContent }) => css`
    display: flex;
    align-items: center;
    justify-content: ${justifyContent};
  `};
`;
// width: "80vw",
// marginLeft: "auto",
// marginRight: "auto",
