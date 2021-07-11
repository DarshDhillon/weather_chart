import './MainChart.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../state/actions';
import { hourlyTimes } from '../../data/hourlyTimes';
import CitySelector from '../CitySelector/CitySelector';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import UserLocationSelector from '../UserLocationSelector/UserLocationSelector';
import BarChart from '../ChartTypes/BarChart';
import LineChart from '../ChartTypes/LineChart';
import ChartIconsSelector from '../ChartIconsSelector/ChartIconsSelector';

const MainChart = () => {
  const [chartType, setChartType] = useState('vertical');

  const defaultLondonLatLon = { lat: 51.5074, lon: 0.1272 };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.mainChart.isLoading);
  const timeZone = useSelector((state) => state.mainChart.weatherData.timeZone);
  const hourlyTemperatures = useSelector(
    (state) => state.mainChart.weatherData.hourlyTemperatures
  );

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
          <div className='main__chart__wrapper'>
            <h1 className='main__chart__title'>{timeZone}</h1>
            <div className='main__icons__wrapper'>
              <UserLocationSelector />
              <ChartIconsSelector
                setChartType={setChartType}
                chartType={chartType}
              />
            </div>
            {chartType === 'line' ? (
              <LineChart
                hourlyTimes={hourlyTimes}
                hourlyTemperatures={hourlyTemperatures}
              />
            ) : (
              <BarChart
                chartType={chartType}
                hourlyTimes={hourlyTimes}
                hourlyTemperatures={hourlyTemperatures}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainChart;
