import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../../../theme/Colors';
import styles from './styles';

interface IProps {
  weather: string; // sun, rain, windy, snow
}

export const CardWeather = ({weather}: IProps) => {
  const defineWeather = (weatherParam: string) => {
    switch (weatherParam) {
      case 'sun':
        return [Colors.sunLight, Colors.sun];
      case 'rain':
        return [Colors.rainLight, Colors.rain];
      case 'windy':
        return [Colors.windyLight, Colors.windy];
      default:
        return [Colors.snowLight, Colors.snow];
    }
  };

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        useAngle={true}
        angle={-200}
        colors={defineWeather(weather)}
        style={{
          height: 200,
        }}
      />
    </View>
  );
};
