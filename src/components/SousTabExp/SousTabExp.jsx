
import { NavLink } from "react-router-dom";


import './SousTabExp.css'


function SousTabExp(props) {


  return (
    <>

<header className="header-soustab-exp">
            <ul className="sous-tabs-stat-exp">

              <NavLink 
              to="/exp/jobs"
              className={(nav) => (nav.isActive ? "sous-tabs-stat-active-exp" : "")}
              >
                <li className="">JOBS</li>
              </NavLink>

              <NavLink 
              to="/exp/diplomes"
              className={(nav) => (nav.isActive ? "sous-tabs-stat-active-exp" : "")}
              >
              <li className="">DIPLOMES</li>              
              </NavLink>

              <NavLink 
              to="/exp/languages"
              className={(nav) => (nav.isActive ? "sous-tabs-stat-active-exp" : "")}              
              >
              <li className="">LANGUAGES</li>
              </NavLink>

            </ul>


            </header>


    </>
  );
}

export default SousTabExp;
