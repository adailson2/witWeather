import axios from 'axios';
import {IWeatherResponse, Region} from '../types/interfaces';

const baseURL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '91d8df2f221bbb62cbf8033a5e7c8858';

export const getByGeographicCoordinates = async (
  region: Region,
): Promise<IWeatherResponse> => {
  try {
    const response = await axios.get(
      `${baseURL}/weather?lat=${region.latitude}&lon=${region.longitude}&units=imperial&appid=${API_KEY}`,
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getByName = async (name: string): Promise<IWeatherResponse> => {
  try {
    const response = await axios.get(
      `${baseURL}/weather?q=${name}&units=imperial&appid=${API_KEY}`,
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
