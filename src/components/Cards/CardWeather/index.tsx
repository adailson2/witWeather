import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  getByGeographicCoordinates,
  getByName,
} from '../../../services/OpenWeatherService';

import {Colors} from '../../../theme/Colors';
import Fonts from '../../../theme/Fonts';
import styles from './styles';
import IconIonics from 'react-native-vector-icons/Ionicons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import {IDaily, IWeather} from '../../../types/interfaces';
import {useCardWeather} from '../../../hooks/useCardWeather';

interface IProps {
  daily?: IDaily;
  index?: number;
  cityName?: string;
}

export const CardWeather = ({daily, index, cityName}: IProps) => {
  const [weather, setWeather] = useState<IWeather>({
    description: '',
    colors: [Colors.sunLight, Colors.sun],
    icon: '',
    type: '',
    textColor: Colors.gray10,
  });
  const [day, setDay] = useState('');
  const {defineDay, defineWeather} = useCardWeather(setWeather, index, setDay);

  useEffect(() => {
    defineDay();
    defineWeather(daily?.weather[0]?.main);
  }, []);

  return (
    <View style={styles.wrapper} key={index.toString()}>
      <LinearGradient
        useAngle={true}
        angle={-200}
        colors={weather.colors}
        style={styles.linearGradient}
        key={index.toString()}>
        <React.Fragment>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={[
                styles.temperature,
                {
                  color: weather.textColor,
                },
              ]}>
              {daily?.temp?.day?.toFixed(0)}°
            </Text>
            <Text
              style={[
                styles.weather,
                {
                  color: weather.textColor,
                },
              ]}>
              {daily?.weather?.[0]?.main}
            </Text>
            <Text
              style={[
                styles.city,
                {
                  color: weather.textColor,
                },
              ]}>
              {cityName}
            </Text>
          </View>
          <View>
            {weather?.type === 'fontAwesome5' && (
              <IconFA5
                name={weather?.icon}
                size={70}
                color={weather.textColor}
              />
            )}
            {weather?.type === 'iconics' && (
              <IconIonics
                name={weather?.icon}
                size={70}
                color={weather.textColor}
              />
            )}
          </View>
          <View>
            <Text
              style={[
                styles.day,
                {
                  color: weather.textColor,
                },
              ]}>
              {day}
            </Text>
          </View>
        </React.Fragment>
      </LinearGradient>
    </View>
  );
};
