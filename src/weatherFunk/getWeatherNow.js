const getWeаther = async (city = "Sofia") => {
    const searchCity = city;
    const appKey = "e0906f60e7b624e1904f340f026ee8dd";

    // взимане на времето за цяла седмица
    // const newData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${appKey}&units=metric`)
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(err => err);
    // console.log(newData);

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${appKey}&units=metric`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => err);

    const mainDiscription = data.weather[0].main
    let description = data.weather[0].description;
    let windSpeed = Math.round(data.wind.speed * 1.60);
    let sunrise = (new Date(1000 * data.sys.sunrise)).toLocaleTimeString('it-IT');
    let sunset = (new Date(1000 * data.sys.sunset)).toLocaleTimeString('it-IT');
    const dateTimeObj = new Date(data.dt * 1000);
    debugger;
    const getTime = dateTimeObj.getTime();
    const dateTime = dateTimeObj.toUTCString();
    const locationName = data.name;
    const temp = Math.round(data.main.temp);

    return {
        locationName,
        dateTime,
        temp,
        mainDiscription,
        description,
        windSpeed,
        sunrise,
        sunset
    };
};

export default getWeаther;