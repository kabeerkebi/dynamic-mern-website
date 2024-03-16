import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import About from "./pages/About";  
import logo from "./pages/logo.png";
import Stackadminpage from "./Stackadminpage";
import Editabout from "./adminpages/Editabout";
import Editcourses from "./adminpages/Editcourses";
import Edithome from "./adminpages/Edithome";
import Editcontact from "./adminpages/Editcontact";

const Stackpage = () => {
  return (
    <div>
      <Navbar className="background" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="mt-3" src={logo} alt="Logo" width="20%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto text2">
              <Nav.Link className="nav-link-item" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link-item" as={Link} to="/courses">
                Courses
              </Nav.Link>
              <Nav.Link className="nav-link-item" as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="nav-link-item" as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={< Courses/>} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={< Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Stackadminpage />} />
        <Route path="/editabout" element={<Editabout />} />
        <Route path="/editcourses" element={<Editcourses />} />
        <Route path="/edithome" element={<Edithome />} />
        <Route path="/editcontact" element={<Editcontact />} />





      </Routes>
    </div>
  );
};

export default Stackpage;
