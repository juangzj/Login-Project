import "react";
import userTableStyles from './UserTable.module.css'; // Import the styles

const UserTable = () => {
  const users = [
    { id: 1, name: "Juan", lastName: "Pérez" },
    { id: 2, name: "María", lastName: "Gómez" },
    { id: 3, name: "Carlos", lastName: "López" },
  ];

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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>
                  <button className={userTableStyles.editButton}>Edit</button>
                  <button className={userTableStyles.deleteButton}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
