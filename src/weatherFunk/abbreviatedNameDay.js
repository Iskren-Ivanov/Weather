const abbreviatedNameDay = (dayTime) => {
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const dayTimeToString = (dayTime).split(' ')[0];
    const date = new Date(dayTimeToString);

    const dayOfWeek = days[date.getDay()];
    return dayOfWeek
};

export default abbreviatedNameDay;