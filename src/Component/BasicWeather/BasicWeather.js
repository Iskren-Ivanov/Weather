import React, { useEffect, useState } from 'react'
import getWeather from '../../weatherFunk/getWeatherNow';
import getNextThreeDaysInfo from '../../weatherFunk/getNextThreeDaysInfo';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import Clock from '../FeatherIcons/Clock';
import BtnShowDetails from '../../UI/BtnShowDetails/BtnShowDetails';

const BasicWeather = ({ city }) => {
    const [data, setData] = useState({});
    const [nextTreeDaysInfo, setNextTreeDaysInfo] = useState([]);
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState('');

    useEffect(() => {
        getWeather(city)
            .then(async response => {
                setData(response);
                setNextTreeDaysInfo(await getNextThreeDaysInfo(response.date, city));
                setCurrentWeatherIcon(getWeatherIcon(response.mainDiscription));
            });
    }, [city]);

    return (
        <table>
            <tr className='location'>
                <td>{data.locationName}</td>
            </tr>
            <tr className='temp'>
                <td> {data.temp}°C</td>
            </tr>
            <tr className='time'>
                <td>Time: {data.time} <Clock /></td>
            </tr>
            <tr className='date'>
                <td>Date: {data.date}</td>
            </tr>
            <tr className='sun'>
                <td>Sunrise: {data.sunrise} <Clock /></td>
            </tr>
            <tr className='sun'>
                <td>Sunset: {data.sunset} <Clock /></td>
            </tr>
            <tr className='description'>
                <td>{data.description} {currentWeatherIcon}</td>
            </tr>
            <tr className='wind'>
                <td>Wind: {data.windSpeed} km/h</td>
            </tr>
            <tr className='next-days'>
                <td>{nextTreeDaysInfo[0]?.dayOfWeek}: {nextTreeDaysInfo[0]?.temp.max}°C {getWeatherIcon(nextTreeDaysInfo[0]?.weatherMain)} </td>
            </tr>
            <tr className='next-days'>
                <td>{nextTreeDaysInfo[1]?.dayOfWeek}: {nextTreeDaysInfo[1]?.temp.max}°C {getWeatherIcon(nextTreeDaysInfo[1]?.weatherMain)}</td>
            </tr>
            <tr className='next-days'>
                <td>{nextTreeDaysInfo[2]?.dayOfWeek}: {nextTreeDaysInfo[2]?.temp.max}°C {getWeatherIcon(nextTreeDaysInfo[2]?.weatherMain)}</td>
            </tr>
            <tr>
                <BtnShowDetails city={city} date={data.date} />
            </tr>
        </table >
    );
};

export default BasicWeather