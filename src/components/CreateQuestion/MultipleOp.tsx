import {  createStyles, FormControlLabel, Grid, IconButton, makeStyles, TextField, Theme } from "@material-ui/core";
import React, { useContext, useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';



interface MultipleOpProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    
    checkbox: {
      marginTop: "1em",
      marginLeft: "3.2em",
    },

    delete: {
        marginTop: ".7em"
    }
  })
);


export const MultipleOp: React.FC<MultipleOpProps> = () => {
  const [check, setCheck] = React.useState({
    checkedA: false,
  });

  const classes = useStyle();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck({ ...check, [event.target.name]: event.target.checked});
  };

  


  return (
    <Grid container >
      <Grid item xs={9} >
        <TextField fullWidth label="Agregar Opción "  />
      </Grid>

      <Grid item xs = {1} className = {classes.checkbox}>
        <FormControlLabel
          control={
            <Checkbox
              checked={check.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
          }
          label=""
        />
      </Grid>
          
    <Grid item xs = {1} className = {classes.delete}>
    <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>

    </Grid>
      
    </Grid>
  );
};
