import { useDispatch } from 'react-redux';
import { getWeatherData } from '../../state/actions';

const UserLocationSelector = () => {
  const dispatch = useDispatch();
  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(
          getWeatherData({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        )
      );
    } else {
      alert('Permission is required for this action');
    }
  };

  return (
    <div>
      <button style={{ padding: '2rem' }} onClick={handleUserLocation}>
        My location's temperatures
      </button>
    </div>
  );
};

export default UserLocationSelector;
