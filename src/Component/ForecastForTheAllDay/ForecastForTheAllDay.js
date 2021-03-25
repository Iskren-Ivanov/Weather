import React, { useEffect, useState } from 'react';
import getWeatherNextSixDays from '../../weatherFunk/getWeаtherNextSixDays';
import getAllDayForecast from '../../weatherFunk/getAllDayForecast';
import ForecastCol from './ForecastCol';

const key = 'e0906f60e7b624e1904f340f026ee8dd';

const ForecastForTheAllDay = ({ location: { state } }) => {
    const [data, setData] = useState([]);
    const { date } = state
    useEffect(async () => {
        setData(getAllDayForecast(await getWeatherNextSixDays(state.city), date));
    }, [state.city]);

    return (
        <div className="weatherContainer">
            {data.map(el => (
                <div className='col'>
                    <ForecastCol className="forecastForAllDaysCol"
                        forecast={el} />
                </div>
            ))}
        </div>
    );
};


export default ForecastForTheAllDay;
