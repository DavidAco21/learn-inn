
import { createContext, useContext} from "react";

export type UserContextType = {
    text:string,
    setText: (text: string)=> void,
    profesor? : boolean,
    setProfesor: (profesor: boolean) => void,

   
    
    
}


export const UserContext = createContext<UserContextType>({
    text: " ",
    setText : () => {},

    profesor: true,
    setProfesor : () => {},


    },
   
 
)



