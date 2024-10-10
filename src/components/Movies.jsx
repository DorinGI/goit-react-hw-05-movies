import React, { useState, useEffect } from 'react';
import { searchMovies } from '../services/movieApi';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import { useSearchParams } from 'react-router-dom';
import styles from '../components/Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setMovies).catch(console.error);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') return;
    setSearchParams({ query });
  };

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={e => setSearchParams({ query: e.target.value })}
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
