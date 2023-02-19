import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDownload } from "react-icons/fa";

import vaultboy from "../../assets/vaultboy.gif";
import { NavLink } from "react-router-dom";


function MiddleSection() {
  return (
    <>
      <section>
        <div className="affichage">
          <div className="div1">sous tab ici</div>
          <div className="div2">
            <img
              className="animated-gif"
              src={vaultboy}
              alt="vault boy marchant"
            />
          </div>
          <div className="div3">
            <ul>
              <li>
                <FaHtml5 />
              </li>
              <li>
                <FaCss3Alt />
              </li>
              <li>
                <FaJs />
              </li>
              <li>
                <FaReact />
              </li>
            </ul>
          </div>

          <NavLink to="/cv">
          <div className="div4">
            <p>ALLART Maxence : Concepteur Developpeur d'Application</p>
            Télécharger CV :<FaDownload />
          </div>
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default MiddleSection;
