import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CardWeather} from '../../components/Cards/CardWeather';
import Geolocation from '@react-native-community/geolocation';

import styles from './styles';
import {getCurrentAndForecastGeographicCoordinates} from '../../services/OpenWeatherService';
import {IWeatherResponseOneCall} from '../../types/interfaces';
import {getCityName, getCoordinatesByCity} from '../../services/GoogleService';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import IconIonics from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../theme/Colors';
import {useWeatherScreen} from '../../hooks/useWeatherScreen';

export const WeatherDailyScreen = ({navigation, route}: any) => {
  const initialStates = {
    currentPosition: {
      latitude: 0,
      longitude: 0,
    },
    hasCurrentPosition: false,
  };
  const [fields, setFields] = useState(initialStates);
  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(true);

  const [weatherResponse, setWeatherResponse] =
    useState<IWeatherResponseOneCall>(null);

  const currentPosition = route?.params?.currentPosition;

  const {
    getNameCurrentCity,
    getCurrentPosition,
    handleResponse,
    getCoordinates,
  } = useWeatherScreen(
    fields,
    setFields,
    initialStates,
    setWeatherResponse,
    setCityName,
    route,

    setLoading,
  );

  useEffect(() => {
    setLoading(true);
    if (currentPosition && !fields.hasCurrentPosition) {
      getCurrentPosition();
    }
    if (currentPosition && fields.hasCurrentPosition) {
      getNameCurrentCity();
      handleResponse();
    }
    if (!currentPosition) {
      setCityName(route?.params?.cityName);
      getCoordinates();
    }
  }, [fields.hasCurrentPosition]);

  return (
    <LinearGradient colors={[Colors.bkgLight, Colors.bkg]} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}>
          <IconIonics
            name={'chevron-back-circle'}
            size={40}
            color={Colors.gray10}
          />
        </TouchableOpacity>
        <ScrollView style={styles.container}>
          {loading ? (
            <View style={styles.loading}>
              <ActivityIndicator color={Colors.white} size={'large'} />
            </View>
          ) : (
            weatherResponse?.daily?.map((item, index) => (
              <CardWeather daily={item} index={index} cityName={cityName} />
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
