const getWeаtherNextSixDays = async (city = "Sofia") => {
    const appKey = "e0906f60e7b624e1904f340f026ee8dd";
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appKey}&units=metric`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => err);

    const weatherForSixDays = {};
    weatherForSixDays.city = data.city?.name;
    weatherForSixDays.forecast = [];
    data.list?.forEach((arrayItem, index) => {
        weatherForSixDays.forecast[index] = {
            "dayTime": arrayItem.dt_txt,
            "feelsLike": Math.round(arrayItem.main.feels_like),
            "temp": Math.round(arrayItem.main.temp),
            "weatherDescription": arrayItem.weather[0].description,
            "weatherMainDescription": arrayItem.weather[0].main,
            "windSpeed": Math.round(arrayItem.wind.speed),
            "humidity": arrayItem.main.humidity,
            "tempMax": arrayItem.main.temp_max,
            "tempMin": arrayItem.main.temp_min,
        }
    });

    return {
        city: weatherForSixDays.city,
        forecast: weatherForSixDays.forecast
    };
};

export default getWeаtherNextSixDays;