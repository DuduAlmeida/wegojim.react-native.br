import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';

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
  button: {
    width: "80vw",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
