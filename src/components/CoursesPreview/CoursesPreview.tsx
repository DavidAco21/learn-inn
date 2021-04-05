import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {CoursesData} from './CoursesData';
import './CoursesPreview.css';

interface CoursesPreviewProps {
   
};

 export const CoursesPreview: FC<CoursesPreviewProps> = ({ }) => {

    const [select, setSelect] = useState(false);

    const showSelect = () => setSelect(!select);


    return (
        <>
         
          <div className='nav-courses-items'> 
          <p className = "title">Tus clases </p>
            {CoursesData.map((item, index) => {
   
              return (
                <li key={index} className={item.cName}  >
                  <Link to={item.path} >
                      
                    <div className = "course-div" >
                         {item.icon} 
                    <span>{item.title}</span>

                    </div>
                    
                  </Link>
                </li>
                
              );
            })}
          </div>
        
    </>)
    }

  