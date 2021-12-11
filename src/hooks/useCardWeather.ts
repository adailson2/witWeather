import {Colors} from '../theme/Colors';
import {IWeather} from '../types/interfaces';

export const useCardWeather = (
  setWeather: (weather: IWeather) => void,
  index: number,
  setDay: (day: string) => void,
) => {
  const defineDay = () => {
    const today = new Date().getDate();
    const sumDate = today + index;
    setDay(sumDate.toString());
  };

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

  return {
    defineDay,
    defineWeather,
  };
};
