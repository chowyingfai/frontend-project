import { BrowserRouter,Route, Routes} from "react-router";
import ProductListingPage from "../../ui/page/ProductListingPage";
import ProductDetailPage from "../../ui/page/ProductDetailPage";
import LoginPage from "../../ui/page/LoginPage";
import ErrorPage from "../../ui/page/ErrorPage";

export default function ReactRouterRoutesConfig(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductListingPage/>}/>
                <Route path="/product/:productId" element={<ProductDetailPage/>}/>
                {/*//         <Route path="/shoppingcart" element={<ShoppingCart/>}/>*/}
                <Route path="/login" element={<LoginPage/>}/>
                {/*//         <Route path="/checkout/:transactionId" element={<Checkout/>}/>*/}
                {/*//         <Route path="/thankyou" element={<ThankYou/>}/>*/}
                <Route path="/errorpage" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}