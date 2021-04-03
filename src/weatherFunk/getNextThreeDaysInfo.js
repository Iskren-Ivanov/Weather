import abbreviatedNameDay from './abbreviatedNameDay';
import getNextDaysAvarageForecast from './getNextDaysAvarageForecast';

const getNextThreeDaysInfo = async (date, city) => {
    // debugger;
    const forecast = await getNextDaysAvarageForecast(city);
    const nextThreeDays = [];
    if (forecast) {
        const presentDay = parseInt(date.split("/")[0]);
        for (let obj of forecast) {
            // debugger;
            // да потърся друг вариан за спиране при достигане на 3-те дни
            if (nextThreeDays.length === 3) {
                break;
            };
            let splitedDate = obj.date.split('/');
            let currentDate = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
            const dayOfMounth = currentDate.getDate();
            const dayOfWeek = abbreviatedNameDay(currentDate);

            if (presentDay !== dayOfMounth) {
                nextThreeDays.push({
                    dayOfWeek,
                    temp: obj.temp,
                    weatherMain: obj.description.main,
                });
            };
        };
    };
    return nextThreeDays;
};

export default getNextThreeDaysInfo;