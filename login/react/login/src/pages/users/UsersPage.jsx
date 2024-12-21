import 'react';
import NavBar from '../../components/navbar/Navbar.jsx';  // Importing the NavBar component
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from '../../components/userTable/UserTable.jsx'

// UserPage component
const UserPage = () => {
  return (
    <div>
      {/* NavBar  */}
      <NavBar />
      {/* UserTable */}
      <UserTable className="custom-table-margin" />
    </div>
  );
};

export default UserPage;
