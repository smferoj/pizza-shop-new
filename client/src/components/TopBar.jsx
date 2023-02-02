import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdOutlineLocalOffer } from "react-icons/md";
const TopBar = () => {
  return (
      <Navbar d-flex bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light">
            <MdOutlineLocalOffer className="text-warning" /> &nbsp; &nbsp; Free Home Delivery</h6>
          <Nav className="ms-auto">
            <LinkContainer to="/" activeClassName>
              <Nav.Link> Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" activeClassName>
              <Nav.Link> About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" activeClassName>
              <Nav.Link> Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy" activeClassName>
              <Nav.Link> Terms and Policy</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    
  );
};

export default TopBar;
