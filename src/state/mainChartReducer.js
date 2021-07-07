import { SET_LOADING, GET_WEATHER_DATA } from './actionTypes';

const initialState = {
  isLoading: false,
  error: '',
  weatherData: {
    timeZone: '',
    hourlyData: [],
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
      return {
        ...state,
        weatherData: { timeZone: payload.timezone },
      };
    default:
      return state;
  }
};

export default mainChartReducer;
