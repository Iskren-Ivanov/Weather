import React, { useEffect, useState } from 'react'
import getWeatherNextSixDays from '../../weatherFunk/getWeаtherNextSixDays';
import CurrentForecastCol from './CurrentForecastCol';
import dividedIntoFiveDaysAverageForecast from '../../weatherFunk/dividedIntoFiveDaysAverageForecast';

const FiveDaysForecast = ({ location: { city } }) => {
    //тук при намиране на пътя без да си търсил град няма стойност city

    const [forecast, setForecast] = useState({});
    const [forecastT, setForecastT] = useState({});

    useEffect(async () => {
        getWeatherNextSixDays(city)
            .then(async response => {

                setForecast(dividedIntoFiveDaysAverageForecast(response));

                setForecastT(response);
            });
    }, [city]);

    console.log(forecastT)
    return (
        <div className='weatherContainer'>
            {Object.keys(forecast).map(key => {
                // debugger;
                return (<div className='col'>
                    <CurrentForecastCol
                        city={forecast[key]?.city}
                        data={forecast[key]?.data} />
                </div>)
            })}
        </div>
    );
};

export default FiveDaysForecast