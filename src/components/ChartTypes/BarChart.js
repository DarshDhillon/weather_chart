import { Bar, defaults } from 'react-chartjs-2';

const BarChart = ({ hourlyTimes, hourlyTemperatures, chartType }) => {
  defaults.color = '#000';

  const data = {
    labels: hourlyTimes,
    datasets: [
      {
        label: 'Temperature',
        data: hourlyTemperatures,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
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

  const setOptionsByChartType = (chartType) => {
    const optionsVertical = {
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

    const optionsHorizontal = {
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Chart.js Horizontal Bar Chart',
        },
      },
    };

    if (chartType === 'vertical') return optionsVertical;

    if (chartType === 'horizontal') return optionsHorizontal;
  };

  return (
    <>
      <Bar data={data} options={setOptionsByChartType(chartType)} />
    </>
  );
};

export default BarChart;
