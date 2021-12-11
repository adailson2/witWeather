import React, {useState, useEffect, useCallback} from 'react';
import {ScrollView, Text} from 'react-native';
import {CardWeather} from '../../components/Cards/CardWeather';
import {cities} from '../../data/cities';
import Geolocation from '@react-native-community/geolocation';

import styles from './styles';

export const CitiesScreen = () => {
  const initialStates = {
    currentPosition: {
      latitude: 0,
      longitude: 0,
    },
    hasCurrentPosition: false,
  };
  const [fields, setFields] = useState(initialStates);

  const getCurrentPosition = async () => {
    Geolocation.getCurrentPosition(
      async ({coords: {latitude, longitude}}) => {
        setFields({
          currentPosition: {latitude, longitude},
          hasCurrentPosition: true,
        });
      },
      error => {
        if (__DEV__) {
          console.dev(error.code, error.message);
          setFields(initialStates);
        }
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <CardWeather
        region={fields.currentPosition}
        hasCurrentPosition={fields.hasCurrentPosition}
      />

      {cities.map(city => (
        <CardWeather city={city.name} />
      ))}
    </ScrollView>
  );
};
