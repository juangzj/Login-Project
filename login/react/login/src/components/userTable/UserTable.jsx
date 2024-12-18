import "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserTable.css';

const UserTable = () => {
  const users = [
    { id: 1, name: "Juan", lastName: "Pérez" },
    { id: 2, name: "María", lastName: "Gómez" },
    { id: 3, name: "Carlos", lastName: "López" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">User List</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
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
                <button className="btn btn-primary mr-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
