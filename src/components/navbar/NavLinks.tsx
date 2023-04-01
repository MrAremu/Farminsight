import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <Container>
      <Navbar.Brand as={Link} to="/">Farminsight</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
          <Nav.Link as={Link} to="/blogpost">Blogpost</Nav.Link>
          <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  );
}

export default NavLinks;
