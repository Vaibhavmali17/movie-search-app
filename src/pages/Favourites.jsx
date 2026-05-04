import React from 'react';
import { Link } from 'react-router-dom';
import { useFavourite } from '../context/FavouriteContext';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Favourites.module.css';

const Favourites = () => {
  const { favourites, removeFavourite } = useFavourite();

  const handleClearAll = () => {
    favourites.forEach(movie => removeFavourite(movie.imdbID));
  };

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h1 className={styles.title}>❤️ My Favourites</h1>
        <p className={styles.count}>
          {favourites.length} 
          {favourites.length === 1 ? ' movie' : ' movies'} saved
        </p>
      </div>

      {favourites.length === 0 ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🎬</div>
          <p className={styles.emptyText}>
            No favourites yet! Start adding movies.
          </p>
          <Link to="/" className={styles.goHome}>
            Browse Movies
          </Link>
        </div>
      ) : (
        <>
          <button
            className={styles.clearBtn}
            onClick={handleClearAll}
          >
            Clear All
          </button>
          <div className={styles.grid}>
            {favourites.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
              />
            ))}
          </div>
        </>
      )}

    </div>
  );
};

export default Favourites;