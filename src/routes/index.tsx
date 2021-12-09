import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CitiesScreen} from '../pages/CitiesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities" component={CitiesScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
