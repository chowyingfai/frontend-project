import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function TopNavBarForCheckout(){

    return(
        <>
            <Navbar style={{ backgroundColor: '#fbe6e6' }} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        {/*<Image src="src/image/logo.jpg" width="116px" roundedCircle/>*/}
                        <div style={{color:"black"}}> Meou Meou Cat </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}