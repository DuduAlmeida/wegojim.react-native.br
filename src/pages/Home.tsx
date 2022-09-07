import React from "react";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import colors from "../themes/colors";
import fonts from "../themes/fonts";

export function Home() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas de {"\n"}
        forma fácil
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
});
