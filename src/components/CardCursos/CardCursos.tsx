import React from "react";
import Button from "@material-ui/core/Button";
import {
  createStyles,
  makeStyles,
  Theme,
  Grid,
  CardMedia,
  ButtonGroup,
} from "@material-ui/core";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import { CoursesData } from "../CoursesPreview/CoursesData";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';

import { Configuration } from "../../containers/Configuration/Configuration";
import { useParams, useHistory, Route } from "react-router";
import { VideosPreview } from "../videosPreview/videosPreview";
import { UploadVideo } from "../UploadVideo/UploadVideo";

interface CardCursosProps {
  icon?: string;
  title?: string;
}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      width: "100%",
      margin: "0px",
    },

    avatar: {
      backgroundColor: theme.palette.primary.main,
      marginTop: "0.9em",
    },

    h1: {
      fontSize: "1.8rem",
      marginTop: "0.8em",
    },

    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },

    card: {
      alignItems: "center",
      alignContent: "center",
      marginLeft: "11em",
    },

    subtitle: {
      fontSize: "1.2rem",
      textAlign: "center",
      marginTop: "0.18em",
    },

    btnGroup: {
      display: "flex",
      flexDirection: "row",
      marginLeft: "6em",
      marginTop: "0.5rem"
    },

    btnNumber: {
      marginBottom: "1rem",
    },

    tabs: {
      marginLeft: "7rem"
    }
  })
);

export const CardCursos: React.FC<CardCursosProps> = ({ icon, title, }) => {

 
  const tabNameToIndex = [
  
  {
    0:"videos",
    1: "Envivo"
  }];

  const indexToTabName = {
    videos: 0,
    envivo: 1
  };

  const {id} = useParams<{ id : string}> ();
  const course = CoursesData.find(item => item.id== parseInt(id));

  const [valueTab, setValueTab] = React.useState(2);
  const classes = useStyle();
  
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    history.push(`/courses/${course?.id}/${tabNameToIndex[newValue]}`);
    setValueTab(newValue);
  };

  
  const fabs = [
    {
      color: 'primary' as 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },

  ];


  return (
    <Grid item className={classes.grid} alignItems="center">
      <Card>
        <Grid item>
          <CardHeader
            className={classes.card}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {icon}
              </Avatar>
            }
            title={
              <Typography variant="h1" color="initial" className={classes.h1}>
                {title}
              </Typography>
            }
          />
        </Grid>

        <Grid item direction="row" className={classes.btnGroup} lg={12}>
          <Grid item lg={3} className={classes.subtitle}>
            <Typography variant="h2" className={classes.subtitle}>
              Unidades
            </Typography>
          </Grid>

          <Grid item lg={8} className={classes.btnNumber}>
            <Button color="primary">1</Button>
            <Button color="primary">2</Button>
            <Button color="primary">3</Button>
            <Button color="primary">4</Button>
          </Grid>
        </Grid>

        <Grid item lg = {8} alignItems="center" className = {classes.tabs}>
          <Tabs onChange={handleChange}
          
            value={valueTab}
            indicatorColor="primary"
            textColor="primary"
           
            aria-label="disabled tabs example"
          >
            <Tab label="Videos"  />
            <Tab label="Nuevo Video" />
          </Tabs>
         
      
        </Grid>
      </Card>
     {valueTab === 0 && <VideosPreview />} 

    {valueTab === 1 && 
       <UploadVideo />
     }
     
       
      

      
    </Grid>
  );
};
