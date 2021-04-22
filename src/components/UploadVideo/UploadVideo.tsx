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

import Typography from "@material-ui/core/Typography";

import { useParams, useHistory } from "react-router";
import { VideosPreview } from "../videosPreview/videosPreview";
import firebase from "../../utils/firebase";

interface UploadVideoProps {}

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      alignContent: "center",
      display: "flex",
      justifyItems: "center",
    },

    h1: {
      fontSize: "1.5em",
      textAlign: "center",
      marginLeft: "9em",
      marginTop: "1em",
    },

    btn: {
      marginLeft : "13.5em",
      marginTop: "3em"
    }
  })
);

export const UploadVideo: React.FC<UploadVideoProps> = ({}) => {
  const classes = useStyle();

 /*  const handlefile = (event: any) => {
    console.log(event.target);

    const file = event.target.file[0]
    
    var storageRef = firebase.storage().ref();
    var fileRef = storageRef.child(`${file.name}`)

    fileRef.put(file).then(function(snapshot: any) {
      console.log (snapshot)


    });

  }
 */
  const history = useHistory();

  const handleVideo = () => {
    history.push("/video");
  }

  return (
    <Grid container alignContent="center" className={classes.grid} lg={12}>
      <Typography className={classes.h1} variant="h1">
        Nuevo Video
      </Typography>
      <Grid item xs = {12} className = {classes.btn}>
      <Button variant="contained" component="label" onClick = {handleVideo} >
        Subir video
        <input type="file" hidden /> 
      </Button>

      </Grid>
     
    </Grid>
  );
};
