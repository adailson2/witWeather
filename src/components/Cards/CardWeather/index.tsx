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
import {IWeatherResponse, Region} from '../../../types/interfaces';

interface IProps {
  city?: string;
  region?: Region;
}

export const CardWeather = ({city, region}: IProps) => {
  const [fields, setFields] = useState<IWeatherResponse>(null);
  const [weather, setWeather] = useState({
    description: '',
    colors: [Colors.sunLight, Colors.sun],
    icon: '',
    type: '',
    textColor: Colors.gray10,
  });
  const [loading, setLoading] = useState(false);

  const defineWeather = (weather: string) => {
    switch (weather) {
      case 'Rain': {
        setWeather({
          description: weather,
          colors: [Colors.rainLight, Colors.rain],
          icon: 'cloud-showers-heavy',
          type: 'fontAwesome5',
          textColor: Colors.gray10,
        });
        break;
      }

      case 'Clouds': {
        setWeather({
          description: weather,
          colors: [Colors.rainLight, Colors.rain],
          icon: 'cloud',
          type: 'fontAwesome5',
          textColor: Colors.gray10,
        });
        break;
      }

      case 'Snow': {
        setWeather({
          description: weather,
          colors: [Colors.snowLight, Colors.snow],
          icon: 'snowflake',
          type: 'fontAwesome5',
          textColor: Colors.black,
        });
        break;
      }

      case 'Mist': {
        setWeather({
          description: weather,
          colors: [Colors.snowLight, Colors.snow],
          icon: 'snowflake',
          type: 'fontAwesome5',
          textColor: Colors.black,
        });
        break;
      }

      case 'Clear': {
        setWeather({
          description: weather,
          colors: [Colors.sunLight, Colors.sun], // change to blue
          icon: 'sunny',
          type: 'iconics',
          textColor: Colors.gray10,
        });
        break;
      }

      default: {
        setWeather({
          description: weather,
          colors: [Colors.rainLight, Colors.rain], // change to blue
          icon: 'sunny',
          type: 'iconics',
          textColor: Colors.gray10,
        });
        break;
      }
    }
  };

  const handleResponse = useCallback(async () => {
    try {
      setLoading(true);
      let response: IWeatherResponse = null;
      if (city?.length > 0) {
        response = await getByName(city);
      } else {
        response = await getByGeographicCoordinates(region);
      }
      if (response) {
        setFields(response);
        defineWeather(response?.weather?.[0]?.main);
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      console.dev('Erro ao consultar a API');
    }
  }, []);

  useEffect(() => {
    handleResponse();
  }, []);

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
                  },
                ]}>
                {fields?.main?.temp.toFixed(0)}°
              </Text>
              <Text
                style={[
                  styles.weather,
                  {
                    color: weather.textColor,
                  },
                ]}>
                {fields?.weather?.[0]?.main}
              </Text>
              <Text
                style={[
                  styles.city,
                  {
                    color: weather.textColor,
                  },
                ]}>
                {fields?.name + ', ' + fields?.sys?.country}
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
