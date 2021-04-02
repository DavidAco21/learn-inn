import React, { useState } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './UserLogin.css'
import { Button } from 'primereact/button'
import CSS from 'csstype'
import { PopUpLogin } from '../../components/PopUpLogin/PopUpLogin';
import Popup from 'reactjs-popup';
import BaseModalWrapper from '../Modal/BaseModalWrapper';



interface UserLoginProps{

    image:  string;
    user:   string;
    content: string;  
    OnButtonClick: () => void;
   
}


export const UserLogin: React.FC<UserLoginProps> = ({ image, user, content, OnButtonClick}) => {

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
                     
                     <BaseModalWrapper isModalVisible={isModalVisible} onBackDropClick={toggleModal}/>
            

                </div>

                




    </div>)


    
}
