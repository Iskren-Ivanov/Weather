import React from 'react';
import getWeatherIcon from '../../weatherFunk/getWeatherIcon';
import BtnShowDetails from '../../UI/BtnShowDetails/BtnShowDetails';
// import './CurrentForecastCol.css';

const CurrentForecastCol = ({ city, data }) => {
    // debugger;
    return (
        <div className="">
            <h1 className="dateDayname"> {data.dayOfWeek}</h1>
            <span className="dateDay"> {data.date} </span>
            <div className="weatherTemp">
                <span className="title"> Day Temp: </span>
                <span className="value"> {data.temp.day} </span>
                <span className="title">Eve Temp: </span>
                <span className="value"> {data.temp.eve} </span>
                <span className="title">Max Temp: </span>
                <span className="value"> {data.temp.max} </span>
                <span className="title">Min Temp: </span>
                <span className="value"> {data.temp.min} </span>
            </div>
            <div className="weatherDescription">
                <span className="title">{data.description.text} </span>
                <span className="value"> {getWeatherIcon(data.description)} </span>
            </div>
            <div className="feelsLike">
                <span className="title">Day Feels Like: </span>
                <span className="value">{data.feelsLike.day}</span>
                <span className="title">Night Feels Like: </span>
                <span className="value">{data.feelsLike.night}</span>
                <span className="title">Evening Feels Like: </span>
                <span className="value">{data.feelsLike.eve}</span>
                <span className="title">Morning Feels Like: </span>
                <span className="value">{data.feelsLike.morn}</span>
            </div>
            <div className="wind">
                <span className="title">Wind: </span>
                <span className="value"> {data.windSpeed} km / h</span>
            </div>
            <div className="humidity">
                <span className="title">Humidity:</span>
                <span className="value"> {data.humidity}%</span>
            </div>
            <div className="sun">
                <span className="title">Sunrise:</span>
                <span className="value"> {data.sunrise}%</span>
                <span className="title">Sunset:</span>
                <span className="value"> {data.sunset}%</span>
            </div>
            <BtnShowDetails city={city} />
        </div >
    );
};

export default CurrentForecastCol;
