import React from 'react';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import Clock from '../FeatherIcons/Clock';

const ForecastCol = ({ forecast }) => {
    const newDate = new Date(forecast.dayTime);
    const time = newDate.toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric'
    });

    return (
        <table className='forecast-for-all-days-col'>
            <tr className='date-time'>
                <td>{time} <Clock /></td>
            </tr>
            <tr className='temp'>
                <td> {forecast.temp} °C</td>
            </tr>
            <tr className='description'>
                <td>{forecast.weatherDescription} {getWeatherIcon(forecast.weatherMainDescription)}</td>
            </tr>
            <tr className='feels-like'>
                <td>Feels Like: {forecast.feelsLike}°C</td>
            </tr>
            <tr className='wind'>
                <td>Wind: {forecast.windSpeed} km/h</td>
            </tr>
        </table>
    );
};

export default ForecastCol;
