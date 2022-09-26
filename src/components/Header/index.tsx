import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { If } from "../If";
import colors from "../../themes/colors";
import { Container, Icon, BackButton, Title, LogoutButton } from "./styles";

interface HeaderProps {
  hasBackButton?: boolean;
}

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function Header({ hasBackButton = true }: HeaderProps) {
  const { goBack } = useNavigation<NavigationProps>();

  return (
    <Container>
      <BackButton onPress={hasBackButton ? goBack : () => {}}>
        <If condition={hasBackButton}>
          <Icon name="chevron-left" size={28} />
        </If>
      </BackButton>

      <Title>WEGOJIM</Title>

      <LogoutButton>
        <Icon name="log-out" size={22} />
      </LogoutButton>
    </Container>
  );
}
