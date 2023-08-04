/* React Hooks */
import { useState, useEffect } from "react";

/* Bootstrap */
import { Navbar, Nav, Container } from "react-bootstrap";

/* Assets and style */
import logo from "../assets/img/logo.png";
import "./styles/NavBar.css";

export function NavBar() {
  /* Hooks */
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* Scroll settings */
  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active link function
  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  return (
    /* Navbar tag */
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      {/* Navbar main container */}
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Toggle btn */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Toggle btn options */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#officers"
              className={
                activeLink === "officers" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Officers
            </Nav.Link>
            <Nav.Link
              href="#activities"
              className={
                activeLink === "activities"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Activities
            </Nav.Link>
            <Nav.Link
              href="#sponsors"
              className={
                activeLink === "sponsors" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Sponsors
            </Nav.Link>
            <Nav.Link
              href="#calendar"
              className={
                activeLink === "calendar" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Calendar
            </Nav.Link>
          </Nav>

          {/* Social media links */}
          <span className="navbar-text">
            {/* Join btn */}
            <button className="vvd">
              <span>Join CSEC</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
