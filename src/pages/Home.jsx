import React, { useState, useRef } from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [query, setQuery] = useState('avengers');
  const [search, setSearch] = useState('avengers');
  const inputRef = useRef(null);

  const { movies, loading, error } = useFetchMovies(query);

  const handleSearch = () => {
    if (search.trim()) {
      setQuery(search);
      inputRef.current.blur();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.hero}>
        <h1 className={styles.title}>Discover Movies</h1>
        <p className={styles.subtitle}>
          Search any movie using the OMDB API
        </p>
        <div className={styles.searchWrap}>
          <input
            ref={inputRef}
            className={styles.searchInput}
            type="text"
            placeholder="Search movies... e.g. Avengers"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className={styles.searchBtn}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {loading && (
        <p className={styles.loading}>Loading...</p>
      )}

      {error && (
        <p className={styles.error}>{error}</p>
      )}

      {!loading && !error && movies.length > 0 && (
        <>
          <p className={styles.sectionLabel}>
            Results for "{query}"
          </p>
          <div className={styles.grid}>
            {movies.map((movie) => (
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

export default Home;