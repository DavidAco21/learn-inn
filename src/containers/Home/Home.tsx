import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Home.css';
import {useGlobalContext, UserContext} from '../../utils/UserContext';


interface HomeProps{

    
}

export const Home: React.FC<HomeProps> = ({ }) => {

   const {text} = useGlobalContext();

    return <div>
         <p className= "titleHome" >{} Bienvenido {text}</p>

   
        </div>

        

}
