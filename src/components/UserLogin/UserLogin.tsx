import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './UserLogin.css'
import { Button } from 'primereact/button'
import CSS from 'csstype'



interface UserLoginProps{
    image:  string;
    user: string;
    content: string;  
   
}


export const UserLogin: React.FC<UserLoginProps> = ({ image, user, content, }) => {

  

    return (<div className="card_login"> 
        <img className = "image_login" src={image} alt=""/>

                <div className = "text_daddy">
                    <p className = "user_text">  {user}  </p> 
                     <p className = "user_description"> {content} </p>
            
                     <Button label="Ingresar" className="p-button-raised p-button-rounded"  />

                </div>
        
       
           

 

    </div>)
    
}