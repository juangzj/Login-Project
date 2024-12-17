import 'react';  // Import React correctly
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Navbar.css'; // Importing the CSS file for customization

// NavBar component
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="w-100">
      {/* Login text on the left */}
      <Navbar.Brand href="#login">LOGIN</Navbar.Brand>

      {/* Navbar toggler for smaller screens */}
      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        {/* Use d-flex and justify-content-end to align the logout button to the right */}
        <Nav className="ml-auto d-flex justify-content-end w-100">
          {/* Log Out button on the right */}
          <Button variant="outline-light" className="mr-2">Log Out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
