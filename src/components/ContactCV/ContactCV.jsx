import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "./ContactCV.css";
import CV from "../../assets/CV/CV-allart-Maxence-v4.pdf";

function ContactCV() {
  return (
    <>
      <div className="ContactCV">
        <div className="">
          <NavLink
            target="_blank"
            to="https://maxenceall.github.io/ProjectCV/"
            className="LienversCV"
          >
            <p>ALLART Maxence : Concepteur Developpeur d'Application</p>

            <p>
              Télécharger CV :
              <a href={CV} download>
                <FaDownload />
              </a>
            </p>
          </NavLink>
        </div>
        <p
          className="mail-me"
          onClick={() =>
            (window.location.href =
              "mailto:maxence.allart@gmail.com?subject=A l'attention de ALLART Maxence")
          }
        >
          Contact : maxence.allart@gmail.com <HiMail />
        </p>
      </div>
    </>
  );
}

export default ContactCV;
