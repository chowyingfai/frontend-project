import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Spinner} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {LoginUserContext} from "../../../context/loginUserContext.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"

export default function TopNavBar(){
    const loginUser = useContext(LoginUserContext);

    const renderLoginContainer = () =>{
        if(loginUser){
            return(
                <>
                    <Navbar.Text style={{ color: 'black' }}>
                        {loginUser.email}
                    </Navbar.Text>

                    <Button variant="light">
                        <FontAwesomeIcon icon={faCartShopping} beat />
                    </Button>

                    <Button variant="light" onClick={() =>{
                        FirebaseAuthService.signOut()
                    }} >
                        Logout
                    </Button>
                </>
            );
        } else if(loginUser === null){
            return (
                <Link to="/login">
                    <Button variant="light">Login</Button>
                </Link>
            );
        }
        else{
            return (
                <>
                 <Spinner animation="border" size="sm" />
                 <Spinner animation="border" />
                    </>
            );
        }
    }
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
                            {renderLoginContainer()}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}