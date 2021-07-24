import './UserLocationSelector.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWeatherData } from '../../state/actions';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const UserLocationSelector = () => {
  const dispatch = useDispatch();

  const isUserLocation = useSelector(
    (state) => state.mainChart.weatherData.isUserLocation
  );

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          getUserWeatherData({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        );
      });
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
      <div
        className={`map__location__icon__wrapper ${
          isUserLocation && 'active'
        } `}
      >
        <HiOutlineLocationMarker />
      </div>
    </div>
  );
};

export default UserLocationSelector;
