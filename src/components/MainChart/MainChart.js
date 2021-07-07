import './MainChart.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, getWeatherData } from '../../state/actions';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Grey', 'Blue', 'Yellow', 'Green', 'Purple', 'Woot'],
  datasets: [
    {
      label: '# of Votes',
      data: [14, 11, 4, 8, 1, 6],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        'grey',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        // 'rgba(255, 99, 132, 1)',
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

const MainChart = () => {
  const dispatch = useDispatch();
  const timeZone = useSelector((state) => state.mainChart.weatherData.timeZone);

  useEffect(() => {
    dispatch(getWeatherData());
  }, []);

  return (
    <div className='container'>
      <h1>Your time zone is: {timeZone}</h1>
      <div className='main__chart__wrapper'>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default MainChart;
