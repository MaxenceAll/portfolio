
import { NavLink } from "react-router-dom";


import './SousTabStat.css'


function SousTabStat(props) {


  return (
    <>


            <ul className="sous-tabs-stat">

              <NavLink to="/stat/status">
                <li className="sous-tabs-stat-active">STATUS</li>
              </NavLink>

              <NavLink to="/stat/special">
              <li>SPECIAL</li>
              </NavLink>

              <NavLink to="/stat/perks">
              <li>PERKS</li>
              </NavLink>

            </ul>





    </>
  );
}

export default SousTabStat;
