import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavLinks() {

return (
<Container>
<Navbar.Brand href="/">Farminsight</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="me-auto">
<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/forum">Forum</Nav.Link>
<Nav.Link href="/blogpost">Blogpost</Nav.Link>
<Nav.Link href="/blog">Blog</Nav.Link>
<Nav.Link href="/Gallery">Gallery</Nav.Link>
<Nav.Link href="/About Us">AboutUs</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
)
}

export default NavLinks;