import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
type Props = {
    quantity:number,
    handlePlus : () => void,
    handleMinus : () =>void

}
    const btnWidth = 30;
    const btnHeight = 30;
export default function QuantitySelector({
                quantity,
                handlePlus,
                handleMinus }:Props) {

    return(
        <div className={"d-flex"}>
            <Button className={"d-flex justify-content-center align-items-center"}
                    style={{ width:btnWidth , height : btnHeight ,backgroundColor:"red" }}
                    variant={"success"} onClick={handlePlus}>
                <FontAwesomeIcon icon={faPlus} beatFade style={{color: "white"}}/>
            </Button>

            <div className={"d-flex justify-content-center align-items-center"}
                 style={{width:btnWidth, height:btnHeight, border:"black 1px solid"}}> {quantity} </div>

            <Button className={"d-flex justify-content-center align-items-center"}
                    style={{ width:btnWidth , height : btnHeight ,backgroundColor:"green" }}
                    variant={"success"} onClick={handleMinus}>
                <FontAwesomeIcon icon={faMinus} beatFade style={{color: "white"}} />

            </Button>
        </div>
    );
}