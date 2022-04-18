import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/pricing">
              Pricing
            </Nav.Link>
            <Nav.Link as={Link} to="/testimonial">
              Testimonials
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <Button
                onClick={handleLogOut}
                as={Link}
                to="/login"
                className="appoint-btn"
                size="lg"
              >
                Sign Out
              </Button>
            ) : (
              <Button as={Link} to="/login" className="appoint-btn" size="lg">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
