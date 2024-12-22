
import { createRoot } from 'react-dom/client'
import './index.css'
// import Routes from "../my-react-router-app/app/routes.ts";
import {BrowserRouter, Route, Routes} from "react-router";
import ProductListingPage from "./ui/page/ProductListingPage";
import ProductDetailPage from "./ui/page/ProductDetailPage";
import 'bootstrap/dist/css/bootstrap.min.css'
import ErrorPage from "./ui/page/ErrorPage";
// import ProductListing from "./ui/page/ProductListing";
// import ProductDetail from "./ui/page/ProductDetail";
// import ShoppingCart from "./ui/page/ShoppingCart";
// import LoginPage from "./ui/page/LoginPage";
// import Checkout from "./ui/page/Checkout";
// import ThankYou from "./ui/page/ThankYou";


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

     <BrowserRouter>
    <Routes>
        <Route path="/" element={<ProductListingPage/>}/>
        <Route path="/product/:productId" element={<ProductDetailPage/>}/>
{/*//         <Route path="/shoppingcart" element={<ShoppingCart/>}/>*/}
{/*//         <Route path="/login" element={<LoginPage/>}/>*/}
{/*//         <Route path="/checkout/:transactionId" element={<Checkout/>}/>*/}
{/*//         <Route path="/thankyou" element={<ThankYou/>}/>*/}
        <Route path="/errorpage" element={<ErrorPage/>}/>
//     </Routes>
// </BrowserRouter>



)
