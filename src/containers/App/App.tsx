import React, { useState } from "react";
import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import { Home } from "../../containers/Home/Home";
import NavBar from "../../components/NavBar/NavBar";
import Nav from "../../components/Nav/Nav";
import Community from "../Community/Community";
import { CoursesPreview } from "../../components/CoursesPreview/CoursesPreview";
import { Configuration } from "../Configuration/Configuration";
import { UserContext } from "../../utils/UserContext";

import { lightTheme } from "../../theme/appTheme";

import { LoginSign } from "../LoginSign/LoginSign";
import { Curso } from "../Curso/Curso";
import { VideoEdit } from "../VideoEdit/VideoEdit";
import { LEARNIN_COLLECTION } from "../../utils/firebase";
import { VideoDone } from "../VideoDone/VideoDone";

LEARNIN_COLLECTION.collection('questions').add (
  {

  name: "que le pasa a Lupita?",
  description: " ",
  duration: 20,
  type: 'multipleChoice',

  option: {
    multipleChoice: [
      {
        answer: "No se",
        rightAnswer: true,
      },

      {
        answer: "Si sé",
        rightAnswer: false,
      }
    ],
   
  },


    }
)


export const App = () => {
  const [text, setText] = useState("");
  const [profesor, setProfesor] = useState(true);

  let theme: Theme = createMuiTheme(lightTheme);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ text, setText, profesor, setProfesor }}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={LoginSign} />
              <Nav>
                <Route path="/home" component={Home} />
                <Route path="/courses" component={CoursesPreview} />
                <Route path="/configuration" component={Configuration} />
                <Route path="/community" component={Community} />
                <Route path="/courses/:id" component={Curso} />
                <Route path="/video" component={VideoEdit} />
                <Route path="/videoDone" component={VideoDone} />
              </Nav>
            </Switch>
          </BrowserRouter>

          <div className="backgroundApp" />
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
};
