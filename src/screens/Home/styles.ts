import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { StyleSheet } from "react-native";

import fonts from "../../themes/fonts";
import colors from "../../themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    color: colors.primary,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    color: colors.primary,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
});

interface LoginListDataProps {
  id: string;
  service_name: string;
  email: string;
  password: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #F2F3F5;
  padding: 0 24px;
`;

export const Metadata = styled.View`
  margin-top: 32px;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: 'Rubik_500Medium';
  color: #3D434D;
`;

export const TotalPassCount = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: 'Rubik_400Regular';
  color: #888D97;
`;


export const LoginList = styled(
  FlatList as new (props: FlatListProps<LoginListDataProps>) => FlatList<LoginListDataProps>
).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: ${RFValue(16)}px;
`;