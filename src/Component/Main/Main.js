import React from 'react';

import BasicWeather from '../BasicWeather/BasicWeather';
import SearchBar from '../SearchBar/SearchBar';

import './Main.css';

const Main = () => {
  return (
    <div>
      <div className='headerContainer'>
        <SearchBar />
      </div>
      <div className='weatherContainer'>
        <div className='leftColums'>
          <BasicWeather city={'Sofia'} />
        </div>
        <div className='centerColums'>
          <BasicWeather city={'Rome'} />
        </div>
        <div className='rightColums'>
          <BasicWeather city={'Barcelona'} />
        </div>
      </div>
    </div>
  );
};

export default Main;
