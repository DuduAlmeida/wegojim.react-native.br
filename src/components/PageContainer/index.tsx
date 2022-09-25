import React from "react";

import { Container } from "./styles";
import { Header } from "../../components/Header";

interface PageContainerProps {
  children: React.ReactNode;
  hasBackButton?: boolean;
}

export function PageContainer({ children, hasBackButton }: PageContainerProps) {
  return (
    <Container>
      <Header hasBackButton={hasBackButton} />

      {children}
    </Container>
  );
}
