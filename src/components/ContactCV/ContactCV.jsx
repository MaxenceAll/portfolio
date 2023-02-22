import { NavLink } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import './ContactCV.css'


function ContactCV() {


    function handleClick() {
        window.location.href = "mailto:maxence.allart@gmail.com?subject=A l'attention de ALLART Maxence";
      }

    return ( <>
        <div className='ContactCV'>
            
            <div className="HomeMiddleFooter">
                <NavLink to="/cv" className="LienversCV">
                        <p>ALLART Maxence : Concepteur Developpeur d'Application</p>
                        <p >Télécharger CV :<FaDownload /></p>
                </NavLink>
            </div>
                        <p className="mail-me" onClick={handleClick}>Contact : maxence.allart@gmail.com  <HiMail /></p>
        </div>
    </> );
}

export default ContactCV;