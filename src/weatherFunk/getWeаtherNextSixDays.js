const getWeаtherNextSixDays = async (city = "Sofia") => {
    const searchCity = city;
    const appKey = "e0906f60e7b624e1904f340f026ee8dd";
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${appKey}&units=metric`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => err);

    const weatherForSixDays = {};
    weatherForSixDays.city = data.city.name;
    weatherForSixDays.forecast = [];
    data.list.forEach((arrayItem, index) => {
        weatherForSixDays.forecast[index] = {
            "dayTime": arrayItem.dt_txt,
            "feelsLike": arrayItem.main.feels_like,
            "temp": arrayItem.main.temp,
            "weatherDescription": arrayItem.weather[0].description,
            "weatherMainDescription": arrayItem.weather[0].main,
            "windSpeed": arrayItem.wind.speed,
        }
    });

    return {
        city: weatherForSixDays.city,
        forecast: weatherForSixDays.forecast
    };
};

export default getWeаtherNextSixDays;