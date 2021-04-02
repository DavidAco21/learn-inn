import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card';

interface BaseModalWrapperProps {
    isModalVisible: Boolean;
    onBackDropClick: () => void;
    
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackDropClick, isModalVisible}) => {

    const [text, setText] = useState('');


    if(!isModalVisible){
        return null
    }
    return(<Modal onBackDropClick = {onBackDropClick}>

                    <Card>
                        <p>Estas ingresando a E-learning</p>
                        <p>Bienvenido {text}</p>
                        <InputText id="popup" value={text} onChange={(e) => setText(text)} />
                         <label htmlFor="popup">Tu Nombre</label>
                         <Button label="Continuar" className="p-button-raised p-button-rounded" />  
                    </Card>
    
    
                    </Modal>);
   
}

export default BaseModalWrapper
