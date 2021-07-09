import { SET_LOADING, GET_WEATHER_DATA } from './actionTypes';

const initialState = {
  isLoading: false,
  error: false,
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

      payload.hourly.forEach((hour) => {
        hourlyTemperatures.push(hour.temp);
      });

      return {
        ...state,
        weatherData: {
          hourlyTemperatures,
          timeZone: payload.timezone,
        },
      };

    default:
      return state;
  }
};

export default mainChartReducer;
