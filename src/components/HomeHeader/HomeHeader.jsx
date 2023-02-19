import { NavLink } from "react-router-dom";

import './HomeHeader.css'

function HomeHeader() {
  return (
    <>
      <header className="header">
        <ul className="header-tabs">

          <NavLink to="/stat">
            <li className="header-tab-active">
             STAT
            </li>
          </NavLink>

          <NavLink to="/about">
            <li>
              EXP
            </li>
          </NavLink>


          <li>
            DATA
          </li>

          <li>
            MAP
          </li>

          <li>
            COLOR
          </li>
        </ul>
      </header>
    </>
  );
}

export default HomeHeader;
