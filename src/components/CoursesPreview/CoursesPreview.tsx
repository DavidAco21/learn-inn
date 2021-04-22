import React, { FC, useContext, useState } from "react";
import { Link, Route, useParams } from "react-router-dom";
import { CoursesData } from "./CoursesData";
import "./CoursesPreview.css";
import Avatar from "@material-ui/core/Avatar";
import { Card, createStyles, makeStyles, Theme } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import { UserContext } from "../../utils/UserContext";
import { Curso } from "../../containers/Curso/Curso";

interface CoursesPreviewProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      width: "100%",
      margin: "0px",
      
    },

    avatar: {
      backgroundColor: theme.palette.primary.main,
    },

    h1: {
      fontSize: "1.3rem",
    },
  })
);

export const CoursesPreview: FC<CoursesPreviewProps> = ({}) => {
  const classes = useStyle();

  const [select, setSelect] = useState(false);


  const showSelect = () => setSelect(!select);

    //const {id} = useParams<{ id : string}> ();

  
   //const course = CoursesData.find(item => item.id == parseInt(id));
    
  

  

  return (
    <>
      <div className="nav-courses-items">
        <p className="title">Tus clases </p>
        {CoursesData.map((item) => {
          return (
            <li key={item.id} className={item.cName}>
              <Link to={`${item.path}${item.id}`}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {item.icon}
                      </Avatar>
                    }
                    title={
                      <Typography
                        variant="h2"
                        color="initial"
                        className={classes.h1}
                      >
                        {item.title}
                      </Typography>
                    }
                  />
                </Card>
              </Link>
            </li>
           
          );
     
        })}


       
      </div>
    </>
  );
};
