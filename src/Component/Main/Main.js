import React from 'react';
import BasicWeather from '../BasicWeather/BasicWeather';
import SearchBar from '../SearchBar/SearchBar';

const Main = () => (
  <main className="main">
    <section>
      <SearchBar />
      <article className="main-article">
        <BasicWeather city={'Sofia'} />
      </article>
      <article className="main-article">
        <BasicWeather city={'Milan'} />
      </article>
      <article className="main-article">
        <BasicWeather city={'Barcelona'} />
      </article>
    </section>
  </main>
);

export default Main;
