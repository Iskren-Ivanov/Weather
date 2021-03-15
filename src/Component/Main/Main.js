import React, { useEffect, useState } from 'react'
import getWeather from '../../weatherFunk/getWeatherNow';
import takeNextThreeDaysInfo from '../../weatherFunk/takeNextThreeDaysInfo';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import './Main.css';

const Main = ({ city }) => {
    const [data, setData] = useState({});
    const [nextTreeDaysInfo, setNextTreeDaysInfo] = useState([]);

    const [currentWeatherIcon, setCurrentWeatherIcon] = useState('');

    useEffect(() => {
        getWeather(city)
            .then(async response => {
                setData(response);
                setNextTreeDaysInfo(await takeNextThreeDaysInfo(response.dateTime, city));
                takeNextThreeDaysInfo(response.dateTime, city);

                setCurrentWeatherIcon(getWeatherIcon(response.mainDiscription));
            });
    }, []);

    return (
        <div className="mainContainer">
            <h2 className="location"> {data.locationName}</h2>
            <h1 className="weather-temp"> {data.temp}°C</h1>
            <span className="date-day"> {data.dateTime?.split(',')[1]} </span>
            <h3 className="date-dayname"> {data.dateTime?.split(',')[0]}</h3>
            <div className="sunrise">
                <span className="title">Sunrise: </span>
                <span className="value">{data.sunrise}</span>
            </div>
            <div className="sunset">
                <span className="title">Sunset: </span>
                <span className="value">{data.sunset}</span>
            </div>
            <div className="description">
                <span className="title">{data.description} </span>
                <span className="value"> {currentWeatherIcon} </span>

            </div>
            <div className="wind">
                <span className="title">Wind: </span>
                <span className="value"> {data.windSpeed} km / h</span>
            </div>
            <div className="nexDays">
                <li>
                    <i className="day-icon">{getWeatherIcon(nextTreeDaysInfo[0]?.weatherMain)}</i>
                    <span className="day-name">{nextTreeDaysInfo[0]?.dayOfWeek} </span>
                    <span className="day-temp">{nextTreeDaysInfo[0]?.temp}°C </span>
                </li>
                <li>
                    <i className="day-icon">{getWeatherIcon(nextTreeDaysInfo[1]?.weatherMain)}</i>
                    <span className="day-name">{nextTreeDaysInfo[1]?.dayOfWeek} </span>
                    <span className="day-temp">{nextTreeDaysInfo[1]?.temp}°C </span>
                </li>
                <li>
                    <i className="day-icon">{getWeatherIcon(nextTreeDaysInfo[2]?.weatherMain)}</i>
                    <span className="day-name">{nextTreeDaysInfo[2]?.dayOfWeek} </span>
                    <span className="day-temp">{nextTreeDaysInfo[2]?.temp}°C</span>
                </li>
            </div>
        </div >
    );
};

export default Main