import React from "react";
import { Image, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {children}
    </SafeAreaView>
  );
}
