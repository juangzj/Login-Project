import 'react';
import userTableStyles from './UserTable.module.css'; // Import the styles
import axios from 'axios';
import { useEffect, useState } from "react";
import Modal from "react-modal"; // Importing react-modal library

// API URL to fetch users
const ShowUserBlogs = 'http://localhost:5000/auth/getAllUsers';

const UserTable = () => {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const res = await axios.get(ShowUserBlogs);
      setUser(res.data);
    } catch (error) {
      setError('Error, could not show the users');
      console.error(error);
    }
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/auth/updateUser/${currentUser.user_id}`, currentUser);
      setUser(users.map(user => (user.user_id === currentUser.user_id ? currentUser : user)));
      setIsModalOpen(false);
    } catch (error) {
      setError('Error, could not update the user');
      console.error(error);
    }
  };

  const handleDelete = async (user_id) => {
    try {
      await axios.delete(`http://localhost:5000/auth/deleteUser/${user_id}`);
      setUser(users.filter(user => user.user_id !== user_id));
    } catch (error) {
      setError('Error, could not delete the user');
      console.error(error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  return (


    <div className={userTableStyles.pageContainer}>
      <div className={userTableStyles.tableContainer}>
        <h2 className={userTableStyles.pageTitle}>User List</h2>
        {error && <div className="alert alert-danger">{error}</div>}
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
                  <button
                    className={userTableStyles.editButton}
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className={userTableStyles.deleteButton}
                    onClick={() => handleDelete(user.user_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit User"
        className={userTableStyles.modal}
        overlayClassName={userTableStyles.overlay}
      >
        <h2>Edit User</h2>
        {currentUser && (
          <form className={userTableStyles.form}>
            <div className={userTableStyles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={currentUser.name}
                onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
              />
            </div>
            <div className={userTableStyles.formGroup}>
              <label htmlFor="last_name">Last Name:</label>
              <input
                id="last_name"
                type="text"
                value={currentUser.last_name}
                onChange={(e) => setCurrentUser({ ...currentUser, last_name: e.target.value })}
              />
            </div>
            <div className={userTableStyles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={currentUser.email}
                onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
              />
            </div>
            <div className={userTableStyles.buttonGroup}>
              <button type="button" className={userTableStyles.saveButton} onClick={handleSave}>
                Save
              </button>
              <button type="button" className={userTableStyles.cancelButton} onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default UserTable;
