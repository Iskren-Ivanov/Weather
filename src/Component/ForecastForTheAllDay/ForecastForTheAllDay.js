import React, { useEffect, useState } from 'react';
import getWeatherNextSixDays from '../../weatherFunk/getWeаtherNextSixDays';
import getAllDayForecast from '../../weatherFunk/getAllDayForecast';
import ForecastCol from './ForecastCol';

const ForecastForTheAllDay = (props) => {
    const date = props.match.params.date;
    const city = props.match.params.id;
    const [data, setData] = useState([]);
    useEffect(async () => {
        setData(getAllDayForecast(await getWeatherNextSixDays(city), date));
    }, [city]);

    return (
        <main className="main forecast-for-all-day">
            <h1>Forecast In {city} For {date.replaceAll('-', '/')} </h1>
            {data?.map(el => (
                    <article className="main-article all-days">
                        <ForecastCol forecast={el} />
                    </article>
            ))}
        </main>
    );
};

export default ForecastForTheAllDay;
