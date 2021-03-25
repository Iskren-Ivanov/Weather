import React from 'react';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import BtnShowDetails from '../../UI/BtnShowDetails/BtnShowDetails';
import './CurrentForecastCol.css';

const CurrentForecastCol = ({ city, data }) => {
    return (
        <div>
            {data.map(forecast => {
                // debugger;
                return (<div className="">
                    <h1 className="date-dayname"> {forecast.day}</h1>
                    <span className="date-day"> {forecast.date} </span>
                    <h1 className="weather-temp"> {forecast.temp}°C</h1>
                    <div className="weatherMain">
                        <span className="title">{forecast.weatherDicription} </span>
                        <span className="value"> {getWeatherIcon(forecast.weatherMainDicription)} </span>
                    </div>
                    <div className="feelsLike">
                        <span className="title">Feels Like: </span>
                        <span className="value">{forecast.feelsLike}</span>
                    </div>
                    <div className="wind">
                        <span className="title">Wind: </span>
                        <span className="value"> {forecast.windSpeed} km / h</span>
                    </div>
                    <div className="tempMax">
                        <span className="title">Max Temp:</span>
                        <span className="value"> {forecast.tempMax} °C</span>
                    </div>
                    <div className="tempMin">
                        <span className="title">Min Temp:</span>
                        <span className="value"> {forecast.tempMin} °C</span>
                    </div>
                    <div className="humidity">
                        <span className="title">Humidity:</span>
                        <span className="value"> {forecast.humidity}%</span>
                    </div>
                    <BtnShowDetails city={city} date={forecast.date} />
                </div >)
            })}
        </div>
    );
};

export default CurrentForecastCol;
