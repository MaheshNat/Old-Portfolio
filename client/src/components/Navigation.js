import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <LinkContainer to="/">
          <Navbar.Brand>Mahesh Natamai</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <Nav.Link
              href={`${process.env.REACT_APP_BASE_URL}/resume-file`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
