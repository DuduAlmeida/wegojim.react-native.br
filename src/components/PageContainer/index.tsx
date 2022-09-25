import React from "react";
import { Image, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";

interface PageContainerProps {
  children: React.ReactNode;
  hasBackButton?: boolean;
}

export function PageContainer({ children, hasBackButton }: PageContainerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header hasBackButton={hasBackButton} />

      {children}
    </SafeAreaView>
  );
}
