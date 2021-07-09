import './LoadingSpinner.scss';
import Spinner from '../../assets/weather_spinner.gif';

const LoadingSpinner = () => {
  return (
    <div className='loading__spinner__wrapper'>
      <img className='loading__spinner' src={Spinner} alt='loading_spinner' />
    </div>
  );
};

export default LoadingSpinner;
