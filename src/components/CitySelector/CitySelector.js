import './CitySelector.scss';
import { cities } from '../../data/cities';
import { getWeatherData } from '../../state/actions';
import { useDispatch, useSelector } from 'react-redux';

const CitySelector = () => {
  const dispatch = useDispatch();

  const cityLat = useSelector(
    (state) => state.mainChart.weatherData.coordinates.lat
  );

  return (
    <div className='city__selector__container'>
      {cities.map((city) => (
        <div
          className='city__selector__image__wrapper'
          key={city.id}
          onClick={() => dispatch(getWeatherData(city.location))}
        >
          <img
            className={cityLat === city.location.lat ? 'active' : ''}
            src={city.img}
            alt={city.cityName}
          />
          <p className={cityLat === city.location.lat ? 'active' : ''}>
            {city.cityName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CitySelector;
