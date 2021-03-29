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
        <table className="nextDaysForecast">
            <tr className="location">
                <th>{data.locationName}</th>
            </tr>
            <tr className="temp">
                <td> {data.temp}°C</td>
            </tr>
            <tr className="time">
                <td>Time: {data.time} <Clock /></td>
            </tr>
            <tr className="date">
                <td>Date: {data.date}</td>
            </tr>
            <tr className="sun">
                <td>Sunrise: {data.sunrise} <Clock /></td>
            </tr>
            <tr className="sun">
                <td>Sunset: {data.sunset} <Clock /></td>
            </tr>
            <tr className="description">
                <td>{data.description} {currentWeatherIcon}</td>
            </tr>
            <tr className="wind">
                <td>Wind: {data.windSpeed} km/h</td>
            </tr>
            <tr className="nextDays">
                <td>{nextTreeDaysInfo[0]?.dayOfWeek}: {nextTreeDaysInfo[0]?.temp.max}°C {getWeatherIcon(nextTreeDaysInfo[0]?.weatherMain)} </td>
            </tr>
            <tr className="nextDays">
                <td>{nextTreeDaysInfo[1]?.dayOfWeek}: {nextTreeDaysInfo[1]?.temp.max}°C {getWeatherIcon(nextTreeDaysInfo[1]?.weatherMain)}</td>
            </tr>
            <tr className="nextDays">
                <td>{nextTreeDaysInfo[2]?.dayOfWeek}: {nextTreeDaysInfo[2]?.temp.max}°C {getWeatherIcon(nextTreeDaysInfo[2]?.weatherMain)}</td>
            </tr>
            <tr>
                <td><BtnShowDetails city={city} date={data.date} /></td>
            </tr>
        </table >
    )
    // return (
    //     <div className="basicWeatherContainer">
    //         <h2 className="location"> {data.locationName}</h2>
    //         <h1 className="weatherTemp"> {data.temp}°C</h1>
    //         <div className="time"> Time: {data.time} <Clock /></div>
    //         <h3 className="date"> Date: {data.date}</h3>
    //         <div className="sunrise">
    //             <span className="title">Sunrise: </span>
    //             <span className="value">{data.sunrise} <Clock /></span>
    //         </div>
    //         <div className="sunset">
    //             <span className="title">Sunset: </span>
    //             <span className="value">{data.sunset} <Clock /></span>
    //         </div>
    //         <div className="weatherMain">
    //             <span className="title">{data.description} </span>
    //             <span className="value"> {currentWeatherIcon} </span>
    //         </div>
    //         <div className="wind">
    //             <span className="title">Wind: </span>
    //             <span className="value"> {data.windSpeed} km/h</span>
    //         </div>
    //         <div className="nextDays">
    //             <span className="title">Next Days: </span>
    //             <li>
    //                 <span className="title">{nextTreeDaysInfo[0]?.dayOfWeek} </span>
    //                 <i className="icon">{getWeatherIcon(nextTreeDaysInfo[0]?.weatherMain)}</i>
    //                 <span className="value">{nextTreeDaysInfo[0]?.temp.max}°C </span>
    //             </li>
    //             <li>
    //                 <span className="title">{nextTreeDaysInfo[1]?.dayOfWeek} </span>
    //                 <i className="icon">{getWeatherIcon(nextTreeDaysInfo[1]?.weatherMain)}</i>
    //                 <span className="value">{nextTreeDaysInfo[1]?.temp.max}°C </span>
    //             </li>
    //             <li>
    //                 <span className="title">{nextTreeDaysInfo[2]?.dayOfWeek} </span>
    //                 <i className="icon">{getWeatherIcon(nextTreeDaysInfo[2]?.weatherMain)}</i>
    //                 <span className="value">{nextTreeDaysInfo[2]?.temp.max}°C</span>
    //             </li>
    //         </div>
    //         <BtnShowDetails city={city} date={data.date} />
    //     </div >
    // );
};

export default BasicWeather