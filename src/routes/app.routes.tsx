import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SelectTraining } from '../screens/SelectTraining';
import { SelectDivisions } from '../screens/SelectDivisions';
import { NavigationContainer } from '@react-navigation/native';

const {
  Navigator,
  Screen
} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="SelectDivisions" component={SelectDivisions} />
      <Screen name="SelectTraining" component={SelectTraining} />
    </Navigator>
  );
}