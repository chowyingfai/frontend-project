import {Container} from "react-bootstrap";
import TopNavBar from "../../component/TopNavBar";
import ProductCardGrid from "../../component/ProductCardGrid";
import {GetAllProductDto} from "../../../data/product/getAllProduct.type.ts";
import {useEffect, useState} from "react";
import LoadingContainer from "../../component/LoadingContainer";
import * as ProductApi from "../../../api/ProductApi.ts";
import AdvertiseBanner from "../../component/AdvertiseBanner.tsx";

export default function ProductListingPage(){
        const[dtoList,setDtoList] = useState<GetAllProductDto[] | undefined>(undefined);
        const[isLoading,setIsLoading] = useState(true);

        const fetchDtoList = async () =>{
                const responseData = await ProductApi.getAllProduct();
                setDtoList(responseData);
                setIsLoading(false);
        }

        useEffect(() =>{
               fetchDtoList();
        },[]);
        return(
            <>
                <TopNavBar/>
                  <div style={{ marginBottom: "20px" }} >
                 <AdvertiseBanner/>
                    </div>
                <Container >
                        {

                             (!isLoading && dtoList) ?
                            <ProductCardGrid dtoList={dtoList}/>
                             :<LoadingContainer/>

                        }

                </Container>

            </>
        )

}


