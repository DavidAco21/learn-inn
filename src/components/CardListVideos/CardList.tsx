import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme, Grid } from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { CoursesData } from "../CoursesPreview/CoursesData";
import { useHistory } from "react-router";

interface CardListProps {
  image: string;
  title_video: string;
  clase: string;

}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    h1: {
      fontSize: "1.3rem",
      marginTop: ".3em"
    },

    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },

    b2: {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },

    mainBTN: {
      display : "flex",
      flexDirection : "row",
    },

    buttonBlue: {
        marginLeft : "5em"

    },

    edit: {
      width: "99%",
    },
  })
);

export const CardList: React.FC<CardListProps> = ({
  image,
  title_video,
  clase,

}) => {
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const history = useHistory();

  const handleVideoDone = () => {
    history.push("/videoDone");
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h1" color="initial" className={classes.h1}>
            {clase}
          </Typography>
        }
        
      />
      <CardMedia className={classes.media} image={image} title={title_video} />
      <CardContent>
        <Grid item className = {classes.mainBTN} >
        <Typography variant="h1" component="p" className={classes.h1}>
          {title_video}
        </Typography>
        <Button
        className = {classes.buttonBlue}
        onClick = {handleVideoDone}
        variant="contained"
        color="primary"
        disableElevation> 
        Ver Video
        </Button>

        </Grid>
       
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Tus estudiantes estan participando un:
          </Typography>
          <Typography paragraph className={classes.b2} align="left">
            80%
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            startIcon={<EqualizerIcon />}
            className={classes.edit}
          >
            Ver mas detalles
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};
