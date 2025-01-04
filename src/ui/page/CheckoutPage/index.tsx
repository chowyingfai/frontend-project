import CheckoutTable from "./component/CheckoutTable";
import Container from "react-bootstrap/Container";
import TopNavBarForCheckout from "../../component/TopNavBarForCheckout";
import {Button} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {TransactionDto} from "../../../data/transaction/transactionDto.type.ts";
import LoadingContainer from "../../component/LoadingContainer";
import {useNavigate, useParams} from "react-router-dom";
import * as TransactionApi from "../../../api/TransactionApi.ts"
import {LoginUserContext} from "../../../context/loginUserContext.ts";

type Params = {
    transactionId:string
}
export default function CheckoutPage(){
    const {transactionId}  = useParams<Params>();
    const navigate = useNavigate();
    const loginUser = useContext(LoginUserContext)
    const[dto,setDto] = useState<TransactionDto | undefined>(undefined);
    const[isLoading, setIsLoading] = useState<boolean>(true);
    const [isChecking, setIsChecking] = useState<boolean>(false);

    const fetchDto = async() =>{
        try{
            if(transactionId){
                const responseData = await TransactionApi.getTransactionByTid(transactionId);
                setDto(responseData);
                setIsLoading(false);
            }
        }catch(errorPage){
            console.error(errorPage);
            navigate("/errorPage");
        }
    }

    const handleFinishTransaction = async () =>{
        try{
            setIsChecking(true);
            if(transactionId){
                await TransactionApi.finishTransaction(transactionId);
                navigate("/thankyou");
            }
        } catch{
            navigate("/errorPage");
        }
    }


    useEffect(() => {
        if(loginUser){
            fetchDto();
        }
    }, [loginUser]);
    return(
        <>
            <TopNavBarForCheckout/>
            <Container>
                <h1> CheckOut</h1>

                {
                    dto && !isLoading
                    ? (
                        <>

                            <CheckoutTable dto={dto}/>
                            <div className={"d-flex justify-content-end "}>
                            <h2> Total : ${dto.total.toLocaleString()}</h2>
                            <Button disabled={isChecking}
                                    onClick={handleFinishTransaction}
                                    variant={"success"}>付款！
                            </Button>
                            </div>
                        </>
                        ):(
                            <LoadingContainer/>
                        )
                }




            </Container>

        </>
    );

}