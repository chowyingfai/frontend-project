import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "react-bootstrap";

export default function TopNavBar(){

    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary mb-4"  >
                <Container>
                    <Navbar.Brand>Pet Pet World</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="light">Login</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}