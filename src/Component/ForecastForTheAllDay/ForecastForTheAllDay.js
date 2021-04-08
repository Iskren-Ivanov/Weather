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
        <main className="forecast-for-all-day">
            <h1>Forecast In {city} For {date.replaceAll('-', '/')} </h1>
            {data?.map(el => (
                <section>
                    <article className="main-article">
                        <ul className="main-article__lists">
                            <li className="main-article__list">
                                <ForecastCol forecast={el} />
                            </li>
                        </ul>
                    </article>
                </section>
            ))}
        </main>
    );
};

export default ForecastForTheAllDay;
