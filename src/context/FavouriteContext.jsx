import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {

  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (movie) => {
    setFavourites(prev => [...prev, movie]);
  };

  const removeFavourite = (imdbID) => {
    setFavourites(prev =>
      prev.filter(movie => movie.imdbID !== imdbID)
    );
  };

  const isFavourite = (imdbID) => {
    return favourites.some(movie => movie.imdbID === imdbID);
  };

  return (
    <FavouriteContext.Provider value={{
      favourites,
      addFavourite,
      removeFavourite,
      isFavourite,
    }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => useContext(FavouriteContext);