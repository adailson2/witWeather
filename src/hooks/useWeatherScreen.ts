import Geolocation from '@react-native-community/geolocation';
import {useCallback} from 'react';
import {getCityName, getCoordinatesByCity} from '../services/GoogleService';
import {getCurrentAndForecastGeographicCoordinates} from '../services/OpenWeatherService';
import {Colors} from '../theme/Colors';
import {
  IStateWeatherDaily,
  IWeather,
  IWeatherResponseOneCall,
} from '../types/interfaces';

export const useWeatherScreen = (
  fields: IStateWeatherDaily,
  setFields: (value: IStateWeatherDaily) => void,
  initialStates: IStateWeatherDaily,
  setWeatherResponse: (value: IWeatherResponseOneCall) => void,
  setCityName: (value: string) => void,
  route: any,
  setLoading: (value: boolean) => void,
) => {
  const getCurrentPosition = async () => {
    Geolocation.getCurrentPosition(
      async ({coords: {latitude, longitude}}) => {
        setFields({
          ...fields,
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

  const handleResponse = useCallback(async () => {
    try {
      const region = {
        latitude: fields.currentPosition.latitude,
        longitude: fields.currentPosition.longitude,
      };

      const response = await getCurrentAndForecastGeographicCoordinates(region);

      if (response) {
        setWeatherResponse(response);
      }
    } catch (error: any) {
      console.dev('Erro ao consultar a API');
    }
  }, [fields.hasCurrentPosition]);

  const getNameCurrentCity = useCallback(async () => {
    try {
      const region = {
        latitude: fields.currentPosition.latitude,
        longitude: fields.currentPosition.longitude,
      };
      const cityName = await getCityName(region);

      setLoading(false);
      setCityName(cityName);
    } catch (error: any) {
      console.dev('Erro ao consultar a API');
    }
  }, [fields.hasCurrentPosition]);

  const getCoordinates = useCallback(async () => {
    try {
      const res = await getCoordinatesByCity(route?.params?.cityName);

      const response = await getCurrentAndForecastGeographicCoordinates({
        latitude: res.lat,
        longitude: res.lng,
      });

      if (response) {
        setWeatherResponse(response);
        setLoading(false);
      }
    } catch (error: any) {
      console.dev('Erro ao consultar a API', error);
    }
  }, [fields.hasCurrentPosition]);

  return {
    getNameCurrentCity,
    getCurrentPosition,
    handleResponse,
    getCoordinates,
  };
};
