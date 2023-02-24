import React, { useEffect, useState } from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faRectangleList,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <>
      <nav className="sidebar">
        <h1>ToDo</h1>
        <hr />
        <ul>
          {" "}
          <li>
            <Link to="/" id={activeLink === "/" ? "active" : ""}>
              <FontAwesomeIcon icon={faRectangleList} /> ALL
            </Link>
          </li>
          <li>
            <Link to="/planned" id={activeLink === "/planned" ? "active" : ""}>
              <FontAwesomeIcon icon={faClipboardList} /> PLANNED
            </Link>
          </li>
          <li>
            <Link
              to="/completed"
              id={activeLink === "/completed" ? "active" : ""}
            >
              <FontAwesomeIcon icon={faCheckCircle} /> COMPLETED
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Sidebar;
