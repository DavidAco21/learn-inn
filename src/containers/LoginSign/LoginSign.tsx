import React, { useContext, useState, } from 'react';
import { Signup } from '../Signup/Signup';
import { Route, useHistory} from 'react-router-dom';
import image_professor from '/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/profesor.png'
import image_student from '/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/estudiante.png'
import { UserContext } from '../../utils/UserContext';


interface LoginSignProps {



}

export const LoginSign: React.FC<LoginSignProps> = () => {
    
    const {text, profesor, setProfesor} = useContext(UserContext);

    const history = useHistory();

    const handleLogin = () => {
       
        history.push('/home');
        

        
   }
    return(<>
    


    <Signup 
    user = {profesor ? "Profesor" : "Estudiante" }
    nameButton = {profesor ? "Estudiante" : "Profesor" }
    image = {profesor ? image_professor : image_student}
    onLoginClick={handleLogin}>
    </Signup>

    </>

    )}