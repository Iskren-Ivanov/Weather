import React, { useEffect, useState } from 'react';
import getWeatherNextSixDays from '../../weatherFunk/getWeаtherNextSixDays';
import getAllDayForecast from '../../weatherFunk/getAllDayForecast';
import ForecastCol from './ForecastCol';

const ForecastForTheAllDay = (props) => {
    // debugger;
    const date = props.match.params.date;
    const city = props.match.params.id;
    const [data, setData] = useState([]);
    useEffect(async () => {
        // debugger;
        setData(getAllDayForecast(await getWeatherNextSixDays(city), date));
    }, [city]);

    return (
        <div>
            <h1>Forecast In {city} For {date.replaceAll('-', '/')} </h1>
            <div className="weatherContainer">
                {data?.map(el => (
                    <ForecastCol className="forecastForAllDaysCol"
                        forecast={el} />
                ))}
            </div>
        </div>
    );
};

export default ForecastForTheAllDay;
