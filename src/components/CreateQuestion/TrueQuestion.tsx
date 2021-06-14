import {
  createStyles,
  FormControlLabel,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

interface TrueQuestionProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    answerField: {
      display: "flex",
      flexDirection: "row",
    },

    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(63),
        height: theme.spacing(10),
      },
    },

    delete: {
      marginTop: ".7em",
    },

  

    titleF: {
        marginTop: "1.5em",
        marginLeft: "12em"

    },


    title2: {
        marginTop: "2.5em",
        marginLeft: "12em"

    },

    titleFalse: {
        marginTop: "1.4em",
        marginLeft: "14.7em"

    }
  })
);

export const TrueQuestion: React.FC<TrueQuestionProps> = () => {
 

  const [value, setValue] = React.useState(null as null|boolean);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value === 'true');
  };

  const classes = useStyle();

  return (
    <Grid container>
      <input type="hidden" value={value + ''} name="boolean" />
      <Grid item xs={12} direction="row" className={classes.root}>
        <Paper>
          <RadioGroup value={value} onChange={handleChange} >
            <FormControlLabel 
            className={classes.titleF}
            
            value={true} control={<Radio />} label="Verdadero" />
            <FormControlLabel 
            className={classes.title2}
            
          
            value={false} control={<Radio />} label="Falso" />
            </RadioGroup>
        </Paper>
        <Paper>
            <Typography
            className={classes.titleFalse}> Falso</Typography>
        
        </Paper>
      </Grid>
    </Grid>
  );
};
