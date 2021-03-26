import React, { useEffect, useState } from 'react'
import CurrentForecastCol from './CurrentForecastCol';
import getNextDaysAvarageForecast from '../../weatherFunk/getNextDaysAvarageForecast';

const FiveDaysForecast = (props) => {
    const city = props.match.params.id
    const [forecast, setForecast] = useState([]);

    useEffect(async () => {
        // debugger;
        await getNextDaysAvarageForecast(city).then(res => {
            setForecast(res);
        });
    }, [city]);

    return (
        <div className='weatherContainer'>
            {forecast?.map(data => {
                // debugger;
                return (<div className='col'>
                    <CurrentForecastCol
                        data={data}
                        city={city} />
                </div>)
            })}
        </div>
    );
};

export default FiveDaysForecast