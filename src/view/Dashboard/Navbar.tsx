import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

interface IProps {
    name: string,
    onProfileClick:any
}

function DashboardNavBar({ name , onProfileClick}: IProps) {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <Navbar bg="light" >
            <Container>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <div className='d-flex justify-content-between align-center w-100'>
                    <Navbar.Brand className='fw-bold fs-larger fs-3' href="#home">Skrate</Navbar.Brand>
                    <div>
                        <Button className='btn btn-primary me-2' onClick={logOut}>Log out</Button>
                        <Navbar.Brand onClick={onProfileClick} className='fw-bold fs-larger fs-3' href="#home">{name}</Navbar.Brand>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}

export default DashboardNavBar;