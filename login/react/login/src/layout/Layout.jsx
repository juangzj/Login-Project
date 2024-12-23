import 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar/Navbar.jsx'; // Import the NavBar component

const Layout = () => {
  return (
    <div>
      {/* Navigation bar */}
      <NavBar />
      {/* Dynamic content */}
      <main style={{ padding: '20px', minHeight: 'calc(100vh - 60px)' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
