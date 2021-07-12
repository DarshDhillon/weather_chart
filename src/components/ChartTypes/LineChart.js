import { Line, defaults } from 'react-chartjs-2';

const LineChart = ({ hourlyTimes, hourlyTemperatures }) => {
  defaults.color = '#000';

  const data = {
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
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
