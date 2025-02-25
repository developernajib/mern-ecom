import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<header className="py-3">
			<Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/" className="fw-bold">
						<img src={logo} alt="MernEcommerce" height="30" className="me-2" />
						MernEcommerce
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="/cart"
								className="d-flex align-items-center"
							>
								<FaShoppingCart className="me-2" />
								Cart
							</Nav.Link>
							<Nav.Link
								href="/login"
								className="d-flex align-items-center"
							>
								<FaUser className="me-2" />
								Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
