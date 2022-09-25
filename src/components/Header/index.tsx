import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Icon, BackButton, Title } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";

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
      <>
        <BackButton onPress={goBack}>
          <Icon name="chevron-left" color="#1967FB" size={28} />
        </BackButton>

        <Title>WEGOJIM</Title>

        {"->"}
      </>
    </Container>
  );
}
