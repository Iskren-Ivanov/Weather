import cityList from '../cityList/city.list.json';

const getCoordinates = (cityName) => (cityList.filter(
    function (list) { return (list.name).toLowerCase() === (cityName).toLowerCase() }
));

export default getCoordinates;