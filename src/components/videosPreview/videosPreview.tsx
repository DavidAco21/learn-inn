import React, { useContext } from "react";
import ReactDOM from "react-dom";
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
import miniatura from "../../images/renders/miniatura.png";

import { Link } from "react-router-dom";
import { CardList } from "../CardListVideos/CardList";
import { VideosPreviewData } from "../CardListVideos/VideosPreviewData";

interface VideosPreviewProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
  
    paper: {
      marginRight: theme.spacing(2),
    },
    grid: {
      width: "100%",
      margin: "0px",
    },

 
    menuPaper: {
      marginBottom: "1rem",
      marginTop: "1rem",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(7px)",
      borderRadius: 30,
    },

    card: {
      marginTop: "3em", 
      marginLeft: "-10em"
    },
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

  const { id } = useParams<{ id: string }>();
  const course = VideosPreviewData.find((item) => item.id == parseInt(id));

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
    <Grid container xs = {12} >
      {VideosPreviewData.map((item, index) => {
        return (
          <Grid
            container
            spacing={1}
            xs={8}
            direction="row"
            key={index}
            alignContent="stretch"
            className = {classes.card}
          >
            <Grid item direction="row" >
              <CardList
                clase={item.curse}
                image={miniatura}
                title_video={item.title}
              />
            </Grid>
          </Grid>
        );
      })}

  
    </Grid>
  );
};
