import React, { useContext, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import image_banner from "../../images/renders/saly.png";
import miniVideo from "../../images/renders/miniVideo.png";
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";
import { CardClasesHome } from "../../components/CardClasesHome/CardClasesHome";
import { CoursesData } from "../../components/CoursesPreview/CoursesData";

interface HomeProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({

    h1: {
      marginLeft: "3rem",
      marginTop: "3rem",
      fontSize: "2rem",
      padding: "0px",
    },

    h2: {
      fontSize: "1.5rem",
      marginTop: "2rem",
      marginLeft: "0.5rem",
    },

    topcard: {
      marginLeft: "2.5rem",
    },

    body1: {
      fontSize: "1.2rem",
      width: "100%",
      marginTop: "1rem",
      marginLeft: "0.5rem",
    },

    saly: {
      width: "55%",
      height: 0,
      paddingTop: "29.25%",
      marginLeft: "13rem",
    },

    grid2: {
        marginLeft: "3rem",
    },

  

    cardCont: {
      display: "flex",
      flexDirection: "row",
    },
  })
);

export const Home: React.FC<HomeProps> = ({}) => {
  const classes = useStyle();
  const { text } = useContext(UserContext);

  return (
    <Grid
      container
      spacing={2}
      alignContent="stretch"
      wrap="wrap"
    >
      <Grid item xs={2} lg={2} md={2}>
        <Typography className={classes.h1} variant="h1" color="initial">
          Inicio
        </Typography>
      </Grid>

      <Grid item xs={9} lg={11} md={11}>
        <Card className={classes.topcard}>
          <CardContent className={classes.cardCont}>
            <Grid item>
              <Typography className={classes.h2} variant="h1">
                Hola, {text}
              </Typography>
              <Typography className={classes.body1} variant="body1">
                Crea contenido interactivo, revisa las estadísticas de las
                clases y conéctate con tu comunidad.
              </Typography>
            </Grid>
            <Grid item lg={10}>
              <CardMedia className={classes.saly} image={image_banner} />
            </Grid>
          </CardContent>
        </Card>
        <Grid item lg={4}>
          <Typography className={classes.h1} variant="h1" color="initial">
            Tus Clases
          </Typography>
        </Grid>
      </Grid>

      {CoursesData.map((item, index) => {
        return (
          <Grid
            container
            spacing={3}
            lg = {4}
            
            direction="row"
            key={index}
            alignContent = "stretch"
          >
            <Grid item direction="row"
            className={classes.grid2}>
              <CardClasesHome
                clase={item.title}
                icon={item.icon}
                image={miniVideo}
                title_video="Introdcción a los Hooks-React"
              />
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
