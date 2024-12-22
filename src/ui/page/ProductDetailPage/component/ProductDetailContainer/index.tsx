import ProductDetailAddToCartContainer from "../ProductDetailAddToCartContainer";
import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../../../data/product/productDetailDto.type.ts";
import LoadingContainer from "../../../../component/LoadingContainer";
import * as ProductApi from "../../../../../api/ProductApi.ts"
import {useNavigate, useParams} from "react-router-dom";

type Pramas = {
    productId :string
}

export default function ProductDetailContainer(){
    const navigate = useNavigate()
    const {productId} = useParams<Pramas>();
    const [dto, setDto] = useState<ProductDetailDto | undefined>(undefined)
    const[isLoading, setIsLoading] = useState<boolean>(true);

    const fetchProductDetail = async () =>{
        if(!productId) {
            navigate("/errorpage")
            }

            try {
                const responseData = await ProductApi.getProductDetail(productId!)
                setDto(responseData);
                setIsLoading(false);
            }
            catch{
                navigate("/errorpage")
            }
   }


    useEffect(() =>{
        fetchProductDetail();
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