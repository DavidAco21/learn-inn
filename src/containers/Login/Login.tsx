import React, { useState, useRef } from 'react';
import './Login.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import image_professor from '/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/profesor.png'
import image_student from '/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/estudiante.png'
import { UserLogin } from '../../components/UserLogin/UserLogin';

import userEvent from '@testing-library/user-event';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card';
import { Route, useHistory} from 'react-router-dom';
import { Home } from '../../containers/Home/Home';
import { UserContext } from '../../utils/UserContext';



interface LoginProps{

    name: string;
   
}

export const Login: React.FC<LoginProps> = ({name}) => {

    const [text, setText] = useState('');

    const history = useHistory();


    const toggleLogin = () => {
       
         history.push('/home');
         
    }


    return <div className = "login"> 

   <div className = "titles">
        <h1 className = "title_login"> Inicia Sesión en Learn-In </h1>
        <h1 className = "subtitle_login"> Elige tu rol</h1>
    </div>

        <div className = "users">
            
            <UserLogin image = {image_professor}
            user = "Profesor"
            content = {"Crea contenido interactivo y" + '\n' + "revisa estadísticas de clase." }
            onLoginClick = {toggleLogin}>
            
            </UserLogin>

            

        <div className = "student">
        <UserLogin image = {image_student}
            user = "Estudiante"
            content = "Interactua con tu profesor y otros estudiantes en vivo. " 
            onLoginClick = {toggleLogin}>

            </UserLogin>
        
        </div>
        
            
        </div>


    </div>








}




