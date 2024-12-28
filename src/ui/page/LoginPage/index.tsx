import TopNavBar from "../../component/TopNavBar";
import './LoginPage.css';
import {Form, Button, Alert, Spinner} from "react-bootstrap";
import React, {useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService"
import {useNavigate} from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const[showLoginFailAlert, setShowLoginFailAlert]= useState<boolean>(false);
    const [isLogining, setIsLogining] = useState<boolean>(false);
    const handleEmailAndPassword = async (event:React.FormEvent<HTMLFormElement>) =>{
        setIsLogining(true);
            event.preventDefault();
            const target = event.target as typeof event.target & {
                email:{value:string};
                password:{value:string};
            };
            const email = target.email.value;
            const password = target.password.value;
            const isLoginSuccess =  await FirebaseAuthService.signInWithEmailAndPassword(email,password);
            setIsLogining(false);
            if(isLoginSuccess){
                 navigate(-1);
             }else{
                setShowLoginFailAlert(true);

             }
}
const renderLoginButton =() =>{
        if(isLogining){
            return (
                <div className={"d-flex justify-content-center align-items-center"}>
                    <Button className={"w-100"} variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading now ...
                    </Button>
                </div>
                    );
                    }else {
                    return(
                    <div className={"d-flex justify-content-center align-items-center"}>
                    <Button className={"w-100"} variant="primary" type="submit">
                        Login
                    </Button>
                </div>
                    );}
}
        return (
            <>
                <TopNavBar/>
                <div className={"d-flex justify-content-center align-items-center p-3"}>
                <div
                    style={{width: "50vw"}}
                    className="border rounded p-3">
                {
                    showLoginFailAlert &&
                    <Alert variant="danger">Login failed , please try again </Alert>
                }

                    <Form onSubmit={handleEmailAndPassword}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password"/>
                        </Form.Group>
                        {renderLoginButton()}

                    </Form>
                </div>
                </div>
            </>
        );
}