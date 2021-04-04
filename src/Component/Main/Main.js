import React from 'react';
import BasicWeather from '../BasicWeather/BasicWeather';
import SearchBar from '../SearchBar/SearchBar';

import './Main.css';

const Main = () => {
  return (
    <div>
      <SearchBar />
      <div className='weather-container'>
        <div className='left-colums'>
          <BasicWeather city={'Sofia'} />
        </div>
        <div className='center-colums'>
          <BasicWeather city={'Milan'} />
        </div>
        <div className='right-colums'>
          <BasicWeather city={'Barcelona'} />
        </div>
      </div>
    </div>
  );
};

export default Main;
