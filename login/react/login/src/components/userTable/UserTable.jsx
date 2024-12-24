import "react";
import userTableStyles from './UserTable.module.css'; // Import the styles
import axios from 'axios'
import { useEffect, useState } from "react";

const ShowUserBlogs = 'http://localhost:5000/auth/getAllUsers'

const UserTable = () => {

  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);

  // show users 
  useEffect(() => {
    getAllUsers();
  }, []);

  // function to show users
  const getAllUsers = async () => {
    try {
      const res = await axios.get(ShowUserBlogs);
      setUser(res.data);
    } catch (error) {
      setError('Error, could not show the user')
      console.error(error);
    }
  }



  return (
    <div className={userTableStyles.pageContainer}>
      <div className={userTableStyles.tableContainer}>
        <h2 className={userTableStyles.pageTitle}>User List</h2>
        <table className={userTableStyles.table}>
          <thead className={userTableStyles.theadDark}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>
                  <button className={userTableStyles.editButton}>Edit</button>
                  <button className={userTableStyles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {error && <div className='alert alert-danger'>{error}</div>} {/* Show errors */}
    </div>
  );
};

export default UserTable;
