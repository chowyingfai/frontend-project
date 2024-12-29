import QuantitySelector from "../../QuantitySelector";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {CartItemDto} from "../../../../data/cartItem/cartItem.type.ts";
import {useState} from "react";
import * as CartItemApi from "../../../../api/CartItemApi.ts"

type Props ={
    dto:CartItemDto,
    handleQuantityChange:(pid:number , quantity:number) =>void
    handleDelete:(pid:number) => void
}


export default function ShoppingCartTableRow({dto,handleQuantityChange,handleDelete}:Props){

    const [isLoading,setIsLoading] = useState<boolean>(false)
    const handleMinus = async () =>{
        setIsLoading(true);
        await CartItemApi.patchCartItemQuantity(dto.pid,dto.cartQuantity-1);
        handleQuantityChange(dto.pid,dto.cartQuantity-1)
        setIsLoading(false);

    }
    const handlePlus = async () =>{
        setIsLoading(true);
        await CartItemApi.patchCartItemQuantity(dto.pid,dto.cartQuantity+1);
        handleQuantityChange(dto.pid,dto.cartQuantity+1)
        setIsLoading(false);
    }
    const handleDeleteButtonClick = async () =>{
        setIsLoading(true);
        await CartItemApi.deleteCartItem(dto.pid);
        handleDelete(dto.pid);
        setIsLoading(false);
    }

    return (
        <tr>
            <td>
                <div>
                    <img height={"200"}
                        src={dto.imageUrl}/>
                </div>
            </td>
            <td>{dto.productName}</td>
            <td>${dto.price.toLocaleString()}</td>
            <td><QuantitySelector quantity={dto.cartQuantity}
                                  handlePlus={handlePlus}
                                  handleMinus={handleMinus}
                                  isLoading={isLoading}
            /></td>
            <td>${(dto.cartQuantity * dto.price).toLocaleString()}</td>
            <td><Button variant={"danger"} disabled={isLoading} onClick={ handleDeleteButtonClick}>
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#f5f4f4",}} />
            </Button></td>
        </tr>
    );
}