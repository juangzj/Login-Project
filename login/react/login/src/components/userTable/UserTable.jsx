import { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserTable.css"; // Import the custom CSS file

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ id: "", name: "", email: "" });

  // Fetch user data on component load
  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission for adding or updating users
  const handleSubmit = () => {
    if (formData.id) {
      // Update existing user
      axios.put(`http://localhost:5000/api/users/${formData.id}`, formData).then(() => {
        setUsers((prev) =>
          prev.map((user) => (user.id === formData.id ? formData : user))
        );
      });
    } else {
      // Add new user
      axios.post("http://localhost:5000/api/users", formData).then((response) => {
        setUsers([...users, response.data]);
      });
    }
    setShowModal(false);
    setFormData({ id: "", name: "", email: "" });
  };

  // Handle user deletion
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/users/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  // Open modal for adding or editing users
  const openModal = (user = { id: "", name: "", email: "" }) => {
    setFormData(user);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setFormData({ id: "", name: "", email: "" });
  };

  return (
    <div className="user-table-container">
      <div className="header">
        <button className="custom-button add-button" onClick={() => openModal()}>
          Add User
        </button>
      </div>

      <div className="table-container">
        <table className="custom-table table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="custom-button edit-button"
                    onClick={() => openModal(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="custom-button delete-button"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding or editing user */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{formData.id ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter the name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter the email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="custom-button cancel-button" onClick={closeModal}>
            Cancel
          </button>
          <button className="custom-button save-button" onClick={handleSubmit}>
            {formData.id ? "Update" : "Save"}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserTable;
