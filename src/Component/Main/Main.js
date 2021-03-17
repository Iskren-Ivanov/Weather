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
      <div className='weathersColumns'>
        <div className='leftColums'>
          <BasicWeather city={'Varna'} />
        </div>
        <div className='centerColums'>
          <BasicWeather city={'Sofia'} />
        </div>
        <div className='rightColums'>
          <BasicWeather city={'Plovdiv'} />
        </div>
      </div>
    </div>
  );
};

export default Main;
