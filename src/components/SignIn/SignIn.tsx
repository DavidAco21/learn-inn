import {
  Box,
  BoxProps,
  Card,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import clsx from "clsx";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import React from "react";
import Modal from "./Modal";

interface SignInProps {
  isModalVisible: Boolean;
  onBackDropClick: () => void;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },

    glass: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(7px)",
      borderRadius: 15,
      backgroundImage:
        "linear-gradiant(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",

      boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
      borderLeft: "( solid 1px rgba(255, 255, 255, 0.3))",
      borderTop: "( solid 1px rgba(255, 255, 255, 0.8))",
    },

    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },

    submit: {
      margin: theme.spacing(3, 0, 2),
    },

    textField: {
      borderBlockColor: theme.palette.common.white,
    },
  })
);

export const SignIn: React.FC<SignInProps> = ({
  isModalVisible,
  onBackDropClick,
}) => {
  const classes = useStyle();

  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackDropClick={onBackDropClick}>
      <Card className={classes.glass}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrarme
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Apellido"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Registrarme
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Ya tengo una cuenta, Ingresar
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}></Box>
        </Container>
      </Card>
    </Modal>
  );
};
