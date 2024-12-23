import 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from '../../components/userTable/UserTable.jsx'
import Nabvar from '../../components/navbar/Navbar.jsx'

// UserPage component
const UserPage = () => {
  return (
    <div>
      {/* NavBar */}
      <Nabvar />
      {/* UserTable */}
      <UserTable className="custom-table-margin" />
    </div>
  );
};

export default UserPage;
