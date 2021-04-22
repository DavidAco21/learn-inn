import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import indigo from "@material-ui/core/colors/indigo";
import Tab from "@material-ui/core/Tab";

import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import image_professor from "/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/profesor.png";
import image_student from "/Users/jedidiaszapata/Desktop/learn-inn/src/images/renders/estudiante.png";
import { Tabs } from "material-ui";
import { UserContext } from "../../utils/UserContext";
import clsx from "clsx";
import { SignIn } from "../../components/SignIn/SignIn";

interface SignupProps {
  onLoginClick: () => void;
  user: string;
  image: string;
  nameButton: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },

    background: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.primary.main
          : theme.palette.grey[900],
    },

    backgroundStudent: {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.secondary.main
          : theme.palette.grey[900],
    },

    image: {
      width: "70%",
      marginTop: "10%",
      alignItems: "center",
      marginLeft: "19%",
    },

    h1: {
      color: "white",
      fontSize: "2em",
      marginTop: "5em",
    },

    h2: {
      color: "white",
      marginTop: "1.5em",
      fontSize: "1.3em",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "30%",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },

    avatar2: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },

    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      color: "white",
    },
    soyStudent: {
      color: "white",
      marginTop: "13em",
    },
  })
);

export const Signup: React.FC<SignupProps> = ({
  onLoginClick,
  user,
  image,
  nameButton,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  const classes = useStyles();

  const { profesor, setProfesor, text, setText } = useContext(UserContext);

  const toggleStudent = () => {
    setProfesor(!profesor);
  };

  return (
    <Grid container component="main" className={classes.root} >
      <SignIn isModalVisible={isModalVisible} onBackDropClick={toggleModal} />
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={clsx(classes.background, {
          [classes.backgroundStudent]: !profesor,
        })}
        alignContent="center"
      >
        <Typography className={classes.h1} variant="h1" align="center">
          ¡Hola {user}!
        </Typography>
        <Typography className={classes.h2} variant="h2" align="center">
          Crea, Comparte y Apoya. ¡Aprendamos Juntos!
        </Typography>

        <img className={classes.image} src={image}></img>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar
            className={clsx(classes.avatar, {
              [classes.avatar2]: !profesor,
            })}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              color={profesor ? "primary" : "secondary"}
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              placeholder = "Nombre"
              name="email"
              value={text}
              onChange={(e: any) => setText(e.target.value)}
            />
             <TextField
                    color={ profesor ? "primary" : "secondary"}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    placeholder = "Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />  
            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color={profesor ? "primary" : "secondary"}
                />
              }
              label="Recuérdame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={profesor ? "primary" : "secondary"}
              onClick={onLoginClick}
              className={classes.submit}
            >
              Ingresar
            </Button>

            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  color={profesor ? "primary" : "secondary"}
                ></Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  color={profesor ? "primary" : "secondary"}
                  onClick={toggleModal}
                >
                  {"No tienes una cuenta? Regístrate"}
                </Link>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                onClick={toggleStudent}
                color={profesor ? "secondary" : "primary"}
                className={classes.soyStudent}
              >
                Soy {nameButton}
              </Button>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
