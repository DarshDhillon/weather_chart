import axios from 'axios';
import {
  SET_LOADING,
  GET_WEATHER_DATA,
  GET_USER_WEATHER_DATA,
} from './actionTypes';

const unixTimeInSeconds = Math.floor(new Date().getTime() / 1000 - 90000);
const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

const GOOGLE_MAPS_GEOCODING_API_KEY =
  process.env.REACT_APP_GOOGLE_MAPS_GEOCODING_API_KEY;

export const setLoading = (boolean) => ({
  type: SET_LOADING,
  payload: boolean,
});

export const getWeatherData =
  ({ lat, lon }) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const OPEN_WEATHER_ENDPOINT = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${unixTimeInSeconds}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

    try {
      const { data } = await axios.get(OPEN_WEATHER_ENDPOINT);
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

export const getUserWeatherData =
  ({ lat, lon }) =>
  async (dispatch) => {
    dispatch(setLoading(true));

    const OPEN_WEATHER_ENDPOINT = `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${unixTimeInSeconds}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;
    const GOOGLE_MAPS_GEOCODING_ENDPOINT = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GOOGLE_MAPS_GEOCODING_API_KEY}`;

    const requestOne = axios.get(OPEN_WEATHER_ENDPOINT);
    const requestTwo = axios.get(GOOGLE_MAPS_GEOCODING_ENDPOINT);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];

          dispatch({
            type: GET_USER_WEATHER_DATA,
            payload: {
              weatherData: responseOne.data,
              locationData: responseTwo.data,
            },
          });

          dispatch(setLoading(false));
        })
      )
      .catch((errors) => console.error(errors));
  };
