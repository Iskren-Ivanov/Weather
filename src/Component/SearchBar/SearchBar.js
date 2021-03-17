import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './SearchBar.css';

const SearchBar = () => {
    const [searchCity, setSearchCity] = useState('');
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        history.push({
            pathname: '/sevenDaysForecast',
            city: searchCity
        });
    };

    return (
        <form className='search' onSubmit={e => handleSubmit(e)}>
            <input
                type='text'
                className='searchTerm'
                placeholder='Get Weather Forecast'
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)} />
            <button
                type='submit'
                className='searchButton'
            > Search </button>
        </form>
    );
};

export default SearchBar