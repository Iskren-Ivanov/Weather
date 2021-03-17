import React, { useState } from 'react'

const CurrentForecastCol = () => {
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState('Weathher Icon');
    // setCurrentWeatherIcon(getWeatherIcon(response.mainDiscription));
    return (
        <div className="forecastCol">
            <h2 className="location"> locationName </h2>
            <h1 className="weather-temp"> temp°C</h1>
            <span className="date-day"> dateTime  </span>
            <h3 className="date-dayname"> dateTime </h3>
            <div className="sunrise">
                <span className="title">Sunrise: </span>
                <span className="value"> sunrise </span>
            </div>
            <div className="sunset">
                <span className="title">Sunset: </span>
                <span className="value">sunset</span>
            </div>
            <div className="description">
                <span className="title">description </span>
                <span className="value"> {currentWeatherIcon} </span>
            </div>
            <div className="wind">
                <span className="title">Wind: </span>
                <span className="value"> windSpeed km / h</span>
            </div>
        </div>
    );
};

export default CurrentForecastCol;
