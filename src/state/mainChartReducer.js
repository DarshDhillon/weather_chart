import {
  SET_LOADING,
  GET_WEATHER_DATA,
  GET_USER_WEATHER_DATA,
} from './actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  weatherData: {
    isUserLocation: false,
    timeZone: '',
    hourlyTemperatures: [],
    coordinates: {
      lat: '',
      lon: '',
    },
  },
};

const mainChartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case GET_WEATHER_DATA:
      const hourlyTemperatures = [];

      payload.hourly.forEach((hour) => {
        hourlyTemperatures.push(hour.temp);
      });

      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          isUserLocation: false,
          hourlyTemperatures,
          timeZone: payload.timezone,
          coordinates: { lat: payload.lat, lon: payload.lon },
        },
      };

    case GET_USER_WEATHER_DATA:
      const temperaturesHourly = [];

      payload.weatherData.hourly.forEach((hour) => {
        temperaturesHourly.push(hour.temp);
      });

      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          isUserLocation: true,
          hourlyTemperatures: temperaturesHourly,
          timeZone: payload.locationData.results[0].formatted_address,
          coordinates: {
            lat: payload.weatherData.lat,
            lon: payload.weatherData.lon,
          },
        },
      };

    default:
      return state;
  }
};

export default mainChartReducer;
