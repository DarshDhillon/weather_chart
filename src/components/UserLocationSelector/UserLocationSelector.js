import './UserLocationSelector.scss';
import { useDispatch } from 'react-redux';
import { getUserWeatherData } from '../../state/actions';
import { HiOutlineLocationMarker } from 'react-icons/hi';

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
        <HiOutlineLocationMarker />
      </div>
    </div>
  );
};

export default UserLocationSelector;
