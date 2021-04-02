import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card';
import Popup from 'reactjs-popup';



interface PopUpLoginProps{
    userPopUp: string;
    
   
}


export const PopUpLogin: React.FC<PopUpLoginProps> = ({ userPopUp }) => {

    const [text, setText] = useState('');


    return (<div className="pop_up"> 

    

                    <Card>
                        <p>Estas ingresando como{userPopUp}</p>
                        <p>Bienvenido {text}</p>
                        <InputText id="popup" value={text} onChange={(e) => setText(text)} />
                         <label htmlFor="popup">Tu Nombre</label>
                         <Button label="Continuar" className="p-button-raised p-button-rounded" />

                        
                    </Card>
                            

    
 

    </div>)
    
}