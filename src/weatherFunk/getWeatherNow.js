const getWeаther = async (city = "Sofia") => {
    const appKey = "e0906f60e7b624e1904f340f026ee8dd";

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=metric`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => err);

    const mainDiscription = data?.weather[0].main
    let description = data?.weather[0].description;
    let windSpeed = Math.round(data.wind.speed * 1.60);
    let sunrise = ((new Date(1000 * data?.sys.sunrise)).toLocaleTimeString('en-GB', {
        hour: "numeric",
        minute: "numeric"
    }));
    let sunset = (new Date(1000 * data?.sys.sunset)).toLocaleTimeString('en-GB', {
        hour: "numeric",
        minute: "numeric"
    });
    const dateTimeObj = new Date(data?.dt * 1000);
    const time = dateTimeObj.toLocaleTimeString('en-GB', {
        hour: "numeric",
        minute: "numeric"
    });
    const date = dateTimeObj.toLocaleDateString('en-GB');
    const locationName = data.name;
    const temp = Math.round(data.main.temp);

    return {
        locationName,
        date,
        time,
        temp,
        mainDiscription,
        description,
        windSpeed,
        sunrise,
        sunset
    };
};

export default getWeаther;