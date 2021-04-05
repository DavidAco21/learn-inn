import React from 'react';
import { NavBarItem } from '../../utils/NavBarItem';


export const NavBarInfo: NavBarItem[] = [
    {
      
      path: '/home',
      icon: <i className="pi pi-home " style={{'fontSize': '1.5em'} }></i> ,
      cName: 'nav-icon'
    },

    {
      path: '/courses' ,
      icon: <i className="pi pi-book " style={{'fontSize': '1.5em'}}></i> ,
      cName: 'nav-icon',
      
      },
  
    {
      path: '/community',
      icon: <i className="pi pi-comments " style={{'fontSize': '1.5em'} }></i> ,
      cName: 'nav-icon'
    },
    {
      path: '/configuration',
      icon:  <i className="pi  pi-cog " style={{'fontSize': '1.5em'} }></i> ,
      cName: 'nav-icon'
    },
    {
    
      path: '/#',
      icon: <i className="pi   pi-sign-out" style={{'fontSize': '1.5em'} }></i>,
      cName: 'nav-icon'
    },
  ];