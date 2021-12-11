import React from 'react';
import {ScrollView, Text, TouchableHighlight, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {cities} from '../../data/cities';
import {Colors} from '../../theme/Colors';
import styles from './styles';

export const CitiesScreen = ({navigation}: any) => {
  const handleNavigate = (currentPosition: boolean, cityName?: string) => {
    navigation.navigate('WeatherDaily', {
      currentPosition,
      cityName,
    });
  };

  return (
    <LinearGradient colors={[Colors.bkgLight, Colors.bkg]} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Select city</Text>
        </View>
        <ScrollView style={styles.container}>
          <TouchableHighlight
            activeOpacity={0.2}
            underlayColor={Colors.blue40}
            onPress={() => handleNavigate(true)}
            style={styles.row}>
            <Text style={styles.textRow}>Current position</Text>
          </TouchableHighlight>
          {cities.map(city => (
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor={Colors.blue40}
              onPress={() => handleNavigate(false, city.name)}
              style={styles.row}>
              <Text style={styles.textRow}>{city.name}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
