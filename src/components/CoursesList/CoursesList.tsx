import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { NavBarItem } from "../../utils/NavBarItem";

import '../NavBar/NavBar.css';

interface CoursesListProps {
  item: NavBarItem;
}

const CoursesList: FC<CoursesListProps> = ({ item }) => {
  return (
    <div className="nav-daddy">
      <Link to={item.path} className={"nav-items"}>
        <div className="icon-title">
          {item.icon}
          <div className="nav-titles">{item.title}</div>
        </div>
      </Link>
    </div>
  );
};

export default CoursesList;
