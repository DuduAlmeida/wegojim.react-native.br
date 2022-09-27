import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { THEME } from '../../theme';
import { Background } from '../Background';

import { styles } from './styles';

export function Loading() {
  return (
    <Background>
      <View style={styles.container}>
        <ActivityIndicator color={THEME.COLORS.PRIMARY} />
      </View>
    </Background>
  );
}