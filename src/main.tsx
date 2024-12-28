
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as FirebaseAuthService from "./authService/FirebaseAuthService";
import App from "./App.tsx";
// import ProductListing from "./ui/page/ProductListing";
// import ProductDetail from "./ui/page/ProductDetail";
// import ShoppingCart from "./ui/page/ShoppingCart";
// import LoginPage from "./ui/page/LoginPage";
// import Checkout from "./ui/page/Checkout";
// import ThankYou from "./ui/page/ThankYou";

FirebaseAuthService.serviceInit();

createRoot(document.getElementById('root')!).render(
    <App/>
)
