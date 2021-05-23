const getAllDayForecast = (data, dateStr) => {
    const splitedDate = dateStr.split('-');
    const dateObj = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
    const currentDay = dateObj.getDate();
    const currenDayData = []
    const { forecast } = data;

    for (const obj of forecast) {
        const currenDayAsADate = parseInt(obj.dayTime.match(/[^\s-]+-?/g)[2]);
        if (currenDayAsADate === currentDay) {
            currenDayData.push(obj);
        };
    };
    return currenDayData;
};


export default getAllDayForecast;
