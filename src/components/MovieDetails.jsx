import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieDetails } from '../services/movieApi';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.detailsContainer}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : 'https://via.placeholder.com/500x750?text=No+Image'
          }
          alt={movie.title}
          className={styles.poster}
        />
        <div className={styles.movieInfo}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <div className={styles.links}>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string,
};

export default MovieDetails;
