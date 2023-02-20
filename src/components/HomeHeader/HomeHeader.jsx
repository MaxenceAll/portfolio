import { NavLink } from "react-router-dom";

import './HomeHeader.css'

function HomeHeader() {
  return (
    <>
      <header className="header">
        <ul className="header-tabs">

          <NavLink 
          to="/stat/status"
          className={(nav) => (nav.isActive ? "header-tab-active" : "")}
          >
            <li className="">
             STAT
            </li>
          </NavLink>

          <NavLink 
          to="/exp"
          className={(nav) => (nav.isActive ? "header-tab-active" : "")}
          >
            <li>
              EXP
            </li>
          </NavLink>

          <NavLink 
          to="/data"
          className={(nav) => (nav.isActive ? "header-tab-active" : "")}
          >
          <li>
            DATA
          </li>
          </NavLink>

          <NavLink 
          to="/map"
          className={(nav) => (nav.isActive ? "header-tab-active" : "")}
          >
            <li>
              MAP
            </li>
          </NavLink>

          <NavLink 
          to="/color"
          className={(nav) => (nav.isActive ? "header-tab-active" : "")}
          >
          <li>
            COLOR
          </li>
          </NavLink>
          
        </ul>
      </header>
    </>
  );
}

export default HomeHeader;
