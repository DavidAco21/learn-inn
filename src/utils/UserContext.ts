
import { createContext, useContext} from "react";

export type UserContextType = {
    text:string,
}


export const UserContext = createContext<UserContextType>({
    text: "Desconocido",
    
})

export const useGlobalContext = () => useContext(UserContext)

