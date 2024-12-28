import ReactRouterRoutesConfig from "./config/router/ReactRouterRoutesConfig.tsx";
import {useEffect, useState} from "react";
import {UserData} from "./data/user/user.type.ts";
import  * as FirebaseAuthService from "../src/authService/FirebaseAuthService.ts"


export default function App(){
  const [loginUser, setLoginUser] = useState<UserData | null >(null)
  useEffect(() =>{
    FirebaseAuthService.onAuthStateChanged(setLoginUser);
      },[]);


    return(

          <ReactRouterRoutesConfig/>

    );

}