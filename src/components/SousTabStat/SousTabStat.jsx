
import { NavLink } from "react-router-dom";


import './SousTabStat.css'


function SousTabStat(props) {


  return (
    <>

<header className="header-soustab">
            <ul className="sous-tabs-stat">

              <NavLink 
              to="/stat/status"
              className={(nav) => (nav.isActive ? "sous-tabs-stat-active" : "")}
              >
                <li className="">STATUS</li>
              </NavLink>

              <NavLink 
              to="/stat/special"
              className={(nav) => (nav.isActive ? "sous-tabs-stat-active" : "")}
              >
              <li className="">SPECIAL</li>              
              </NavLink>

              <NavLink 
              to="/stat/perks"
              className={(nav) => (nav.isActive ? "sous-tabs-stat-active" : "")}              
              >
              <li className="">PERKS</li>
              </NavLink>

            </ul>


            </header>


    </>
  );
}

export default SousTabStat;
