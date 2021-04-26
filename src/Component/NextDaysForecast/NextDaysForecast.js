import React, { useEffect, useState } from 'react'
import ForecastCol from './ForecastCol';
import getNextDaysAvarageForecast from '../../weatherFunk/getNextDaysAvarageForecast';
import './NextDaysForecast.css';

const NextDaysForecast = (props) => {
    const city = props.match.params.id
    const [forecast, setForecast] = useState([]);

    useEffect(async () => {
        await getNextDaysAvarageForecast(city).then(res => {
            setForecast(res);
        });
    }, [city]);

    return (
        <main className="main next-days-main">
            <h1>The Weather In The Next Days In {city}</h1>
            <div className="container">
                {forecast?.map(data =>
                    <article className="next-days-article">
                        <ForecastCol
                            data={data}
                            city={city} />
                    </article>
                )}
            </div>
        </main>
    );
};

export default NextDaysForecast