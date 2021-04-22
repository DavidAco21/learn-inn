import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import Button from "@material-ui/core/Button";
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  Paper,
} from "@material-ui/core";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";

import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Route, useHistory, useParams } from "react-router";
import { CoursesData } from "../CoursesPreview/CoursesData";
import { UploadVideo } from "../UploadVideo/UploadVideo";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


interface VideosPreviewProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      marginLeft: "8em"
    },
    paper: {
      marginRight: theme.spacing(2),
    },
    grid: {
      width: "100%",
      margin: "0px",
    },

    fab: {
      display: "flex",
      justifyItems: "flex-start",
      marginTop: "30em",
    },

    menuFab: {
        borderRadius: 30,
        color: theme.palette.primary.main,
       

    },

    menuPaper: {
        marginBottom: "1rem",
        marginTop: "1rem",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(7px)",
        borderRadius: 30,
    }
  })
);

export const VideosPreview: React.FC<VideosPreviewProps> = () => {
  const classes = useStyle();
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

  const {id} = useParams<{ id : string}> ();
  const course = CoursesData.find(item => item.id== parseInt(id));

  const history = useHistory();

  const handleNewVideo = (event: React.ChangeEvent<{}>, newValue: number) => {
    history.push(`/courses/${course?.id}/uploadvideo`);

  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Grid container spacing={1}>
      <Grid
        item
        lg={12}
        direction="row-reverse"
        justify="flex-start"
        alignItems="flex-end"
        className={classes.fab}
      >
        {/* <Fab
          color="primary"
          aria-label="add"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AddIcon />
        </Fab> */}
      </Grid>
      <div className={classes.root}>
        <Typography
        variant = "h1">
          Lista de videos
        </Typography>
        {/* <Paper className={classes.paper}></Paper>
        <div>

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
                
                <Paper className= {classes.menuPaper} >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <Link to={`/courses/${course?.id}/subirVideo`}>
                      <MenuItem onClick={handleClose} className = {classes.menuFab} >
                        Crear Nuevo Video
                      </MenuItem>
                      </Link>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper> */}
        </div>
       
        
    
    </Grid>
  );
};
