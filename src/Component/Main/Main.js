import React from 'react';
import BasicWeather from '../BasicWeather/BasicWeather';
import SearchBar from '../SearchBar/SearchBar';
import './Main.css';

const Main = () => (
  <main className="main three-days">
    <section>
      <SearchBar />
      <article className="main-article main-view">
        <BasicWeather city={'Sofia'} />
      </article>
      <article className="main-article main-view">
        <BasicWeather city={'Milan'} />
      </article>
      <article className="main-article main-view">
        <BasicWeather city={'Barcelona'} />
      </article>
    </section>
  </main>
);

export default Main;
