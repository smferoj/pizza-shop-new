import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/logo.jpeg'
function NavBar() {
  // const dispatch = useDispatch();
  // const cartState = useSelector(state=>state.cartReducer)
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Image src={logo} alt="logo" style={{height:'50px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>


            {/* <LinkContainer to="/cart">
              <Nav.Link>Cart{cartState.cartItems.length}</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
