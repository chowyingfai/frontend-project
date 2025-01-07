import axios from "axios";
import {CartItemDto} from "../data/cartItem/cartItem.type.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import getEnvConfig from "../config/EnvConfig.ts";


const baseUrl = getEnvConfig().baseUrl;

export async function getUserCart(){
      const response = await axios.get<CartItemDto[]>(
          `${baseUrl}/cart`,
        await FirebaseAuthService.getAuthConfig()
         )
    return response.data;
}

export async function putCartItem(pid:number , quantity:number){
    await axios.put(
        `${baseUrl}/cart/${pid}/${quantity}`,
    undefined,
    await FirebaseAuthService.getAuthConfig()
    )
}

export async function patchCartItemQuantity(pid:number , quantity:number){
await axios.patch(
    `${baseUrl}/cart/${pid}/${quantity}`,
    undefined,
    await FirebaseAuthService.getAuthConfig()
)
}


export async function deleteCartItem(pid:number){
    await axios.delete(
        `${baseUrl}/cart/${pid}`,
        await FirebaseAuthService.getAuthConfig()
    )
}