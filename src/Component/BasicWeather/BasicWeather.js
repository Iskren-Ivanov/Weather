import React, { useEffect, useState } from 'react'
import getWeather from '../../weatherFunk/getWeatherNow';
import takeNextThreeDaysInfo from '../../weatherFunk/takeNextThreeDaysInfo';
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
                // debugger;
                setNextTreeDaysInfo(await takeNextThreeDaysInfo(response.date, city));
                // takeNextThreeDaysInfo(response.date, response.time, city);
                setCurrentWeatherIcon(getWeatherIcon(response.mainDiscription));
            });
    }, [city]);

    return (
        <div className="basicWeatherContainer">
            <h2 className="location"> {data.locationName}</h2>
            <h1 className="weatherTemp"> {data.temp}°C</h1>
            <div className="time"> Time: {data.time} <Clock /></div>
            <h3 className="date"> Date: {data.date}</h3>
            <div className="sunrise">
                <span className="title">Sunrise: </span>
                <span className="value">{data.sunrise} <Clock /></span>
            </div>
            <div className="sunset">
                <span className="title">Sunset: </span>
                <span className="value">{data.sunset} <Clock /></span>
            </div>
            <div className="weatherMain">
                <span className="title">{data.description} </span>
                <span className="value"> {currentWeatherIcon} </span>
            </div>
            <div className="wind">
                <span className="title">Wind: </span>
                <span className="value"> {data.windSpeed} km / h</span>
            </div>
            <div className="nextDays">
                <span className="title">Next Days: </span>
                <li>
                    <span className="title">{nextTreeDaysInfo[0]?.dayOfWeek} </span>
                    <i className="icon">{getWeatherIcon(nextTreeDaysInfo[0]?.weatherMain)}</i>
                    <span className="value">{nextTreeDaysInfo[0]?.temp}°C </span>
                </li>
                <li>
                    <span className="title">{nextTreeDaysInfo[1]?.dayOfWeek} </span>
                    <i className="icon">{getWeatherIcon(nextTreeDaysInfo[1]?.weatherMain)}</i>
                    <span className="value">{nextTreeDaysInfo[1]?.temp}°C </span>
                </li>
                <li>
                    <span className="title">{nextTreeDaysInfo[2]?.dayOfWeek} </span>
                    <i className="icon">{getWeatherIcon(nextTreeDaysInfo[2]?.weatherMain)}</i>
                    <span className="value">{nextTreeDaysInfo[2]?.temp}°C</span>
                </li>
            </div>
            <BtnShowDetails city={city} date={data.date} />
        </div >
    );
};

export default BasicWeather