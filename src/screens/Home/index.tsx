import React from "react";
import { SafeAreaView, Text } from "react-native";

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>WEGOJIM</Text>
      <Text style={styles.subTitle}>Gym Training Tracker</Text>
    </SafeAreaView>
  );
}
