import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import navbarStyles from './Navbar.module.css'; // Import styles

const Navbar = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token
    navigate('/'); // Redirect to login
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className={navbarStyles.navbarContainer}>
      <div className={navbarStyles.navbarTitle}>Login</div>
      <button className={navbarStyles.logoutButton} onClick={toggleModal}>
        Log Out
      </button>

      {showModal && (
        <div className={navbarStyles.modalOverlay}>
          <div className={navbarStyles.modalContent}>
            <h3>Are you sure you want to log out?</h3>
            <div className={navbarStyles.modalButtons}>
              <button onClick={handleLogout} className={navbarStyles.confirmButton}>
                Yes
              </button>
              <button onClick={toggleModal} className={navbarStyles.cancelButton}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
