import './MainChart.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../state/actions';
import { Bar, defaults } from 'react-chartjs-2';
import { hourlyTimes } from '../../data/hourlyTimes';
import CitySelector from '../CitySelector/CitySelector';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import UserLocationSelector from '../UserLocationSelector/UserLocationSelector';

const MainChart = () => {
  defaults.color = '#000';
  const defaultLondonLatLon = { lat: 51.5074, lon: 0.1272 };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.mainChart.isLoading);
  const timeZone = useSelector((state) => state.mainChart.weatherData.timeZone);
  const hourlyTemperatures = useSelector(
    (state) => state.mainChart.weatherData.hourlyTemperatures
  );

  const data = {
    labels: hourlyTimes,
    datasets: [
      {
        label: 'Temperature',
        data: hourlyTemperatures,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'grey',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'grey',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
    dispatch(getWeatherData(defaultLondonLatLon));
  }, []);

  return (
    <div className='container'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className='main__chart__container'>
          <CitySelector />
          {/* <UserLocationSelector /> */}
          <div className='main__chart__wrapper'>
            <h1 className='main__chart__title'>Time zone: {timeZone}</h1>
            <Bar data={data} options={options} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainChart;
