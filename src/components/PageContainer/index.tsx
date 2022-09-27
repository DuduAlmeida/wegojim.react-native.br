import React from "react";
import { View } from "react-native";
import { Background } from "../Background";

import { Header } from "../Header";
import { styles } from "./styles";

interface PageContainerProps {
  children: React.ReactNode;
  hasBackButton?: boolean;
}

export function PageContainer({ children, hasBackButton }: PageContainerProps) {
  return (
    <Background>
      <Header hasBackButton={hasBackButton} />
      <View style={styles.pageContent}>
        {children}
      </View>
    </Background>
  );
}
