import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import {Link} from "react-router-dom";

export default function TopNavBar(){

    return(
        <>
            <Navbar style={{ backgroundColor: '#fbe6e6' }} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <Image src="src/image/logo.jpg" width={"116px"} roundedCircle/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/login">
                            <Button variant="light">Login</Button>
                            </Link>

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}