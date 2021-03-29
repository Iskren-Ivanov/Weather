import React from 'react';
import { useHistory } from 'react-router-dom';

import './BtnShowDetails.css';

const BtnShowDetails = ({ city, date }) => {
    const history = useHistory();

    const onClick = () => {
        history.push({ pathname: `/theForecastIn/${city}/${date.replaceAll('/', "-")}` })
    };
    return (
        <button className="btnShowDetailedForecast" onClick={() => onClick()}> Show Detailed Forecast</ button >
    );
};

export default BtnShowDetails;