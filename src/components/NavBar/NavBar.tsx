import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavBarInfo } from "./NavBarInfo";
import CoursesList from "../CoursesList/CoursesList";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({

    root: {
      display: 'flex',
    },

   
  })
);

function NavBar() {
  const [selected, setSelected] = useState(NavBarInfo[0].path);

  const classes = useStyle();

  return (
    
    <div>
      <div className="navBar">
        <div className="navItems">
          {NavBarInfo.map((item, index) => {
            const itemSelected = selected === item.path;

            return <CoursesList item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
