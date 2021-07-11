import './UserLocationSelector.scss';
import { useDispatch } from 'react-redux';
import { getUserWeatherData } from '../../state/actions';
import { GrMapLocation } from 'react-icons/gr';

const UserLocationSelector = () => {
  const dispatch = useDispatch();
  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(
          getUserWeatherData({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        )
      );
    } else {
      alert('Permission required for this action');
    }
  };

  return (
    <div
      data-tooltip='Show temperatures for my location'
      onClick={handleUserLocation}
      className='user__location__container'
    >
      <div className='map__location__icon__wrapper'>
        <GrMapLocation className='map__icon' />
      </div>
    </div>
  );
};

export default UserLocationSelector;
