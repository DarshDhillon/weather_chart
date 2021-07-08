import { SET_LOADING, GET_WEATHER_DATA, SET_COORDINATES } from './actionTypes';

const initialState = {
  isLoading: false,
  error: '',
  weatherData: {
    timeZone: '',
    hourlyTemperatures: [],
    coordinates: {
      lat: 51.5074,
      lon: 0.1272,
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

      payload.hourly.forEach((element) => {
        hourlyTemperatures.push(element.temp);
      });

      return {
        ...state,
        weatherData: {
          hourlyTemperatures,
          timeZone: payload.timezone,
        },
      };

    case SET_COORDINATES:
      return {
        ...state,
        weatherData: {
          ...state.weatherData,
          coordinates: { lat: payload.lat, lon: payload.lon },
        },
      };

    default:
      return state;
  }
};

export default mainChartReducer;
