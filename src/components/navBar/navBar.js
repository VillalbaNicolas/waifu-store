import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./cartWidget.js";

const NavBar = ({cartProducts}) => {
    return(
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Waifu Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
     <CartWidget cartProducts = {cartProducts}/>
    </Navbar>
    )
}


export default NavBar;