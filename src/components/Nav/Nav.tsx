import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Nav.css';

export default function Nav({children}:any) {
    return (
        <div className = "nav-global">
            <NavBar></NavBar>
            {children}
        </div>
    )
}
