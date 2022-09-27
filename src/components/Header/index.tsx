import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    RegisterLoginData: undefined;
  };

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

interface Props {
    hasBackButton?: boolean
}

export function Header({ hasBackButton = true }: Props) {
    const { goBack } = useNavigation<NavigationProps>();

    const backArrowIcon = <Ionicons name="arrow-back" size={35} color={THEME.COLORS.PLACEHOLDER} />
    const logoutIcon = <Ionicons name="log-out-outline" size={35} color={THEME.COLORS.PLACEHOLDER} />

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {hasBackButton
                    && <TouchableOpacity style={styles.button} onPress={goBack}>
                        {backArrowIcon}
                    </TouchableOpacity>
                }

                <Text style={styles.text}>WEGOJIM</Text>

                <TouchableOpacity style={styles.button}>
                    {logoutIcon}
                </TouchableOpacity>
            </View>
        </View>
    );
}