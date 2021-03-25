import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './SearchBar.css';

const SearchBar = () => {
    const [searchCity, setSearchCity] = useState('');
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        // /fiveDaysForecastIn/:City
        history.push({
            pathname: '/fiveDaysForecast',
            city: searchCity
        });
    };

    return (
        <form className='search' onSubmit={e => handleSubmit(e)}>
            <div classNanme="box box-1">
                <input
                    type='text'
                    className='searchTerm'
                    placeholder='Get Weather Forecast'
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)} />
            </div>
            <div classNanme="box box-2">
                <button
                    type='submit'
                    className='searchButton'
                > Search </button>
            </div>
        </form>
    );
};

export default SearchBar