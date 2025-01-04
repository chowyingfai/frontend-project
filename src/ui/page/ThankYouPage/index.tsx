import TopNavBar from "../../component/TopNavBar";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import {Link} from "react-router";

export default function ThankYouPage(){
    return(
        <>
            <TopNavBar/>
            <Container>
            <div style={{height: "85vh"}}
                 className={"d-flex justify-content-center " +
                     "align-items-center"}>
                <img height={480} src={"https://img.freepik.com/" +
                    "premium-vector/vector-cute-kitten-th" +
                    "ank-you_864129-453.jpg?semt=ais_hybrid"}
                />
            </div>
                <div className={"d-flex justify-content-center "}>
                    <Link to={"/"}> <Button>回首頁</Button></Link>
                </div>
            </Container>
        </>
    );

}