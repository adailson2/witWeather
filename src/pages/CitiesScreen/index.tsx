import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CardWeather} from '../../components/Cards/CardWeather';
import {cities} from '../../data/cities';
import {getByGeographicCoordinates} from '../../services/OpenWeatherService';

import styles from './styles';

export const CitiesScreen = () => {
  const currentPosition = {latitude: -15.43434, longitude: -21.232323};

  return (
    <ScrollView style={styles.container}>
      <CardWeather region={currentPosition} />

      {cities.map(city => (
        <CardWeather city={city.name} />
      ))}
    </ScrollView>
  );
};
