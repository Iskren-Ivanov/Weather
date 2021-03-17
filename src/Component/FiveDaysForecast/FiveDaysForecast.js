import React, { useEffect, useState } from 'react'
import getWeatherNextSixDays from '../../weatherFunk/getWeаtherNextSixDays';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import CurrentForecastCol from './CurrentForecastCol';

import './FiveDaysForecast.css';

const FiveDaysForecast = ({ location }) => {
    const [data, setData] = useState({});
    // debugger;
    // const [currentWeatherIcon, setCurrentWeatherIcon] = useState('');
    useEffect(async () => {
        getWeatherNextSixDays(location.city)
            .then(async response => {
                setData(response);

                // setCurrentWeatherIcon(getWeatherIcon(response.mainDiscription));
            });
    }, [location.city]);
    console.log(data);
    return (
        <div className="FiveDaysForecastContainer">
            <div className='weathersColFiveDaysForecast'>
                <div className='oneCol'>
                    <CurrentForecastCol data={data} />
                </div>
                <div className='twoCol'>
                    <CurrentForecastCol data={data} />
                </div>
                <div className='threeCol'>
                    <CurrentForecastCol data={data} />
                </div>
                <div className='fourCol'>
                    <CurrentForecastCol data={data} />
                </div>
                <div className='fiveCol'>
                    <CurrentForecastCol data={data} />
                </div>
            </div>
        </div >
    );
};

export default FiveDaysForecast