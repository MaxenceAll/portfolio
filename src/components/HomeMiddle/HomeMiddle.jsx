import { NavLink } from "react-router-dom";
import StatTab from "../SousTabStat/SousTabStat";
import { FaDownload } from "react-icons/fa";

import './HomeMiddle.css'
import Status from "../StatSection/Status/Status";

function HomeMiddle() {
  return (
    <>
        <div className="HomeMiddleContainer">

            <div className="HomeMiddleHeader">
                <StatTab />
            </div>

            <div className="HomeMiddleContent">
               <Status />
            </div>

            <div className="HomeMiddleFooter">
                <NavLink to="/cv" className="LienversCV">
                        <p>ALLART Maxence : Concepteur Developpeur d'Application</p>
                        Télécharger CV :<FaDownload />
                </NavLink>
            </div>
        </div>
    </>
  );
}

export default HomeMiddle;
