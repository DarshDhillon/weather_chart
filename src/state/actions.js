import axios from 'axios';
import { SET_LOADING, GET_WEATHER_DATA, SET_COORDINATES } from './actionTypes';

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

export const setLoading = (boolean) => ({
  type: SET_LOADING,
  payload: boolean,
});

export const setCoordinates = (coords) => ({
  type: SET_COORDINATES,
  payload: coords,
});

export const getWeatherData = (coordinates) => async (dispatch) => {
  dispatch(setLoading(true));
  console.log(coordinates);
  const OPEN_WEATHER_ENDPOINT = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${coordinates.lat}&lon=${coordinates.lon}&dt=1625554899&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

  try {
    const { data } = await axios.get(OPEN_WEATHER_ENDPOINT);
    // console.log(data);
    dispatch({
      type: GET_WEATHER_DATA,
      payload: data,
    });
    dispatch(setLoading(false));
  } catch (error) {
    console.error(error);
    dispatch(setLoading(false));
  }
};
