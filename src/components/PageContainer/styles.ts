import styled from "styled-components/native";

import colors from "../../themes/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.gray70};
`;

export const Content = styled.View`
  width: 100%;
  padding: 40px 10vw 20px;
`;
