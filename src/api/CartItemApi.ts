import axios from "axios";
import {CartItemDto} from "../data/cartItem/cartItem.type.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"

export async function getUserCart(){
        axios.get<CartItemDto>(
        "http://localhost:8080/cart",
        await FirebaseAuthService.getAuthConfig()
         )
}