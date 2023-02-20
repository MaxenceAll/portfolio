import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

import './HomeMiddle.css'
import Status from "../StatSection/Status/Status";
import SousTabStat from "../SousTabStat/SousTabStat";

function HomeMiddle() {
  return (
    <>
        <div className="HomeMiddleContainer">

            <div className="HomeMiddleHeader">
                <SousTabStat />
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
