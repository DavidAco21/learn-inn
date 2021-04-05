import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card';
import PrimeReact from 'primereact/api';
import { Toast } from 'primereact/toast';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './BaseModalWrapper.css';
import { Route, useHistory } from 'react-router-dom';
import { Home } from '../../containers/Home/Home';
import { UserContext } from '../../utils/UserContext';



interface BaseModalWrapperProps {

    isModalVisible: Boolean;
    onBackDropClick: () => void;
    onLoginClick:  () => void;
    user: string;
 

    
}


const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackDropClick, onLoginClick, isModalVisible, user }) => {

   
    const [text, setText] = useState('');
   
    if(!isModalVisible){
        return null
    }
   
    return(<Modal onBackDropClick = {onBackDropClick} >
                <UserContext.Provider value= {{text}}>
                    <Card className = "card-modal">
                        <div className = "modal" >
                            <div className = "closeBTN"> 
                                <Button onClick = {onBackDropClick} icon="pi pi-times" className=" p-button-rounded p-button-danger p-button-text"/>   
                            </div>
                            <div className = "text-daddy">
                                <p className = "text1">Estas ingresando como {user} </p>
                                <p className = "welcome" >Bienvenido {text}</p>

                            <div className = "input-style">
                                <span className = "p-float-label"> 
                                    <InputText className = "input" id="input_txt" value={text} onChange={(e : any) => 
                                        setText(e.target.value)} />
                                        
                                    <label className = "input-label"htmlFor="input_txt">Tu Nombre Completo</label>
                                </span>
                            </div>
                                
                            <div className = "btn-login">
                                
                                <Button label="Continuar" className="p-button-raised p-button-rounded" onClick={onLoginClick} />  
                            </div>  
                               
                            </div>
                           
                           
                        </div>
                        
                    </Card>
                    </UserContext.Provider>
    
                    </Modal>);
   
}

export default BaseModalWrapper
