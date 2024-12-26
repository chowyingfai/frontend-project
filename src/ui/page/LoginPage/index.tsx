import TopNavBar from "../../component/TopNavBar";
import './LoginPage.css';
import {Form, Button} from "react-bootstrap";

export default function LoginPage() {
    return (
    <>
        <TopNavBar/>
       <div className={"d-flex justify-content-center align-items-center p-3"}>
            <div
                style={{width:"50vw"}} className ="border rounded p-3">

                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <div className={"d-flex justify-content-center align-items-center"}>
                        <Button className={"100"}   variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
       </div>
    </>
    );
}