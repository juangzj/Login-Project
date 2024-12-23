import 'react';
import navbarStyles from './Navbar.module.css'; // Import the styles

const Navbar = () => {
  return (
    <nav className={navbarStyles.navbarContainer}>
      <div className={navbarStyles.navbarTitle}>Login</div>
      <button className={navbarStyles.logoutButton}>Log Out</button>
    </nav>
  );
};

export default Navbar;
