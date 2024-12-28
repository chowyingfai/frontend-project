import ReactRouterRoutesConfig from "./config/router/ReactRouterRoutesConfig.tsx";
import {useEffect, useState} from "react";
import {UserData} from "./data/user/user.type.ts";
import  * as FirebaseAuthService from "../src/authService/FirebaseAuthService.ts"
import {LoginUserContext} from "./context/loginUserContext.ts";


export default function App(){
  const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined)
  useEffect(() =>{
    FirebaseAuthService.onAuthStateChanged(setLoginUser);
      },[]);


    return(
          <LoginUserContext.Provider value={loginUser}>
          <ReactRouterRoutesConfig/>
          </LoginUserContext.Provider>

    );

}