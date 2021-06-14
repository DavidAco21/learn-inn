import {
  ClickAwayListener,
  createStyles,
  Fab,
  Grow,
  makeStyles,
  MenuList,
  Popper,
  Theme,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";
import Video from "ractive-player";
import ReactPlayer from "react-player";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { StudentMC } from "../../components/StudentQuestions/StudentMC";
import { TrueFalseStudent } from "../../components/StudentQuestions/TrueFalseStudent";
import { PollStudent } from "../../components/StudentQuestions/PollStudent";
import { ShortAnswerStudent } from "../../components/StudentQuestions/ShortAnswerStudent";

interface VideoDoneProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    video: {
      marginTop: "4rem",
      marginLeft: "2rem",
    },

    grid: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },

    h1: {
      fontSize: "1.5rem",
      marginBottom: ".7em",
    },

    paper: {
      marginRight: theme.spacing(2),
    },

    fab: {
      display: "flex",
      justifyItems: "flex-start",
      marginTop: "30em",
    },

    menuFab: {
      borderRadius: 30,
      color: "black",
    },

    menuPaper: {
      marginBottom: "1rem",
      marginTop: "1rem",
      background:
        "radial-gradient(103.25% 3909.97% at 1.85% 25.32%, rgba(87, 123, 249, 0.42) 0%, rgba(87, 123, 249, 0.06) 100%)",
      backdropFilter: "blur(120px)",
      borderRadius: 5,
    },

    buttonBlue: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "66em",
      marginTop: "1.5em",
    },

    floating: {
      marginTop: "9em",
      marginLeft: "2em",
    },
  })
);

export const VideoDone: React.FC<VideoDoneProps> = ({}) => {
  const classes = useStyle();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleMultipleChoice = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  const [isTrueFalseVisible, setsTrueFalseVisible] = useState(false);

  const toggleTrueFalse = () => {
    setsTrueFalseVisible((wasTrueFalseVisible) => !wasTrueFalseVisible);
  };

  const [isPollVisible, setPollVisible] = useState(false);

  const togglePoll = () => {
    setPollVisible((wasPollVisible) => !wasPollVisible);
  };

  const [isShortAnswerVisible, setShortAnswerVisible] = useState(false);

  const toggleShortAnswer = () => {
    setShortAnswerVisible((wasShortAnswerVisible) => !wasShortAnswerVisible);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <Grid container className={classes.grid}>
      <Grid item className={classes.video} xs={10}>
        <Typography
          variant="h1"
          color="initial"
          className={classes.h1}
        >Título del video </Typography>
        <ReactPlayer
          /*  url="https://www.youtube.com/watch?v=t7gRyIENXEU&t" */
          url="/videos/video1.mp4"
          width="100%"
          height="85%"
          controls={true}
          loop={true}
        ></ReactPlayer>

        <StudentMC
          isModalVisible={isModalVisible}
          onBackDropClick={toggleMultipleChoice}
        />

        <TrueFalseStudent
          isTrueFalseVisible={isTrueFalseVisible}
          onBackQuestionClick={toggleTrueFalse}
        />

        <PollStudent
          isPollVisible={isPollVisible}
          onBackPollClick={togglePoll}
        />

        <ShortAnswerStudent
          isShortAnswerVisible = {isShortAnswerVisible}
          onBackAnswerClick = {toggleShortAnswer}
        />
        
        <Button
          className={classes.buttonBlue}
          variant="contained"
          color="primary"
          disableElevation
        >
          Crear Pregunta
        </Button>
      </Grid>
      <Grid item xs={1} className={classes.floating}>
        <Fab
          color="primary"
          aria-label="add"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AddIcon />
        </Fab>

        <Paper className={classes.paper}></Paper>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper className={classes.menuPaper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem
                      onClick={toggleMultipleChoice}
                      className={classes.menuFab}
                    >
                      Ver M. Choice
                    </MenuItem>
                    <MenuItem
                      onClick={toggleTrueFalse}
                      className={classes.menuFab}
                    >
                      Ver T or F
                    </MenuItem>
                    <MenuItem  onClick={toggleShortAnswer} className={classes.menuFab}>
                      Ver ShortA
                    </MenuItem> 
                    <MenuItem  onClick={togglePoll} className={classes.menuFab}>
                      Ver Poll
                    </MenuItem> 
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};
