import { WeatherState } from './types';

const isProd = process.env.NODE_ENV === 'production';

export const API_HOST = isProd ? 'https://shrouded-falls-33121.herokuapp.com' : 'localhost';
export const API_PORT = isProd ? '' : 5000;

export const API_LOCATION = '/api/location';
export const API_WEATHER = '/api/weather';

export const getWeatherIconURL = (state: WeatherState) => 
  `https://www.metaweather.com/static/img/weather/${state}.svg`;