import axios from 'axios';
import {
  IWeatherResponse,
  IWeatherResponseOneCall,
  Region,
} from '../types/interfaces';

const baseURL = 'https://api.openweathermap.org/data/2.5/';
import {OW_API_KEY} from '@env';

export const getByGeographicCoordinates = async (
  region: Region,
): Promise<IWeatherResponse> => {
  try {
    const response = await axios.get(
      `${baseURL}/weather?lat=${region.latitude}&lon=${region.longitude}&units=imperial&appid=${OW_API_KEY}`,
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getCurrentAndForecastGeographicCoordinates = async (
  region: Region,
): Promise<IWeatherResponseOneCall> => {
  try {
    const response = await axios.get(
      `${baseURL}/onecall?lat=${region.latitude}&lon=${region.longitude}&units=imperial&appid=${OW_API_KEY}`,
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getCurrentAndForecastGeographicByName = async (
  name: string,
): Promise<IWeatherResponse> => {
  try {
    const response = await axios.get(
      `${baseURL}/onecall?q=${name}&units=imperial&appid=${OW_API_KEY}`,
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export const getByName = async (name: string): Promise<IWeatherResponse> => {
  try {
    const response = await axios.get(
      `${baseURL}/weather?q=${name}&units=imperial&appid=${OW_API_KEY}`,
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
