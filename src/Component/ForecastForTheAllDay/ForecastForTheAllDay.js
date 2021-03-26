import React, { useEffect, useState } from 'react';
import getWeatherNextSixDays from '../../weatherFunk/getWeаtherNextSixDays';
import getAllDayForecast from '../../weatherFunk/getAllDayForecast';
import ForecastCol from './ForecastCol';
import getWeatherNow from '../../weatherFunk/getWeatherNow';

const ForecastForTheAllDay = (props) => {
    const city = props.match.params.id
    const date = new Date()
    const [data, setData] = useState([]);
    useEffect(async () => {
        // debugger;
        setData(getAllDayForecast(await getWeatherNextSixDays(city), date));
    }, [city]);
    console.log(data);
    return (
        <div className="weatherContainer">
            {data?.map(el => (
                <div className='col'>
                    <ForecastCol className="forecastForAllDaysCol"
                        forecast={el} />
                </div>
            ))}
        </div>
    );
};


// const ForecastForTheAllDay = ({ location: { state } }) => {
//     const [data, setData] = useState([]);
//     // const { date } = state;
//     useEffect(async () => {
//         getAvarageDayForecast(state.city).then(res => {
//             setData(res);
//         });
//     }, [state.city]);

//     return (
//         <div className="weatherContainer">
//             {data.map(el => (
//                 <div className='col'>
//                     <ForecastCol className="forecastForAllDaysCol"
//                         forecast={el} />
//                 </div>
//             ))}
//         </div>
//     );
// };

export default ForecastForTheAllDay;
