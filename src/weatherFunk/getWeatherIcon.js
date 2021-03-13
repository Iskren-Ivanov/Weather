import CloudOff from '../Component/FeatherIcons/CloudOff';
import CloudRain from '../Component/FeatherIcons/CloudRain';
import CloudSnow from '../Component/FeatherIcons/CloundSnow';
import Cloud from '../Component/FeatherIcons/Cloud';

const getWeatherIcon = (discription) => {
    // debugger;
    switch (discription) {
        case "Clear": return <CloudOff />
        case "Rain": return <CloudRain />
        case "Snow": return <CloudSnow />
        case "Clouds": return <Cloud />
        default: return <CloudOff />
    };
};

export default getWeatherIcon;