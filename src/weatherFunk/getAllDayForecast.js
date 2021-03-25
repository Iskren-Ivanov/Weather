// import React from 'react';

const getAllDayForecast = (data, date) => {
    debugger;
    const currentDay = date?.split('/')[0];
    const currenDayData = []
    const { forecast } = data;

    for (const obj of forecast) {
        // debugger;
        const currenDayAsADate = obj.dayTime.match(/[^\s-]+-?/g)[2];
        if (currenDayAsADate === currentDay) {
            currenDayData.push(obj);
        };
    };
    return currenDayData;
};


export default getAllDayForecast;
