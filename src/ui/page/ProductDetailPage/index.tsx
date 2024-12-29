import TopNavBar from "../../component/TopNavBar";
import Container from "react-bootstrap/Container";
import ProductDetailContainer from "./component/ProductDetailContainer";


export default function ProductDetailPage(){
    return (
        <>
            <TopNavBar/>
            <Container>
            <ProductDetailContainer/>
            </Container>

        </>
    )
}