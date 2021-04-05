import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {NavBarInfo} from './NavBarInfo';
import CoursesList from '../CoursesList/CoursesList';
import Courses from '../../containers/Courses/Courses';
import styled from 'styled-components';


function NavBar() {

  const [selected, setSelected] = useState(NavBarInfo[0].path);

 
    return (

     <div>
      
        <div className='navBar'>
                <div className = "navItems" >
                { NavBarInfo.map((item, index) => {
                  const itemSelected = selected === item.path;
                 
                
                  return <CoursesList item={item} key={index}/>;
                               
                    })}

                </div>
       
        </div>
        

        
            
        </div>
    )
}

export default NavBar
