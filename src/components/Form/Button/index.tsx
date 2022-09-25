import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, ButtonText } from "./styles";

interface Props extends TouchableOpacityProps {
  content: string | React.ReactElement;
  statusColor?: "primary" | "white" | string;
  justifyContent?: "center" | "space-between";
}

export function Button({
  content,
  statusColor = "primary",
  justifyContent = "center",
  ...rest
}: Props) {
  return (
    <Container {...rest} statusColor={statusColor}>
      <ButtonText justifyContent={justifyContent}>{content}</ButtonText>
    </Container>
  );
}
