import React, { useState } from 'react';
import { searchMovies } from '../services/movieApi';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import styles from '../components/Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query).then(setMovies).catch(console.error);
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search for movies"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </main>
  );
};

Movies.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default Movies;
