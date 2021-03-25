import abbreviatedNameDay from './abbreviatedNameDay';

const dividedIntoFiveDaysAverageForecast = ({ forecast, city }) => {
    // debugger;
    const forecastMap = {};
    let currentDayOfMount = 0;
    let prevDayOfMount = 0;
    for (let record of forecast) {
        let currentTimeForAverageForecast = false;
        const date = new Date(record.dayTime);
        const time = date.getHours();
        debugger;
        const dayOfMonth = date.getDate();
        currentDayOfMount = dayOfMonth;
        // да се рефакторира как да давам средно време за целия ден
        if (prevDayOfMount === 0) {
            switch (time) {
                case 15: case 17: case 19: case 21:
                case 23: currentTimeForAverageForecast = true
                    break;
            };
        } else if (time === 15 && currentDayOfMount > prevDayOfMount) {
            currentTimeForAverageForecast = true;
        };

        if (currentTimeForAverageForecast) {
            const day = abbreviatedNameDay(date);
            const dateStr = `${dayOfMonth}/${date.getMonth() + 1}/${date.getUTCFullYear()}`; 
            const data = {
                date: dateStr,
                day,
                feelsLike: Math.round(record.feelsLike),
                temp: Math.round(record.temp),
                weatherMainDicription: record.weatherMainDescription,
                weatherDicription: record.weatherDescription,
                windSpeed: Math.round(record.windSpeed),
                humidity: record.humidity,
                tempMax: Math.round(record.tempMax),
                tempMin: Math.round(record.tempMin),
            };
            if (forecastMap[dayOfMonth]) {
                forecastMap[dayOfMonth].data.push(data);
            } else {
                forecastMap[dayOfMonth] = {
                    city: city,
                    data: [data]
                };
            };
        };
        prevDayOfMount = currentDayOfMount - 1;
    };

    const forecastMapKeys = Object.keys(forecastMap);
    if (forecastMapKeys.length === 6) {
        delete forecastMap[forecastMapKeys[5]];
    };

    return forecastMap;
};

export default dividedIntoFiveDaysAverageForecast;


// import abbreviatedNameDay from './abbreviatedNameDay';

// const dividedIntoFiveDaysAverageForecast = ({ forecast, city }) => {
//     // debugger;
//     const forecastMap = {};
//     debugger;
//     const minTemp = Number.MAX_SAFE_INTEGER;
//     const maxTemp = Number.MIN_SAFE_INTEGER;
//     const maxHumidity = Number.MIN_SAFE_INTEGER;
//     const maxSpeed = Number.MIN_SAFE_INTEGER;
//     let currentDayOfMount = new Date(forecast[0].dayTime).getDate();
//     let data = {}
//     for (let record of forecast) {
//         let currentTimeForAverageForecast = false;
//         const date = new Date(record.dayTime);
//         // const time = date.getHours();
//         const dayOfMonth = date.getDate();
//         if (record.maxTemp > maxTemp) {
//             maxTemp = record.maxTemp
//         };
//         if (record.minTemp < minTemp) {
//             minTemp = record.minTemp;
//         };
//         if (maxHumidity < record.humidity) {
//             maxHumidity = record.humidity;
//         };
//         if (maxSpeed < record.maxSpeed) {
//             maxSpeed = record.maxSpeed;
//         };
//         if (currentDayOfMount === dayOfMonth) {
//             const day = abbreviatedNameDay(date);
//             const dateStr = `${dayOfMonth}/${date.getMonth() + 1}/${date.getUTCFullYear()}`;
//             data = {
//                 date: dateStr,
//                 day,
//                 weatherMainDicription: record.weatherMainDescription,
//                 weatherDicription: record.weatherDescription,
//                 windSpeed: Math.round(record.windSpeed),
//                 humidity: record.humidity,
//                 tempMax: Math.round(record.tempMax),
//                 tempMin: Math.round(record.tempMin),
//             };
//         }

//         currentDayOfMount = dayOfMonth;
//         // да се рефакторира как да давам средно време за целия ден
//         if (false) {
//             const day = abbreviatedNameDay(date);
//             const dateStr = `${dayOfMonth}/${date.getMonth() + 1}/${date.getUTCFullYear()}`;
//             const data = {
//                 date: dateStr,
//                 day,
//                 feelsLike: Math.round(record.feelsLike),
//                 temp: Math.round(record.temp),
//                 weatherMainDicription: record.weatherMainDescription,
//                 weatherDicription: record.weatherDescription,
//                 windSpeed: Math.round(record.windSpeed),
//                 humidity: record.humidity,
//                 tempMax: Math.round(record.tempMax),
//                 tempMin: Math.round(record.tempMin),
//             };
//             if (forecastMap[dayOfMonth]) {
//                 forecastMap[dayOfMonth].data.push(data);
//             } else {
//                 forecastMap[dayOfMonth] = {
//                     city: city,
//                     data: [data]
//                 };
//             };
//         };
//     };

//     const forecastMapKeys = Object.keys(forecastMap);
//     if (forecastMapKeys.length === 6) {
//         delete forecastMap[forecastMapKeys[5]];
//     };

//     return forecastMap;
// };

// export default dividedIntoFiveDaysAverageForecast;

