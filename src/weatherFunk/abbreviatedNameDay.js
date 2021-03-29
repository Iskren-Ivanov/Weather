const abbreviatedNameDay = (dayTime) => {
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const dayNumber = dayTime.getDay();
    return days[dayNumber];
};

export default abbreviatedNameDay;