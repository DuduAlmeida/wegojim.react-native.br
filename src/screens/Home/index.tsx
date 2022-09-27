import React from "react";
import { Text, TouchableOpacity } from "react-native";
// import { Button } from '../../components/Form/Button';

import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';
import { THEME } from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const { navigate } = useNavigation<any>(); //temporary

  const barbellIcon = <Ionicons name="barbell-sharp" size={80} color={THEME.COLORS.PRIMARY} />
  const googleIcon = <Ionicons name="logo-google" size={16} style={styles.googleIcon} color={THEME.COLORS.BACKGROUND} />

  return (

    <Background>
      <SafeAreaView style={styles.container}>

        {barbellIcon}

        <Text style={styles.title} >WEGOJIM</Text>
        <Text style={styles.subtitle}>Gym Training Tracker</Text>

        <TouchableOpacity
          onPress={() => navigate('SelectDivisions')} //TODO: implement authentication
          style={styles.button}
        >
          {googleIcon}
          <Text style={styles.buttonText}> Login com Google</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </Background>
  );
}
