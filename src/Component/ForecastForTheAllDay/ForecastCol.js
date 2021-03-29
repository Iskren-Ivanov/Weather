import React from 'react';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import Clock from '../FeatherIcons/Clock';


const ForecastCol = ({ forecast }) => {
    const newDate = new Date(forecast.dayTime);
    const time = newDate.toLocaleTimeString('en-GB', {
        hour: "numeric",
        minute: "numeric"
    });
    // <tr>
    // <td>
    //     // Monday
    // </td>
    // </tr>
    // <tr>
    // <td>
    // date

    // </td>
    // </tr>
    // <tr>

    // </tr>

    return (
        <table className="nextDaysForecast">
            <tr className="dateTime">
                <td>{time} <Clock /></td>
            </tr>
            <tr className="temp">
                <td> {forecast.temp} °C</td>
            </tr>
            <tr className="description">
                <td>{forecast.weatherDescription} {getWeatherIcon(forecast.weatherMainDescription)}</td>
            </tr>
            <tr className="feelsLike">
                <td>Feels Like: {forecast.feelsLike}°C</td>
            </tr>
            <tr className="wind">
                <td>Wind: {forecast.windSpeed} km/h</td>
            </tr>
        </table>
    );
};

export default ForecastCol;
