import React, { useEffect, useState } from 'react'
import ForecastCol from './ForecastCol';
import getNextDaysAvarageForecast from '../../weatherFunk/getNextDaysAvarageForecast';

const NextDaysForecast = (props) => {
    const city = props.match.params.id
    const [forecast, setForecast] = useState([]);

    useEffect(async () => {
        // debugger;
        await getNextDaysAvarageForecast(city).then(res => {
            setForecast(res);
        });
    }, [city]);

    return (
        <div>
            <h1>The Weather In The Next Days In {city}</h1>
            <div className='weatherContainer'>
                {forecast?.map(data =>
                    <ForecastCol
                        data={data}
                        city={city} />)}
            </div>
        </div>
    );
};

export default NextDaysForecast