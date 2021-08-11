import { BsCalendar } from 'react-icons/bs';
import './UnixTimeToDateConverter.scss';

const TwentyFourHoursInSeconds = 90000;

const unixTimeInSeconds = Math.floor(
  new Date().getTime() / 1000 - TwentyFourHoursInSeconds
);

const conversionToMilliseconds = unixTimeInSeconds * 1000;

const prevTwentyFourHoursUnixToDate = new Date(
  conversionToMilliseconds
).toLocaleDateString('en-UK');

const UnixTimeToDateConverter = () => {
  return (
    <div className='time__date__wrapper'>
      <i className='calendar__icon'>
        <BsCalendar />
      </i>
      <p className='time__stamp'>{prevTwentyFourHoursUnixToDate}</p>;
      <i className='calendar__icon'>
        <BsCalendar />
      </i>
    </div>
  );
};

export default UnixTimeToDateConverter;
