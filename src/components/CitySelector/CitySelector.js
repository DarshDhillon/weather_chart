import './CitySelector.scss';
import { cities } from '../../data/cities';
import { setCoordinates } from '../../state/actions';
import { useDispatch } from 'react-redux';

const CitySelector = () => {
  const dispatch = useDispatch();

  const handleCitySelector = (location) => {
    dispatch(setCoordinates({ lat: location.lat, lon: location.lon }));
  };

  return (
    <div className='city__selector__container'>
      {cities.map((city) => (
        <img
          onClick={() => handleCitySelector(city.location)}
          key={city.id}
          src={city.img}
          alt={city.cityName}
        />
      ))}
    </div>
  );
};

export default CitySelector;
