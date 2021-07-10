import './ChartIconsSelector.scss';

import { BiBarChart, BiLineChart } from 'react-icons/bi';

const ChartIconsSelector = ({ setChartType, chartType }) => {
  return (
    <div className='chart__icons__container'>
      <div className='chart__icons__wrapper'>
        <div
          onClick={() => setChartType('vertical')}
          className={`chart__icon ${chartType === 'vertical' ? 'active' : ''}`}
        >
          <BiBarChart />
        </div>
        <div
          onClick={() => setChartType('line')}
          className={`chart__icon ${chartType === 'line' ? 'active' : ''}`}
        >
          <BiLineChart />
        </div>
        <div
          onClick={() => setChartType('horizontal')}
          className={`chart__icon horizontal ${
            chartType === 'horizontal' ? 'active' : ''
          }`}
        >
          <BiBarChart />
        </div>
      </div>
    </div>
  );
};

export default ChartIconsSelector;