import axios from "axios";
import {CartItemDto} from "../data/cartItem/cartItem.type.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"

const baseUrl = "http://localhost:8080";

export async function getUserCart(){
      const response = await axios.get<CartItemDto[]>(
          `${baseUrl}/cart`,
        await FirebaseAuthService.getAuthConfig()
         )
    return response.data;
}

export async function putCartItem(pid:number , quantity:number){
    await axios.put(`
    ${baseUrl}/cart/${pid}/${quantity}`,
    undefined,
    await FirebaseAuthService.getAuthConfig()
    )
}