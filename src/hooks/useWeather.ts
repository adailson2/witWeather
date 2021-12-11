import {useCallback} from 'react';
import {
  getByGeographicCoordinates,
  getByName,
} from '../services/OpenWeatherService';
import {Colors} from '../theme/Colors';
import {IWeather, IWeatherResponse, Region} from '../types/interfaces';

function useWeather(
  setWeather: (weather: IWeather) => void,
  setLoading: (loading: boolean) => void,
  setWeatherResponse: (weatherResponse: IWeatherResponse) => void,
  hasCurrentPosition: boolean,
  city?: string,
  region?: Region,
) {
  const defineWeather = (description: string) => {
    switch (description) {
      case 'Rain': {
        setWeather({
          description: description,
          colors: [Colors.rainLight, Colors.rain],
          icon: 'cloud-showers-heavy',
          type: 'fontAwesome5',
          textColor: Colors.gray10,
        });
        break;
      }

      case 'Clouds': {
        setWeather({
          description: description,
          colors: [Colors.gray30, Colors.gray60],
          icon: 'cloud',
          type: 'fontAwesome5',
          textColor: Colors.gray10,
        });
        break;
      }

      case 'Fog': {
        setWeather({
          description: description,
          colors: [Colors.gray30, Colors.gray60],
          icon: 'cloud',
          type: 'fontAwesome5',
          textColor: Colors.gray10,
        });
        break;
      }

      case 'Snow': {
        setWeather({
          description: description,
          colors: [Colors.snowLight, Colors.snow],
          icon: 'snowflake',
          type: 'fontAwesome5',
          textColor: Colors.black,
        });
        break;
      }

      case 'Mist': {
        setWeather({
          description: description,
          colors: [Colors.snowLight, Colors.snow],
          icon: 'snowflake',
          type: 'fontAwesome5',
          textColor: Colors.black,
        });
        break;
      }

      case 'Clear': {
        setWeather({
          description: description,
          colors: [Colors.sunLight, Colors.sun], // change to blue
          icon: 'sunny',
          type: 'iconics',
          textColor: Colors.gray10,
        });
        break;
      }

      default: {
        setWeather({
          description: description,
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
      console.dev(response);
      if (response) {
        setWeatherResponse(response);
        defineWeather(response?.weather?.[0]?.main);
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      console.dev('Erro ao consultar a API');
    }
  }, [hasCurrentPosition]);

  return {
    handleResponse,
  };
}

export default useWeather;
