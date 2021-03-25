import React from 'react';
import { useHistory } from 'react-router-dom';

import './BtnShowDetails.css';

const BtnShowDetails = ({ city, date }) => {
    // debugger;
    const history = useHistory();
    const showDetails = () => {
        history.push(`/theForecastIn/${city}`, {
            city,
            date,
        });
    };

    return (
        <button className="btnShowDetailedForecast" onClick={() => showDetails()}>Show Detailed Forecast</button>
    );
};

export default BtnShowDetails;