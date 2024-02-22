import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


function Nav() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <NavLink to={'/'}>
        <Navbar.Brand >Shopping</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavLink to={'/cart'} style={{fontSize: "2rem"}}>
            <FaShoppingCart /> <span>{cartProducts.length}</span>
            </NavLink>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;