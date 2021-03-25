import getWeatherNextSixDays from './getWeаtherNextSixDays';
import abbreviatedNameDay from './abbreviatedNameDay';

const takeNextThreeDaysInfo = async (date, city) => {
    // debugger;
    const dataSixDays = await getWeatherNextSixDays(city);
    const nextThreeDays = [];
    const forecastArr = dataSixDays?.forecast;
    // да се рефакторира при възможност без if
    // if (forecastArr && nextThreeDays.length <= 3) {
    if (forecastArr) {
        const presentDay = new Date(date).getDate();
        for (let index in forecastArr) {
            // да потърся друг вариан за спиране при достигане на 3-те дни
            if (nextThreeDays.length === 3) {
                break;
            };
            let currentDate = new Date(forecastArr[index].dayTime);
            let time = currentDate.getUTCHours();
            const newDate = new Date(forecastArr[index].dayTime);
            const dayOfMounth = newDate.getDate();
            const dayOfWeek = abbreviatedNameDay(newDate);
            const weatherMain = forecastArr[index].weatherMainDescription;

            if (time === 13 && presentDay !== dayOfMounth) {
                nextThreeDays.push({
                    dayOfWeek,
                    temp: forecastArr[index].temp,
                    weatherMain
                });
            };
        };
    };
    return nextThreeDays;
};

export default takeNextThreeDaysInfo;