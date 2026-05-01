import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
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
          {/* Home */}
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;