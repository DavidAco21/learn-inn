import React, { useContext, useState } from "react";

import ModalVideo from "./ModalVideo";
import {
  Box,
  Button,
  Card,
  Container,
  createStyles,
  CssBaseline,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { MultipleOp } from "./MultipleOp";

interface CreateQuestionProps {
  isModalVisible: Boolean;
  onBackDropClick: () => void;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      width: "100%",
    },

    sub: {
      marginLeft: ".5em",
      fontSize: "1.3em",
      marginTop: "2em",
    },

    glass: {
      marginTop: theme.spacing(4),
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
      marginTop: theme.spacing(2),
    },

    submit: {
      margin: theme.spacing(3, 0, 2),
    },

    textField: {
      borderBlockColor: theme.palette.common.white,
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },

    multipleOp: {
      marginLeft: "1em",
    },
  })
);

export const CreateQuestion: React.FC<CreateQuestionProps> = ({
  isModalVisible,
  onBackDropClick,
}) => {
  const classes = useStyle();

  const [time, setTime] = React.useState("");
  const [type, setType] = React.useState(-1);

  const handleTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTime(event.target.value as string);
  };

  const categorias = [
    {
      "nombre": "Opción Múltiple",
      "componente": [ <Grid item xs={12}>
                     <MultipleOp >  </MultipleOp>
                     </Grid> ]
    },
    {
      "nombre": "Verdadero o Falso",
      "componente": [ <Grid item xs={12}>
                     <p> Verdadero o Falso </p>
                     </Grid> ]
    },

    {
      "nombre": "Respuesta Corta",
      "componente": [ <Grid item xs={12}>
                     <p> Respuesta corta </p>
                     </Grid> ]
    }
  ]

  const handlerAnswerType = (e: any) => {
    const opcion = e.target.value;
    setType(opcion);
  }
 

  const handleType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as number); 
        
        console.log(type)
 
   
  };




  if (!isModalVisible) {
    return null;
  }

 

  return (
    <ModalVideo onBackDropClick={onBackDropClick}>
      <Card className={classes.glass}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h6">
              Crea tu pregunta
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    className={classes.textField}
                    id="standard-basic"
                    autoComplete="fname"
                    name="firstName"
                    required
                    fullWidth
                    label="Escribe tu pregunta"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="filled"
                    fullWidth
                    id="filled-basic"
                    label="Puedes añadir una descripción"
                  />
                </Grid>

                <Grid container>
                  <Grid item xs={5}>
                    <Typography
                      component="h1"
                      variant="h6"
                      className={classes.sub}
                    >
                      Crea las opciones
                    </Typography>
                  </Grid>

                  <Grid item xs={3}>
                    <FormControl
                      className={classes.formControl}
                      variant="filled"
                    >
                      <Select
                        value={time}
                        onChange={handleTime}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ "aria-label": "Without label" }}

                        
                      >
                        
                        <MenuItem value="" disabled>
                          Duración
                        </MenuItem>
                        <MenuItem value={10}>10 segundos</MenuItem>
                        <MenuItem value={20}>20 segundos</MenuItem>
                        <MenuItem value={30}>30 segundos</MenuItem>
                        <MenuItem value={60}>1 minuto</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={4}>
                    <FormControl
                      className={classes.formControl}
                      variant="filled"
                    >
                      <Select

                        value={type}
                        onChange={handleType}
                        onClick = {handlerAnswerType}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ "aria-label": "Without label" }}

                      >
                        
                        <MenuItem value={-1} disabled>  Tipo de respuesta </MenuItem>
                        {categorias.map((item, index) => (
                         
                        <MenuItem key = {"categoria"+ index} value={index}> {item.nombre}</MenuItem>
                        

                        ))}
                        
                      </Select>
                      {/* <MenuItem value={2}>Verdadero o Falso</MenuItem>
                        <MenuItem value={3}>Respuesta corta</MenuItem> */}
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid item xs={12}>

                {
                  type > -1 &&
                  (
                    categorias[type].componente.map((item, index)=>(

                      <MenuItem key = {"componente"+index} value = ""> {item}</MenuItem>
                    
                    
                    ))
                  )
                }
                  
                </Grid>
                 {/* <Grid item xs={12}>
                  <MultipleOp></MultipleOp>
                </Grid>
                <Grid item xs={12}>
                  <MultipleOp></MultipleOp>
                </Grid>  */}

            
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Finalizar
              </Button>
              <Grid container justify="flex-end"></Grid>
            </form>
          </div>
          <Box mt={5}></Box>
        </Container>
      </Card>
    </ModalVideo>
  );
};
