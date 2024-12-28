import {createContext} from "react";
import {UserData} from "../data/user/user.type.ts";

export const LoginUserContext  = createContext<UserData | null | undefined>(undefined);
