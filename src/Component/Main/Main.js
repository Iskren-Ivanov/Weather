import React from 'react';
import BasicWeather from '../BasicWeather/BasicWeather';
import SearchBar from '../SearchBar/SearchBar';

const Main = () => (
  <main className="main">
    <section>
      <SearchBar />
      <article className="main-article">
        <ul className="main-article__lists">
          <li className="main-article__list">
            <BasicWeather city={'Sofia'} />
          </li>
        </ul>
      </article>
      <article className="main-article">
        <ul className="main-article__lists">
          <li className="main-article__list">
            <BasicWeather city={'Milan'} />
          </li>
        </ul>
      </article>
      <article className="main-article">
        <ul className="main-article__lists">
          <li className="main-article__list">
            <BasicWeather city={'Barcelona'} />
          </li>
        </ul>
      </article>
    </section>
  </main>
);

export default Main;
