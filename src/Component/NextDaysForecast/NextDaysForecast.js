import React, { useEffect, useState } from 'react'
import ForecastCol from './ForecastCol';
import getNextDaysAvarageForecast from '../../weatherFunk/getNextDaysAvarageForecast';

const NextDaysForecast = (props) => {
    const city = props.match.params.id
    const [forecast, setForecast] = useState([]);

    useEffect(async () => {
        await getNextDaysAvarageForecast(city).then(res => {
            setForecast(res);
        });
    }, [city]);

    return (
        <main className="next-days-forecast">
            <h1>The Weather In The Next Days In {city}</h1>
            {forecast?.map(data =>
                <section>
                    <article className="main-article next-days">
                        <ForecastCol
                            data={data}
                            city={city} />
                    </article>
                </section>
            )}
        </main>
    );
};

export default NextDaysForecast