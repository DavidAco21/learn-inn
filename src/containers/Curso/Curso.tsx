import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Paper,
} from "@material-ui/core";

import { CardCursos } from "../../components/CardCursos/CardCursos";
import { CoursesData } from "../../components/CoursesPreview/CoursesData";
import { useParams } from "react-router";


interface CursoProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      width: "100%",
      margin: "0px",
    },

    Paper: {
      padding: theme.spacing(2),
    },

    top: {
        marginTop: "2em",
        marginLeft: "15em"
    }
  })
);

export const Curso: React.FC<CursoProps> = () => {

  const classes = useStyle();
  
  const {id} = useParams<{ id : string}> ();
  const course = CoursesData.find(item => item.id== parseInt(id));
  

  return (

    <Grid container className={classes.grid}>
        <Grid item lg={6}
        direction="row"
        className = {classes.top}
        alignContent= "center">
        <CardCursos 
            icon={course?.icon}
            title={course?.title}>


        </CardCursos>

        </Grid>
       
        
    </Grid>
  );
};
