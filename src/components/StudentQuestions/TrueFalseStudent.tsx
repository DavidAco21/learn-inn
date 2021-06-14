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
  
  interface TrueFalseStudentProps {
    isTrueFalseVisible: Boolean;
    onBackQuestionClick: () => void;
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
  
  export const TrueFalseStudent: React.FC<TrueFalseStudentProps> = ({
    isTrueFalseVisible,
    onBackQuestionClick,
  }) => {
    const classes = useStyle();
  
    const [progress, setProgress] = React.useState(0);
    const [buffer, setBuffer] = React.useState(0);
  
    const progressRef = React.useRef(() => {});
    React.useEffect(() => {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    });
  
    let duration: any;
  
    Questions.map((item) => {
      if (item.id == 0) duration = item.duration;
    });
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        progressRef.current();
      }, duration * 100);
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
  
    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number
    ) => {
      setSelectedIndex(index);
    };
  
    if (!isTrueFalseVisible) {
      return null;
    }
  
    return (
      <ModalVideo onBackDropClick={onBackQuestionClick}>
        <Card className={classes.glass}>
          <CardContent className={classes.content}>
            {Questions.map((item) => {
              if (item.id == 1) {
                return (
                  <Grid container direction="column" key={item.id}>
                    <Grid item className={classes.top}>
                      <Typography
                        component="h5"
                        variant="h1"
                        className={classes.name}
                      >
                        {item.name}
                      </Typography>
                      <Typography component="p" className={classes.time}>
                        {item.duration}
                      </Typography>
                    </Grid>
                    {item.options.map((option, index) => {
                      return (
                        <Grid item key={index} xs={12}>
                          {/*  <Typography variant="h5" className={classes.option}>
                            {option.text}
                          </Typography> */}
  
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
                    <LinearProgress
                      variant="buffer"
                      value={progress}
                      valueBuffer={buffer}
                      className = {classes.line}
                    />
                    <Button
                      className={classes.buttonBlue}
                      variant="contained"
                      color="primary"
                      disableElevation
                    >
                      Enviar Respuesta
                    </Button>
                  </Grid>
                );
              }
            })}
          </CardContent>
        </Card>
      </ModalVideo>
    );
  };
  