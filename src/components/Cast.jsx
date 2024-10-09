import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../services/movieApi';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.castItem}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : 'https://via.placeholder.com/500x750?text=No+Image'
            }
            alt={actor.name}
            className={styles.actorImage}
          />
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
