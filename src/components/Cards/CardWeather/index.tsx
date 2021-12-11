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
import {IWeather, IWeatherResponse, Region} from '../../../types/interfaces';
import useWeather from '../../../hooks/useWeather';

interface IProps {
  city?: string;
  region?: Region;
  hasCurrentPosition?: boolean;
}

export const CardWeather = ({city, region, hasCurrentPosition}: IProps) => {
  const [weatherResponse, setWeatherResponse] =
    useState<IWeatherResponse>(null);
  const [weather, setWeather] = useState<IWeather>({
    description: '',
    colors: [Colors.sunLight, Colors.sun],
    icon: '',
    type: '',
    textColor: Colors.gray10,
  });
  const [loading, setLoading] = useState(false);
  const {handleResponse} = useWeather(
    setWeather,
    setLoading,
    setWeatherResponse,
    hasCurrentPosition,
    city,
    region,
  );

  useEffect(() => {
    if (city?.length === 0 && !hasCurrentPosition) {
      setLoading(true);
    } else {
      handleResponse();
    }
  }, [hasCurrentPosition]);

  return (
    <View style={styles.wrapper}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={Colors.blue90} size={'large'} />
        </View>
      ) : (
        <LinearGradient
          useAngle={true}
          angle={-200}
          colors={weather.colors}
          style={styles.linearGradient}>
          <React.Fragment>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={[
                  styles.temperature,
                  {
                    color: weather.textColor,
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -0.5, height: 0.5},
                    textShadowRadius: 2,
                  },
                ]}>
                {weatherResponse?.main?.temp.toFixed(0)}°
              </Text>
              <Text
                style={[
                  styles.weather,
                  {
                    color: weather.textColor,
                  },
                ]}>
                {weatherResponse?.weather?.[0]?.main}
              </Text>
              <Text
                style={[
                  styles.city,
                  {
                    color: weather.textColor,
                  },
                ]}>
                {weatherResponse?.name + ', ' + weatherResponse?.sys?.country}
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
                30
              </Text>
            </View>
          </React.Fragment>
        </LinearGradient>
      )}
    </View>
  );
};
