import React, { useState } from 'react';
import './Login.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import image_professor from '/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/profesor.png'
import image_student from '/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/estudiante.png'
import { UserLogin } from '../../components/UserLogin/UserLogin';
import { PopUpLogin } from '../../components/PopUpLogin/PopUpLogin';
import userEvent from '@testing-library/user-event';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Card } from 'primereact/card';


export const Login = () => {

    const [text, setText] = useState('');


    const handlePopUp = () => {

         <Card>
         <p>Estas ingresando como{"sssss"}</p>
         <p>Bienvenido {text}</p>
         <InputText id="popup" value={text} onChange={(e) => setText(text)} />
          <label htmlFor="popup">Tu Nombre</label>
          <Button label="Continuar" className="p-button-raised p-button-rounded" />

         
     </Card>
             
            
    }


    return <div className = "login"> 

    

   
   <div className = "titles">
        <h1 className = "title_login"> Inicia Sesión en Learn-In </h1>
        <h1 className = "subtitle_login"> Elige tu rol</h1>
    </div>

       

        <div className = "users">
            
            <UserLogin image = {image_professor}
            OnButtonClick = {handlePopUp}
            user = "Profesor"
            content = {"Crea contenido interactivo y" + '\n' + "revisa estadísticas de clase." }>
            </UserLogin>

            

        <div className = "student">
        <UserLogin image = {image_student}
        OnButtonClick = {handlePopUp}
            user = "Estudiante"
            content = "Interactua con tu profesor y otros estudiantes en vivo. " >
            
            </UserLogin>
        </div>
            
        </div>



       

    </div>
}
