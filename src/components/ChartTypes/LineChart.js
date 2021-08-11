import { Line, defaults } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const LineChart = ({ hourlyTimes, hourlyTemperatures }) => {
  defaults.color = '#fff';

  const dataLine = {
    labels: hourlyTimes,
    datasets: [
      {
        label: 'Temperature ℃ ',
        data: hourlyTemperatures,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
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

  return (
    <>
      <Line data={dataLine} options={options} />
    </>
  );
};

LineChart.propTypes = {
  hourlyTimes: PropTypes.arrayOf(PropTypes.string),
  hourlyTemperatures: PropTypes.arrayOf(PropTypes.number),
};

export default LineChart;
