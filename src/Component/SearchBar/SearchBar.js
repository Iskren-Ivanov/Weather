import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './SearchBar.css';

const SearchBar = () => {
    const [searchCity, setSearchCity] = useState('');
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        history.push(`/nextDaysForecastIn/${searchCity}`);
    };

    return (
        <form className='searchForm' onSubmit={e => handleSubmit(e)}>
            <div classNanme="box">
                <input
                    type='text'
                    className='searchTerm'
                    placeholder='Get Weather Forecast'
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)} />
            </div>
        </form>
    );
};

export default SearchBar