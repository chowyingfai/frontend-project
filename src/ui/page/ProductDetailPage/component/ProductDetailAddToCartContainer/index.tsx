import QuantitySelector from "../../../../component/QuantitySelector";
import {Button} from "react-bootstrap";
import {useState} from "react";
// import propTypes = ThemeProvider.propTypes;
// import {Props} from "@fortawesome/react-fontawesome";
import {ProductDetailDto} from "../../../../../data/product/productDetailDto.type.ts";

type Props = {
    dto: ProductDetailDto
}

export default function ProductDetailAddToCartContainer({dto}:Props){
    const [quantity, setQuantity] = useState<number>(1);

    const handleMinus = () =>{
        if(quantity >1) {
            setQuantity((prevState) =>(prevState -1))
            }
        }
    const handlePlus =() =>{
        if(dto.stock > quantity){
            setQuantity((prevState) =>(prevState+1))
        }

    }

    return(
        <div className={"d-flex"}>
            <QuantitySelector quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/>
            <div className={"ms-3"}>
            <Button className={"d-flex justify-content-center align-items-center"}
                    style={{ width:90 ,height:30, backgroundColor:"grey"} }>
                購買
            </Button>
            </div>
        </div>
    )
}