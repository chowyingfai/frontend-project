import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";
type Props = {
    quantity:number,
    handlePlus : () => void,
    handleMinus : () =>void,
    isLoading?:boolean
}
    const btnWidth = 30;
    const btnHeight = 30;

export default function QuantitySelector({
                quantity,
                handlePlus,
                handleMinus,
                isLoading=false
                            }:Props) {

    return (
        <div className={"d-flex"}>
            <Button className={"d-flex justify-content-center align-items-center"}
                    style={{width: btnWidth, height: btnHeight, backgroundColor: "red"}}
                    variant={"success"}
                    onClick={handlePlus}
                    disabled={isLoading}
            >
                <FontAwesomeIcon icon={faPlus} beatFade style={{color: "white"}}/>
            </Button>

            <div className={"d-flex justify-content-center align-items-center"}
                 style={{width: btnWidth, height: btnHeight, border: "black 1px solid"}}>

                {
                    isLoading ? <Spinner />:quantity

                }
            </div>
            <Button className={"d-flex justify-content-center align-items-center"}
                    style={{width: btnWidth, height: btnHeight, backgroundColor: "green"}}
                    variant={"success"}
                    onClick={handleMinus}
                    disabled={isLoading}
            >
                <FontAwesomeIcon icon={faMinus} beatFade style={{color: "white"}}/>

            </Button>
        </div>
    );
}