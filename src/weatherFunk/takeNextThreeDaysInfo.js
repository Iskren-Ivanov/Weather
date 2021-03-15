import getWeatherNextSixDays from './getWeаtherNextSixDays';
import abbreviatedNameDay from './abbreviatedNameDay';

const takeNextThreeDaysInfo = async (dateTime, city) => {
    const dataSixDays = await getWeatherNextSixDays(city);
    const nextThreeDays = [];
    const forecastArr = dataSixDays?.forecast;
    // да се рефакторира при възможност без if
    if (forecastArr && nextThreeDays.length <= 3) {
        const presentDay = dateTime.split(',')[0];
        for (let index in forecastArr) {
            // да потърся друг вариан за спиране при достигане на 3-те дни
            if (nextThreeDays.length === 3) {
                break;
            };
            let currentDate = new Date(forecastArr[index].dayTime);
            let time = currentDate.getUTCHours();
            const dayOfWeek = abbreviatedNameDay(forecastArr[index].dayTime)
            const temp = Math.round(forecastArr[index].temp);
            const weatherMain = forecastArr[index].weatherMainDescription;
            
            if (time === 13 && presentDay !== dayOfWeek) {
                nextThreeDays.push({
                    dayOfWeek,
                    temp,
                    weatherMain
                });
            };
        };
    };
    return nextThreeDays;
};

export default takeNextThreeDaysInfo;