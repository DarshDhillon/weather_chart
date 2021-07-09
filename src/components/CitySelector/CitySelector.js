import './CitySelector.scss';
import { cities } from '../../data/cities';
import { getWeatherData } from '../../state/actions';
import { useDispatch } from 'react-redux';

const CitySelector = () => {
  const dispatch = useDispatch();

  return (
    <div className='city__selector__container'>
      {cities.map((city) => (
        <div
          className='city__selector__image__wrapper'
          key={city.id}
          onClick={() => dispatch(getWeatherData(city.location))}
        >
          <img src={city.img} alt={city.cityName} />
          <p>{city.cityName}</p>
        </div>
      ))}
    </div>
  );
};

export default CitySelector;
