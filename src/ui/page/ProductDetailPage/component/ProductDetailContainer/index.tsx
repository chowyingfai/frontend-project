import ProductDetailAddToCartContainer from "../ProductDetailAddToCartContainer";
import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../../../data/product/productDetailDto.type.ts";
import LoadingContainer from "../../../../component/LoadingContainer";
import mockData from "../../component/response.json"

export default function ProductDetailContainer(){
    const [dto, setDto] = useState<ProductDetailDto | undefined>(undefined)
    const[isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() =>{
        setDto(mockData)
        setIsLoading(false)
    },[]);

    if(isLoading || dto ===  undefined) {
        return
        <LoadingContainer/>
    }
    return(
            <div>
                <div>
                    <img src={dto.imageUrl}/>
                </div>
                <div style={{whiteSpace:"pre-wrap"}}>
                     <h1>{dto.name}</h1>
                    <h4>{dto.price.toLocaleString()}</h4>
                <p >{dto.description}
                </p>
                    <ProductDetailAddToCartContainer dto={dto} />

                </div>

            </div>


    )

}