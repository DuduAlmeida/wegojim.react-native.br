import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SelectTraining } from '../screens/SelectTraining';
import { SelectDivisions } from '../screens/SelectDivisions';

const {
  Navigator,
  Screen
} = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="SelectDivisions" component={SelectDivisions} />
      <Screen name="SelectTraining" component={SelectTraining} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}