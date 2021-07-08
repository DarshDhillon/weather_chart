import './MainChart.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../state/actions';
import { Bar } from 'react-chartjs-2';
import LoadingSpinner from '../../assets/weather_spinner.gif';
import { hourlyTimes } from '../../data/hourlyTimes';
import CitySelector from '../CitySelector/CitySelector';

const MainChart = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.mainChart.isLoading);
  const timeZone = useSelector((state) => state.mainChart.weatherData.timeZone);
  const hourlyTemperatures = useSelector(
    (state) => state.mainChart.weatherData.hourlyTemperatures
  );

  const coordinates = useSelector(
    (state) => state.mainChart.weatherData.coordinates
  );

  // console.log(coordinates);

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
    dispatch(getWeatherData(coordinates));
  }, []);

  return (
    <div className='container'>
      {isLoading ? (
        <div className='loading__spinner__wrapper'>
          <img
            className='loading__spinner'
            src={LoadingSpinner}
            alt='loading_spinner'
          />
        </div>
      ) : (
        <div className='main__chart__container'>
          <h1 className='main__chart__title'>Time zone: {timeZone}</h1>
          <CitySelector />
          <div className='main__chart__wrapper'>
            <Bar data={data} options={options} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainChart;
