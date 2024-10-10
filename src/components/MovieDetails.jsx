import { useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieDetails } from '../services/movieApi';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const handleGoBack = () => {
    navigate(location.state?.from || '/movies');
  };
  return (
    <>
      <button className={styles.goBackButton} onClick={handleGoBack}>
        Go Back
      </button>
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
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
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
