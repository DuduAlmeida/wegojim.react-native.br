import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../theme';

import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
}

export function Card({ title, ...rest }: Props) {
    const questionIcon = <Ionicons name="md-help-circle" size={24} color={THEME.COLORS.BACKGROUND} />

    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>{title}</Text>
            {questionIcon}
        </TouchableOpacity>
    );
}