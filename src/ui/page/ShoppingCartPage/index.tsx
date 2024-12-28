import TopNavBar from "../../component/TopNavBar";
import Container from "react-bootstrap/Container";
import ShoppingCartTable from "../../component/ShoppingCart/component/ShoppingCartTable.tsx";
import {Button} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {CartItemDto} from "../../../data/cartItem/cartItem.type.ts";
import LoadingContainer from "../../component/LoadingContainer";
import {LoginUserContext} from "../../../context/loginUserContext.ts";
import * as CartItemApi from "../../../api/CartItemApi.ts";
import {useNavigate} from "react-router-dom";

export default function  ShoppingCartPage(){
    const navigate  = useNavigate();
    const loginUser = useContext(LoginUserContext);
    const [dtoList, setDtoList] = useState<CartItemDto[] | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchUserCart =async () =>{
       try {
           const responseData = await CartItemApi.getUserCart();
           setIsLoading(false);
           setDtoList(responseData);
       }catch{
           navigate("/errorpage");
       }
    }

    useEffect(() =>{
       if(loginUser){
           fetchUserCart();
       }
       else if(loginUser === null){
           navigate("/login")
       }
    },[loginUser])

    const calTotal = (dtoList: CartItemDto[]) => {
        let total = 0; // 初始化總和變量
        for (let i = 0; i < dtoList.length; i++) {
            const cartItemDto = dtoList[i];
            total = total + cartItemDto.cartQuantity * cartItemDto.price;
        }
        return total;
    };

    // const calTotal = (dtoList:CartItemDto[]) =>{
    //
    //    return dtoList.reduce((previousValue, cartItemDto) =>(
    //         previousValue + cartItemDto.cartQuantity *cartItemDto.price
    //     ),0);
    // }



    const renderShoppingCart = () =>{
        if(!isLoading && dtoList){
            if(dtoList.length ===0){
                return(
                    <h1> Your shopping cart is empty !</h1>
                );
            }
           return(
               <>
                   <ShoppingCartTable dtoList={dtoList}/>
                   <div className={"d-flex justify-content-end"}>
                     <td>
                      <h2>Total : ${calTotal(dtoList).toLocaleString()}</h2>
                      <Button variant={"success"}><h4>確定付款！</h4></Button>
                     </td>
                 </div>
               </>
           );
        }else{
            return(
                <>
            <LoadingContainer/>
                </>
            )
        }
    }

    return(
        <>
            <TopNavBar/>
            <Container>
                <h1>Shopping Cart </h1>
                {renderShoppingCart()}
            </Container>
        </>
    );

}