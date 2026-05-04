import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Favourites from './pages/Favourites';
import Navbar from './components/Navbar';
// import { FavouriteProvider } from '../context/FavouriteContext.js';
import { FavouriteProvider } from './context/FavouriteContext.jsx';
function App() {
  return (
    <BrowserRouter>
      <FavouriteProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </FavouriteProvider>
    </BrowserRouter>
  );
}

export default App;