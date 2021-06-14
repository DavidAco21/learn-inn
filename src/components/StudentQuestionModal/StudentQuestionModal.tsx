import { Card, LinearProgress, Button, CardContent, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';
import { QuestionType } from '../../utils/QuestionType';
import ModalVideo from '../CreateQuestion/ModalVideo';
import { StudentMC } from '../StudentQuestions/StudentMC';
import { TrueFalseStudent } from '../StudentQuestions/TrueFalseStudent';

interface StudentQuestionModalProps {
  question: QuestionType;
  onQuestionClose: () => void;
}

const StudentQuestionModal: React.FC<StudentQuestionModalProps> = ({ question, onQuestionClose }) => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {

    const initialTime = Date.now();
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const diffTime = currentTime - initialTime;

      setProgress(diffTime / (question.duration * 1000) * 100);

      if(diffTime > question.duration * 1000) {
        onQuestionClose();
      }
    }, 500);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <ModalVideo onBackDropClick={() => null}>
    <Card className={classes.glass}>
      <CardContent className={classes.content}>
        <Grid container direction="column" >
          <Grid item className={classes.top}>
            <Typography
              component="h5"
              variant="h1"
              className={classes.name}
            >
              {question.name}
            </Typography>
            <Typography component="p" className={classes.time}>
              {question.duration}
            </Typography>

            
            {question.type === 'multipleChoice' && <StudentMC
              question={question}
            />}

            {question.type === 'boolean' && <TrueFalseStudent/>}

            {/* <PollStudent
              isPollVisible={isPollVisible}
              onBackPollClick={togglePoll}
            />

            <ShortAnswerStudent
              isShortAnswerVisible = {isShortAnswerVisible}
              onBackAnswerClick = {toggleShortAnswer}
            /> */}

          </Grid>
          <LinearProgress
            variant="buffer"
            value={progress}
            className={classes.line}
          />
          <Button
            className={classes.buttonBlue}
            variant="contained"
            color="primary"
            disableElevation
            onClick={onQuestionClose}
          >
            Enviar Respuesta
          </Button>
        </Grid>
      </CardContent>
    </Card>
  </ModalVideo>
  );
}


const useStyles = makeStyles((theme: Theme) =>
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

export default StudentQuestionModal;