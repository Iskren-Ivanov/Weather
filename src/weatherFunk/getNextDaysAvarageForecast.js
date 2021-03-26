import getCoordinates from './getCoordinates';
import abbreviatedNameDay from './abbreviatedNameDay';

const appKey = "e0906f60e7b624e1904f340f026ee8dd";

const getNextDaysAvarageForecast = async (city) => {
    const coord = getCoordinates(city)[0]?.coord;
    const forecastFiveDays = [];
    // debugger;
    await fetch(` https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=current&appid=${appKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            data.daily.map(obj => {
                let sunrise = ((new Date(1000 * obj.sunrise)).toLocaleTimeString('en-GB', {
                    hour: "numeric",
                    minute: "numeric"
                }));
                let sunset = (new Date(1000 * obj.sunset)).toLocaleTimeString('en-GB', {
                    hour: "numeric",
                    minute: "numeric"
                });
                const dateTimeObj = new Date(obj.dt * 1000);
                const dayOfWeek = abbreviatedNameDay(dateTimeObj);
                // debugger;
                const date = `${dateTimeObj.getDate()}/${dateTimeObj.getMonth() + 1}/${dateTimeObj.getFullYear()}`
                let humidity = obj.humidity;
                let nightFeelsLike = Math.round(obj.feels_like.night);
                let dayFeelsLike = Math.round(obj.feels_like.day);
                let eveFeelsLike = Math.round(obj.feels_like.eve);
                let mornFeelsLike = Math.round(obj.feels_like.morn);
                let { day, eve, max, min, morn, night } = obj.temp;
                let { main, description } = obj.weather[0];
                let windSpeed = Math.round(obj.wind_speed);

                forecastFiveDays.push({
                    date,
                    dayOfWeek,
                    sunrise,
                    sunset,
                    humidity,
                    "feelsLike": {
                        "day": dayFeelsLike,
                        "night": nightFeelsLike,
                        "eve": eveFeelsLike,
                        "morn": mornFeelsLike,
                    },
                    "temp": {
                        day,
                        eve,
                        max,
                        min,
                        morn,
                        night,
                    },
                    "description": {
                        main,
                        "text": description,
                    },
                    windSpeed
                });
                return data;
            })
        });

    return forecastFiveDays;
};

export default getNextDaysAvarageForecast;