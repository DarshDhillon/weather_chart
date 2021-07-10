import { SET_LOADING, GET_WEATHER_DATA } from './actionTypes';

const initialState = {
  isLoading: false,
  error: false,
  weatherData: {
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
          hourlyTemperatures,
          timeZone: payload.timezone,
          coordinates: { lat: payload.lat, lon: payload.lon },
        },
      };

    default:
      return state;
  }
};

export default mainChartReducer;
