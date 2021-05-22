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

interface MultipleOpProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    answerField: {
      display: "flex",
      flexDirection: "row",
    },

    checkbox: {
      marginTop: "1em",
      marginLeft: "3.2em",
    },

    delete: {
      marginTop: ".7em",
    },
  })
);

export const MultipleOp: React.FC<MultipleOpProps> = () => {
  const [check, setCheck] = React.useState({
    checkedA: false,
  });

  const classes = useStyle();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };


  const [newAnswer, setNewAnswer] = useState([{ textAnswer: "" }]);


 /*  const handleChangeInput = (index : any, e: React.ChangeEvent<HTMLInputElement>) => {
    const values = [...newAnswer];
    values[index].textAnswer[e.target.name] = e.target.value;
    setNewAnswer(values);

  } */

  

  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewAnswer({
      ...newAnswer,
      [e.target.name]: e.target.value
    })
  }



  const handleAddNewOption = () => {
    setNewAnswer([...newAnswer, { textAnswer: "" }]);
  };

  const handleRemoveOption = (index: any) => {
    const values = [...newAnswer];
    values.splice(index, 1 );
    setNewAnswer(values);
  };

  return (
    <Grid container>
      {newAnswer.map((answer, index) => (
        <Grid
          key={index}
          item
          xs={12}
          direction="row"
          className={classes.answerField}
        >
          <TextField
            fullWidth
            label="Escribe una respuesta"
            value={answer.textAnswer}  
            
            
           
          />

          <Grid item xs={1} className={classes.checkbox}>
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

          <Grid item xs={1} className={classes.delete}>
            <IconButton aria-label="delete" onClick={handleRemoveOption}>
              <DeleteIcon />
            </IconButton>
          </Grid>

          <Grid item xs={1} className={classes.delete}>
            <IconButton aria-label="add" onClick={handleAddNewOption}>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
