import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/movieApi';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <main>
      <h1>Trending Movies Today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
