const getAllDayForecast = (data, date) => {
    const currentDay = date.getUTCDate();
    // debugger;
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
