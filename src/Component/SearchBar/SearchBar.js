import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './SearchBar.css';

const SearchBar = () => {
    const [searchCity, setSearchCity] = useState('');
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        history.push(`/nextDaysForecastIn/${searchCity}`);
    };
    
    return (
        <div className='search-container'>
            <form onSubmit={e => handleSubmit(e)}>
                <input type='text'
                    className='search-term'
                    placeholder='Get Weather Forecast'
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)} />
            </form>
        </div >
    );
};

export default SearchBar