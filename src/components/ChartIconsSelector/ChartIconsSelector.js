import './ChartIconsSelector.scss';
import { BiBarChart, BiLineChart } from 'react-icons/bi';
import PropTypes from 'prop-types';

const ChartIconsSelector = ({ setChartType, chartType }) => {
  return (
    <div className='chart__icons__container'>
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
  );
};

ChartIconsSelector.propTypes = {
  setChartType: PropTypes.func,
  chartType: PropTypes.string,
};

export default ChartIconsSelector;
