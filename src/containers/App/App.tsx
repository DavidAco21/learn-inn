import React, { useState } from "react";
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
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
// declare const firebase: any;
// const firebaseConfig = {
//   apiKey: "AIzaSyC3x5GCNvK8KBU1buRi4KSfi1sExYORuY4",
//   authDomain: "learnin-5f9e8.firebaseapp.com",
//   projectId: "learnin-5f9e8",
//   storageBucket: "learnin-5f9e8.appspot.com",
//   messagingSenderId: "266191199349",
//   appId: "1:266191199349:web:8ac3737bfaa5e623426c3c",
//   measurementId: "G-MTJG28BZM2",
// };

// firebase.initializeApp(firebaseConfig);
// export default firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
               
              </Nav>
            </Switch>
          </BrowserRouter>

          <div className="backgroundApp" />
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
};
