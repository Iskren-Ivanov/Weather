import React from 'react';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import BtnShowDetails from '../../UI/BtnShowDetails/BtnShowDetails';
import Clock from '../FeatherIcons/Clock';

const CurrentForecastCol = ({ city, data }) => {
    return (
        <table className='next-days-forecast'>
            <tr className='date-dayname bolder'>
                <th className='bolder'>{data.dayOfWeek}</th>
            </tr>
            <tr className='date-day'>
                <td>{data.date}</td>
            </tr>
            <tr className='description'>
                <td>{data.description.text}{getWeatherIcon(data.description.main)}</td>
            </tr>
            <tr >
                <td className='underline bolder'>Temp:</td>
            </tr>
            <tr className='temp-day'>
                <td>Day: {data.temp.day}°C</td>
            </tr>
            <tr className='temp-eve'>
                <td>Eve: {data.temp.eve}°C</td>
            </tr>
            <tr className='temp-max'>
                <td>Max: {data.temp.max}°C</td>
            </tr>
            <tr className='temp-min'>
                <td>Min: {data.temp.min}°C</td>
            </tr>
            <tr>
                <td className='underline bolder'>Feel Like:</td>
            </tr>
            <tr className='feels-like-day'>
                <td>Day: {data.feelsLike.day}°C</td>
            </tr>
            <tr className='feels-like-night'>
                <td>Night: {data.feelsLike.night}°C</td>
            </tr>
            <tr className='feels-like-eve'>
                <td>Evening: {data.feelsLike.eve}°C</td>
            </tr>
            <tr className='feels-like-morn'>
                <td>Morning: {data.feelsLike.morn}°C</td>
            </tr>
            <tr className='wind'>
                <td className='underline'>Wind: {data.windSpeed} km/h</td>
            </tr>
            <tr className='humidity'>
                <td className='underline'>Humidity: {data.humidity}%</td>
            </tr>
            <tr className='sunrise'>
                <td className='underline'>Sunrise: {data.sunrise}<Clock /></td>
            </tr>
            <tr className='sunset'>
                <td >Sunset: {data.sunset}<Clock /></td>
            </tr>
            <tr>
                <BtnShowDetails
                    city={city}
                    date={data.date}
                    customClass='btn-next-days bolder' />
            </tr>
        </table>
    );
};

export default CurrentForecastCol;
