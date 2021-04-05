import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Configuration.css';


interface ConfigurationProps{
    
}

export const Configuration: React.FC<ConfigurationProps> = ({ }) => {

    return (<div className = "configuration">
         <p className= "title-configuration" > Personaliza a Learn-In </p>
   
        </div>

        
    )}