import axios from "axios";
import {GetAllProductDto} from "../data/product/getAllProduct.type.ts";

const baseUrl = "http://localhost:8080";
export async function getAllProduct(){
    const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/product`);
    return response.data;
}