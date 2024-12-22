import {Col, Row} from "react-bootstrap";
import ProductCard from "../ProductCard";
import {GetAllProductDto} from "../../../data/product/getAllProduct.type.ts";

type Props = {
    dtoList:GetAllProductDto[];
}

export default function ProductCardGrid({dtoList}:Props){
    return(
    <Row>
    {
       dtoList.map((dto) =>(
            <Col sm={12} md={6} lg={4} xl={3} className='d-flex justify-content-center'>
              <ProductCard dto={dto} key={dto.pid}/>
            </Col>
        ))
    }
    </Row>
    )
}