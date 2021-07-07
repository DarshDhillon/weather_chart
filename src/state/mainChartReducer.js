import { SET_LOADING, GET_WEATHER_DATA } from './actionTypes';

const initialState = {
  isLoading: false,
  error: '',
  weatherData: {
    timeZone: '',
    hourlyTemperatures: [],
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
          hourlyTemperatures: hourlyTemperatures,
          timeZone: payload.timezone,
        },
      };
    default:
      return state;
  }
};

export default mainChartReducer;
