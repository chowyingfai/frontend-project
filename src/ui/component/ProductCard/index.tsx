import {Button, Card} from "react-bootstrap";
import {GetAllProductDto} from "../../../data/product/getAllProduct.type.ts";
import {Link} from "react-router-dom";

type Props = {
    dto:GetAllProductDto
}
export default function ProductCard({dto}:Props){
return(
    <Card className={"mb-3"} style={{width: '18rem' }}>
        <Card.Img variant="top" src={`${dto.imageUrl}`}/>
        <Card.Body>
            <Card.Title style={{height:"6rem"}}>{dto.name}</Card.Title>
            <Card.Text>
                ${dto.price.toLocaleString()}<br/>
                {dto.hasStock ? "有貨" :"賣完了"}
            </Card.Text>
            <Link to={`/product/${dto.pid}`}>
            <Button variant="primary">
                Detail
            </Button>
            </Link>
        </Card.Body>
    </Card>
    )
}