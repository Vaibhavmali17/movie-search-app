import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useFavourite } from '../context/FavouriteContext';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const { favourites } = useFavourite();

  return (
    <nav className={styles.navbar}>

      <Link to="/" className={styles.logo}>
        🎬 MovieSearch
      </Link>

      <div className={styles.navLinks}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLink
          }
        >
            ❤️ Favourites
          {favourites.length > 0 && (
            <span className={styles.badge}>
              {favourites.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
