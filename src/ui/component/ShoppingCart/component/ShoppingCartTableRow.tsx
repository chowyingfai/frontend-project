import QuantitySelector from "../../QuantitySelector";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {CartItemDto} from "../../../../data/cartItem/cartItem.type.ts";

type Props ={
    dto:CartItemDto
}


export default function ShoppingCartTableRow({dto}:Props){
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
                                  handlePlus={() => {

                                  }}
                                  handleMinus={() => {

                                  }}
            /></td>
            <td>${(dto.cartQuantity * dto.price).toLocaleString()}</td>
            <td><Button variant={"danger"}>
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#f5f4f4",}} />
            </Button></td>
        </tr>
    );
}