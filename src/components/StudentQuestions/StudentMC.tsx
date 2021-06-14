import {
  Button,
  ButtonGroup,
  CardContent,
  createStyles,
  FormControlLabel,
  Grid,
  IconButton,
  LinearProgress,
  makeStyles,
  RadioGroup,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { Card } from "@material-ui/core";
import ModalVideo from "../CreateQuestion/ModalVideo";
import Typography from "@material-ui/core/Typography";
import { Questions } from "../../utils/Questions";
import { Radio } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { QuestionType } from "../../utils/QuestionType";

interface StudentMCProps {
  question: QuestionType;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    glass: {
      marginTop: theme.spacing(4),
      display: "flex",
      padding: "1.5em",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255)",
      borderRadius: 5,
      backgroundImage:
        "linear-gradiant(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",

      boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
      borderLeft: "( solid 1px rgba(255, 255, 255, 0.3))",
      borderTop: "( solid 1px rgba(255, 255, 255, 0.8))",
    },

    content: {
      flex: "1 0 auto",
    },

    name: {
      fontSize: "1.5em",
    },

    top: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "1em",
    },

    time: {
      fontSize: "1em",
      marginLeft: "20em",
      marginTop: ".4em"
    },

    line: {
      width: "100%",
      marginTop: "1.4em"

    },

    list: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      /* '&:hover': {
        backgroundColor: '#577BF9',
    }, */
    },

    buttonBlue: {
      display: "flex",
      marginLeft: "30em",
      marginTop: "1.5em",
    },
  })
);

export const StudentMC: React.FC<StudentMCProps> = ({
  question
}) => {
  const classes = useStyle();

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  return (<>
    {question.options?.map((option, index) => {
      return (
        <Grid item key={index} xs={12}>
          <List
            component="nav"
            className={classes.list}
            aria-label="mailbox folders"
          >
            <ListItem
              button
              selected={selectedIndex === index}
              onClick={(event) =>
                handleListItemClick(event, index)
              }
            >
              <ListItemText primary={option.text} />
            </ListItem>
            <Divider />
          </List>
        </Grid>
      );
    })}
  </>);
};
