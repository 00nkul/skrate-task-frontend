import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarLoginPage() {
    return (
        <Navbar bg="light" >
            <Container>
                <Navbar.Brand className='fw-bold fs-larger fs-3' href="#">Skrate</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarLoginPage;