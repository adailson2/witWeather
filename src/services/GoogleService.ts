import axios from 'axios';
import {Region} from '../types/interfaces';
const baseURL = 'https://maps.googleapis.com/maps/api/';
import {GOOGLE_API_KEY} from '@env';

export const getCityName = async (region: Region) => {
  try {
    const query = `geocode/json?latlng=${region.latitude},${region.longitude}&key=${GOOGLE_API_KEY}`;

    const address = baseURL + query;

    const {data} = await axios.get(address);

    if (data.status === 'OK') {
      const treatName = data.plus_code.compound_code.replace(
        /(\w+\+)\w+\s/,
        '',
      );

      return treatName;
    }
  } catch (error) {
    __DEV__ && console.log('ERROR NO REVERSE GEOCODE', {error});
  }
};

export const getCoordinatesByCity = async (city: string) => {
  try {
    const query = `geocode/json?address=${city}&key=${GOOGLE_API_KEY}`;

    const address = baseURL + query;

    const {data} = await axios.get(address);
    let coordinates;
    if (data.status !== 'ZERO_RESULTS') {
      const verifyAddress = data.results.filter((item: any) => {
        return item;
      });
      coordinates = verifyAddress[0]?.geometry?.location;
    }
    return coordinates;
  } catch (error) {
    __DEV__ && console.log('ERROR NO REVERSE GEOCODE', {error});
  }
};
