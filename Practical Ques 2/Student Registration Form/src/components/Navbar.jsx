import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.navBrand}>
        <div className={styles.navLogo}>S</div>
        <span className={styles.navTitle}>StudentHub</span>
      </NavLink>
      <div className={styles.navLinks}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
          }
        >
          Register
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
          }
        >
          Students
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
