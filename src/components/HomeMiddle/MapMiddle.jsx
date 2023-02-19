import './MapMiddle.css';
import MapNord from "../../assets/nord.gif";

import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";


function MapMiddle() {

    return ( <>
    
        <div className='MapNord-container'>
            <img src={MapNord} alt="carte du nord" />

            <div>
                Disponible sur toute la région Nord.
            </div>

            <div className="HomeMiddleFooter">
                <NavLink to="/cv" className="LienversCV">
                        <p>ALLART Maxence : Concepteur Developpeur d'Application</p>
                        Télécharger CV :<FaDownload />
                </NavLink>
            </div>

        </div>
    
    </>);
}

export default MapMiddle;