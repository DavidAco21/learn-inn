import {
    createStyles,
    FormControlLabel,
    Grid,
    IconButton,
    makeStyles,
    TextField,
    Theme,
  } from "@material-ui/core";
  import React, { useContext, useState } from "react";
  import DeleteIcon from "@material-ui/icons/Delete";
  import AddIcon from "@material-ui/icons/Add";
  import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
  
  interface ShortAnswerProps {}
  
  const useStyle = makeStyles((theme: Theme) =>
    createStyles({
      answerField: {
        display: "flex",
        flexDirection: "row",
      },
  
  
      delete: {
        marginTop: ".7em",
      },
    })
  );
  
  export const ShortAnswer: React.FC<ShortAnswerProps> = () => {
   
  
    const classes = useStyle();
  

  
    return (
      <Grid container>
     
          <Grid
            item
            xs={12}
            direction="row"
            className={classes.answerField}
          >
            <TextField
              fullWidth
              label="El estudiante debe escribir aquí"
              disabled
            />

  
          </Grid>
       
      </Grid>
    );
  };
  