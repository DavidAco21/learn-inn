import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './UserLogin.css'
import { Button } from 'primereact/button'
import CSS from 'csstype'
import Popup from 'reactjs-popup';
import BaseModalWrapper from '../Modal/BaseModalWrapper';
import { Route, useHistory} from 'react-router-dom';
import { Home } from '../../containers/Home/Home';

interface UserLoginProps{

    image:  string;
    user:   string;
    content: string; 
    onLoginClick: () => void;
   
}

export const UserLogin: React.FC<UserLoginProps> = ({ image, user, content, onLoginClick}) => {


    const [isModalVisible, setIsModalVisible] = useState(false)

    const toggleModal = () => {
        setIsModalVisible(wasModalVisible =>  !wasModalVisible)
      }


    
    return (<div className="card_login"> 
    
        <img className = "image_login" src={image} alt=""/>

                <div className = "text_daddy">
                    <p className = "user_text">  {user}  </p> 
                     <p className = "user_description"> {content} </p>
            
                     <Button label="Ingresar" className="p-button-raised p-button-rounded" onClick = {toggleModal} />
                     
                     <BaseModalWrapper user = {user} isModalVisible={isModalVisible} onBackDropClick={toggleModal} 
                     onLoginClick = {onLoginClick} />
            

                </div>


    </div>)


    
}
