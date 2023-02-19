import { NavLink } from "react-router-dom";

function HomeHeader() {
  return (
    <>
      <header className="header">
        <ul className="tabs">

          <NavLink to="/">
            <li className="tab-active">
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
