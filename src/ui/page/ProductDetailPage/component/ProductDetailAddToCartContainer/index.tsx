import QuantitySelector from "../../../../component/QuantitySelector";
import {Button} from "react-bootstrap";
import {useState} from "react";
// import propTypes = ThemeProvider.propTypes;
// import {Props} from "@fortawesome/react-fontawesome";
import {ProductDetailDto} from "../../../../../data/product/productDetailDto.type.ts";
import * as CartItemApi from "../../../../../api/CartItemApi.ts";
import {useNavigate} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

type Props = {
    dto: ProductDetailDto
}

export default function ProductDetailAddToCartContainer({dto}:Props){
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState<number>(1);
    const [isAddingToCart,setIsAddingToCart] = useState<boolean>(false);
    // eslint-disable-next-line no-empty-pattern
    const[isSuccess,setIsSuccess] = useState<boolean>(false);


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

    const handleAddToCart = async () =>{
        try {
            setIsAddingToCart(true);
            await CartItemApi.putCartItem(dto.pid, quantity)
            setIsAddingToCart(false);
            setIsSuccess(true);
            setTimeout(() =>{
                setIsSuccess(false);
            },7000)
        }catch{
            navigate("/errorpage");
        }
    }


    const renderAddToCartButton = () =>{
        if(dto.stock>0){
            if(isSuccess){
                return(
                    <Button variant={"success"} disabled> 已添加購物車中 </Button>
                );
            }
            if(dto.stock >0){
                if(isAddingToCart){
                    return <Button variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        現在放入購物車中... 請等候...
                    </Button>
                }
            }
            return(
            <Button className={"d-flex justify-content-center align-items-center"}
                    style={{ width:90 ,height:30, backgroundColor:"grey"} } onClick={handleAddToCart}>
                購買
            </Button>
            );
        }

        else{
            return(
                <Button disabled> 無貨賣 </Button>
            );
        }
    }

    return(
        <div className={"d-flex"}>
            <QuantitySelector quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/>
            <div className={"ms-3"}>
                {renderAddToCartButton()}
            </div>
        </div>
    )
}