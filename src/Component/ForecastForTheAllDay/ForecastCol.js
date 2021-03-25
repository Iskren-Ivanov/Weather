import React from 'react';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import Clock from '../FeatherIcons/Clock';


const ForecastCol = ({ forecast }) => {
    // debugger;
    const newDate = new Date(forecast.dayTime);
    debugger;
    const time = newDate.toLocaleTimeString('en-GB', {
        hour: "numeric",
        minute: "numeric"
    });
    return (
        <div className="col">
            <div className="dateTime">
                <div className="time"><Clock /> {time}</div>
            </div>
            <div className="dateTime">
                <div className="weatherTemp"> {getWeatherIcon(forecast.weatherMainDescription)} {forecast.temp} °C</div>
            </div>
            <div className="weatherMain">
                <span className="title"> Description:</span>
                <span className="value"> {forecast.weatherDescription} </span>
            </div>
            <div className="feelsLike">
                <span className="title">Feels Like: </span>
                <span className="value">{forecast.feelsLike}</span>
            </div>
            <div className="wind">
                <span className="title">Wind:</span>
                <span className="value"> {forecast.windSpeed} km / h</span>
            </div>
        </div>
    );
};

export default ForecastCol;
