import React from 'react';
import {ScrollView} from 'react-native';
import {CardWeather} from '../../components/Cards/CardWeather';

import styles from './styles';

export const CitiesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CardWeather weather="sun" />
      <CardWeather weather="rain" />
      <CardWeather weather="snow" />
      <CardWeather weather="windy" />
    </ScrollView>
  );
};
