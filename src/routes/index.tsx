import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WeatherDailyScreen} from '../pages/WeatherDailyScreen';
import {CitiesScreen} from '../pages/CitiesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cities"
        component={CitiesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WeatherDaily"
        component={WeatherDailyScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
