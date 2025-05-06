import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Display">Display</Nav.Link>
                        <Nav.Link as={Link} to="/Insert">Insert</Nav.Link>
                        <Nav.Link as={Link} to="/Update">Update</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
