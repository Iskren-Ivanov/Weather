import React from 'react';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import BtnShowDetails from '../../UI/BtnShowDetails/BtnShowDetails';
import Clock from '../FeatherIcons/Clock';
import './ForecastCol.css';

const CurrentForecastCol = ({ city, data }) => {
    return (
        <table className='next-days-forecast'>
            <tr className='date-dayname'>
                <th>{data.dayOfWeek}</th>
            </tr>
            <tr className='date-day'>
                <td>{data.date}</td>
            </tr>
            <tr className='description'>
                <td>{data.description.text}{getWeatherIcon(data.description.main)}</td>
            </tr>
            <tr className='temp'>
                <td>Day Temp: {data.temp.day}°C</td>
                <td>Eve Temp: {data.temp.eve}°C</td>
                <td>Max Temp: {data.temp.max}°C</td>
                <td>Min Temp: {data.temp.min}°C</td>
            </tr>
            <tr className='feels-like'>
                <td>Day Feels Like: {data.feelsLike.day}°C</td>
                <td>Night Feels Like: {data.feelsLike.night}°C</td>
                <td>Evening Feels Like: {data.feelsLike.eve}°C</td>
                <td>Morning Feels Like: {data.feelsLike.morn}°C</td>
            </tr>
            <tr className='wind'>
                <td>Wind: {data.windSpeed} km/h</td>
            </tr>
            <tr className='humidity'>
                <td>Humidity: {data.humidity}%</td>
            </tr>
            <tr className='sun'>
                <td>Sunrise: {data.sunrise}<Clock /></td>
                <td>Sunset: {data.sunset}<Clock /></td>
            </tr>
            <tr>
                <td><BtnShowDetails city={city} date={data.date} /></td>
            </tr>
        </table>
    );
};

export default CurrentForecastCol;
