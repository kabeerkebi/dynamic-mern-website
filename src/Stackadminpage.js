import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";


const Stackpage = () => {
  return (
    <div>
         <Navbar className="background" expand="lg">

<Container>
  <Navbar.Toggle aria-controls="navbarNav" />
  <Navbar.Collapse id="navbarNav">
    <Nav className="ml-auto text2">
      <Nav.Link className="nav-link-item" as={Link} to="/edithome">
        edit home
      </Nav.Link>
      <Nav.Link className="nav-link-item" as={Link} to="/editabout">
        edit about
      </Nav.Link>
      <Nav.Link className="nav-link-item" as={Link} to="/editcourses">
        edit course
      </Nav.Link>
      <Nav.Link className="nav-link-item" as={Link} to="/editcontact">
        edit contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>












       
    </div>
  );
};

export default Stackpage;

