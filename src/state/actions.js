import axios from 'axios';
import { SET_LOADING, GET_WEATHER_DATA } from './actionTypes';
const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

const OPEN_WEATHER_ENDPOINT = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=51.5074&lon=0.1272&dt=1625554899&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

export const setLoading = (boolean) => ({
  type: SET_LOADING,
  payload: boolean,
});

export const getWeatherData = () => async (dispatch) => {
  dispatch(setLoading(true));

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
