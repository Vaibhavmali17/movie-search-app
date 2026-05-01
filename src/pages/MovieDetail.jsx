import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/MovieDetail.module.css';

const API_KEY = '1c12799f';
const BASE_URL = 'https://www.omdbapi.com/';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(BASE_URL, {
          params: {
            apikey: API_KEY,
            i: id,
            plot: 'full',
          },
        });

        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setMovie(data);
        }
      } catch (err) {
        setError('Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  return (
    <div className={styles.container}>

      <button
        className={styles.backBtn}
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {loading && (
        <p className={styles.loading}>Loading...</p>
      )}

      {error && (
        <p className={styles.error}>{error}</p>
      )}

      {!loading && !error && movie && (
        <div className={styles.card}>

          {movie.Poster !== 'N/A' ? (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className={styles.poster}
            />
          ) : (
            <div className={styles.noPoster}>
              No Image Available
            </div>
          )}

          <div className={styles.info}>
            <h1 className={styles.title}>{movie.Title}</h1>
            <span className={styles.badge}>{movie.Type}</span>

            <div className={styles.metaRow}>
              <p className={styles.metaItem}>
                Year: <span>{movie.Year}</span>
              </p>
              <p className={styles.metaItem}>
                Rating: <span>{movie.imdbRating}</span>
              </p>
              <p className={styles.metaItem}>
                Runtime: <span>{movie.Runtime}</span>
              </p>
              <p className={styles.metaItem}>
                Genre: <span>{movie.Genre}</span>
              </p>
            </div>

            <p className={styles.plot}>{movie.Plot}</p>

            <p className={styles.metaItem}>
              Director: <span>{movie.Director}</span>
            </p>

          </div>
        </div>
      )}

    </div>
  );
};

export default MovieDetail;