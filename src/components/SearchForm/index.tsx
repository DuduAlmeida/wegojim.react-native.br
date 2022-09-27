import React, { useRef, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';
import { THEME } from '../../theme';

export function SearchForm() {
    const searchIcon = <Ionicons name="search-outline" size={24} color={THEME.COLORS.PLACEHOLDER} />

    return (
        <View style={styles.form}>
            <TextInput
                placeholder="Pesquisar em treinos..."
                placeholderTextColor={THEME.COLORS.PLACEHOLDER}
                style={styles.input}
            />
            <TouchableOpacity style={styles.searchButton}>
                {searchIcon}
            </TouchableOpacity>
        </View>
    );
}