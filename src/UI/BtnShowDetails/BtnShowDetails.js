import React from 'react';
import { useHistory } from 'react-router-dom';

import './BtnShowDetails.css';

const BtnShowDetails = ({ city }) => {
    const history = useHistory();
    return (
        <button className="btnShowDetailedForecast" onClick={() => history.push(`/theForecastIn/${city}`)}> Show Detailed Forecast</button >
    );
};

export default BtnShowDetails;