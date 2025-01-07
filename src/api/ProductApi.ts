import axios from "axios";
import {GetAllProductDto} from "../data/product/getAllProduct.type.ts";
import {ProductDetailDto} from "../data/product/productDetailDto.type.ts";
import getEnvConfig from "../config/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl;

export async function getAllProduct(){
    const response = await axios.get<GetAllProductDto[]>(`${baseUrl}/public/product`);
    return response.data;
}
export async function getProductDetail(pid:string){
    const response = await axios.get<ProductDetailDto>(`${baseUrl}/public/product/${pid}`);
    return response.data;
}