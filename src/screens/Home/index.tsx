import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Button } from '../../components/Form/Button';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>WEGOJIM</Text>
      <Text style={styles.subTitle}>Gym Training Tracker</Text>
      <Button title="Teste" style={styles.button} />
    </SafeAreaView>
  );
}
