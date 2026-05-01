import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { Title, Poster, Year, Type, imdbID } = movie;

  return (
    <Link to={`/movie/${imdbID}`} className={styles.card}>

      {Poster !== 'N/A' ? (
        <img
          src={Poster}
          alt={Title}
          className={styles.poster}
        />
      ) : (
        <div className={styles.noPoster}>
          No Image Available
        </div>
      )}

      <div className={styles.info}>
        <p className={styles.title}>{Title}</p>
        <div className={styles.meta}>
          <span className={styles.year}>{Year}</span>
          <span className={styles.type}>{Type}</span>
        </div>
      </div>

    </Link>
  );
};

export default MovieCard;