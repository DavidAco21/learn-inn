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
  
  interface PollProps {}
  
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
  
  export const Poll: React.FC<PollProps> = () => {
    const [check, setCheck] = React.useState({
      checkedA: false,
    });
  
    const classes = useStyle();
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheck({ ...check, [event.target.name]: event.target.checked });
    };
  
  
    const [newAnswer, setNewAnswer] = useState([{ text: "", rightAnswer: false }]);


  const handleChangeInput = (index : number , e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const values = [...newAnswer];
    values[index].text = e.target.value;
    setNewAnswer(values);

  }
  
  
  
  
    const handleAddNewOption = () => {
      setNewAnswer([...newAnswer, { text: "", rightAnswer : false }]);
    };
  
    const handleRemoveOption = (index: any) => {
      const values = [...newAnswer];
      values.splice(index, 1);
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
              value={answer.text}
              onChange = {event => handleChangeInput(index, event)}  
            
             
            />
  

  
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
  