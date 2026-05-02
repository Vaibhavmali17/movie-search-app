import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '1c12799f';
const BASE_URL = 'https://www.omdbapi.com/';
console.log(BASE_URL);

const useFetchMovies = (query) => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (!query) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get(BASE_URL, {
          params: {
            apikey: API_KEY,
            s: query,
            page: 1,
          },
        });

        if (data.Response === 'False') {
          setError('Too broad! Please type a more specific movie name.');
          setMovies([]);
        } else {
          setMovies(data.Search);
        }

      } catch (err) {
        setError('Something went wrong. Please try again.');
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();

  }, [query]);

  return { movies, loading, error };
};

export default useFetchMovies;