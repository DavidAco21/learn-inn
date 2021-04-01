import React from 'react';
import './Login.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import image_professor from '/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/profesor.png'
import image_student from '/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/estudiante.png'
import { UserLogin } from '../../components/UserLogin/UserLogin';


export const Login = () => {

    return <div className = "login"> 
   
   <div className = "titles">
        <h1 className = "title_login"> Inicia Sesión en Learn-In </h1>
        <h1 className = "subtitle_login"> Elige tu rol</h1>
    </div>



        <div className = "users">
            <UserLogin image = {image_professor}
            user = "Profesor"
            content = {"Crea contenido interactivo y" + '\n' + "revisa estadísticas de clase." }>
            </UserLogin>

        <div className = "student">
        <UserLogin image = {image_student}
            user = "Estudiante"
            content = "Interactua con tu profesor y otros estudiantes en vivo. " >
            
            </UserLogin>
        </div>
            
        </div>



       

    </div>
}
