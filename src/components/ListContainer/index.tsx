import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface Props {
    children: any
}


export function ListContainer({ children }: Props) {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
}