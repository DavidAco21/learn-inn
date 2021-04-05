import React from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Login } from '../Login/Login';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../../containers/Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import Nav from '../../components/Nav/Nav';
import Courses from '../Courses/Courses';
import Community from '../Community/Community';
import { CoursesPreview } from '../../components/CoursesPreview/CoursesPreview';
import { Configuration } from '../Configuration/Configuration';
import { UserContext } from '../../utils/UserContext';


export const App = () => {

  

    return <div >

        <BrowserRouter>
           <Nav> 
          <Switch> 
           
            <Route path="/" exact component={Login}/>  
            <Route path="/home" component={Home}/>
            <Route path="/courses"  component={CoursesPreview}/>
            <Route path="/configuration"  component={Configuration}/>

            <Route path="/community" component={Community}/>

           
          </Switch>
          </Nav>
        </BrowserRouter>

      
        <div className = "backgroundApp"/>
       

      </div>

   
}
